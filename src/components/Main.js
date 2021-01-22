import {useState,useEffect} from "react"
import CollegeTable from "./Table/Table"
import 'antd/dist/antd.css';
import { Doughnut,Bar,Line } from 'react-chartjs-2';
import StateChart from './charts/StateChart';
import CoursesChart from './charts/CoursesChart';
import { Drawer} from "antd"
import {dburl} from"./dburl"
import "./btn.css"
import "../App.css"
function App(props) {
  const [data, setdata] = useState([])
  const [FilterState, setFilterState] = useState("")
  const [Frequency, setFrequency] = useState({})
  const [Courses, setCourses] = useState({})
  
  
  useEffect(() => {
    //    fetching all the data
    fetch(`${dburl}/college`)
    .then(data=>data.json())
    .then(data=>{
      setdata(data)
    //  filtering data related to states
    var res = data?.reduce(function(obj, v) {
    obj[v.state] = (obj[v.state] || 0) + 1;
    return obj;
    }, {})
    //  filtering data related to courses
    var res2 = data?.reduce(function(obj, v) {
    obj[v.courses] = (obj[v.courses] || 0) + 1;
    return obj;
    }, {})

    setFrequency(res)
    setCourses(res2)
    })
    .catch(err=>props.history.push("/error"))
 
  }, [])



  const SetState=(val)=>{setFilterState(val)}

  // states and handlers
  const [visible, setvisible] = useState(false)
  const onClose=()=>setvisible(false)
  const open=()=>setvisible(true)


  // components
  const Header=()=>{
    return (    
  <div style={{display:"flex",margin:10}}>
  <button onClick={open} className="btn"style={{background:"none",border:"none",outline:"none"}}>
  <img src="https://img.icons8.com/cotton/2x/menu.png" style={{width:"30pt",margin:"10pt"}}/>
  </button>
  <h1 style={{margin:"10pt",opacity:0.9}}>DashBoard</h1>
  </div>)}



    const Drawerlist=({onClick,title})=>{
    return(
      <div style={{cursor:"pointer"}} >
      <a onClick={onClick} style={{fontSize:"12pt"}}>{title}</a>
      </div>
    )
    }


  const Draw=()=>{
    return(
    <Drawer
      title="App Drawer"
      placement="left"
      closable={false}
      onClose={onClose}
      visible={visible}
      
    >
    
   <Drawerlist title="Create College" onClick={()=>{props.history.push("/createcollege")}} />
   <br/>
   <Drawerlist title="Search College" onClick={()=>{props.history.push({
     pathname:"/searchcollege",
     state:{
       mainData:data
     }
   })}}/>
    
    </Drawer>)
  }


  // main return
  return (
    <div className="App">
 <div>
<Header/>
<Draw/>
 </div>
 {data.length>0 && <div style={{display:"flex",justifyContent:"center",height:"300pt"}}>
 <StateChart Frequency={Frequency} setState={setFilterState}/>
 <CoursesChart Courses={Courses}/>
 </div>}
 
  <CollegeTable data={data} State={FilterState} Reset={()=>setFilterState("")}/>
  
    </div>
  );
}

export default App;
