import React,{useState,useEffect} from 'react'
import {Input,Button,Tooltip,Card,List} from "antd"
import { SearchOutlined } from '@ant-design/icons';
import {field} from "../createCollege/styles"
import {root,label,value} from "./styles"
import Search from 'antd/lib/input/Search';
import {dburl} from "../dburl"
export default function Getcollege(props) {
    
    // event Handlers and states
    
  
    const [SearchVal, setSearchVal] = useState("")
    const [SearchData, setSearchData] = useState([])
    
    const GoBack=()=>{props.history.goBack()}

    const OnClick=()=>{ 
    fetch(`${dburl}/college/getByname`, {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify({collegeName:SearchVal})
      }) .then(res=>res.json())
      .then(data=>setSearchData(data))
      .catch(err=>err)
   
    }
   
    
    const OnChange=(e)=>setSearchVal(e.target.value.toLowerCase()) 
   

    // components
    const Back=()=>{
      return(  <div style={{display:"flex",margin:10}}>
      <button
      className="btn" 
      onClick={GoBack}
       style={{background:"none",border:"none",outline:"none"}}
       ><img src="https://img.icons8.com/carbon-copy/2x/back.png" style={{width:"30pt",margin:"10pt"}}/></button>
        <h1 style={{margin:"10pt",opacity:0.9}}>Go Back</h1>
      </div>)
    }

    return (
        <div>
           <Back/>
            <div style={root}>
            <Input style={field} placeholder="Enter College Name" onChange={OnChange}/>
            <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} onClick={OnClick} />
            </Tooltip>
            </div>

       {SearchData.length>0 && 
        <Card title={<h1 style={{textAlign:"center"}}>{SearchData[0]?.name.toUpperCase()}</h1>} style={{ width: 800,margin:"auto" }}>
       <div> <label style={label}>City: </label><span style={value}>{SearchData[0]?.city.toUpperCase()}</span></div>
        <br/>
       <div> <label style={label}>State: </label><span style={value}>{SearchData[0]?.state.toUpperCase()}</span></div>
        <br/>
        <div><label style={label}>Country: </label><span style={value}>{SearchData[0]?.country.toUpperCase()}</span></div>
        <br/>
       <div> <label style={label}>Year founded: </label><span style={value}>{SearchData[0]?.yearFounded.toUpperCase()}</span></div>
        <br/>
        <div><label style={label}>Number Of Students: </label><span style={value}>{SearchData[0]?.No_Of_Students}</span></div>
        <br/>
        <div><label style={label}>Courses: </label><span style={value}>{SearchData[0]?.courses}</span></div>
       
        </Card>}


           

           
        </div>
    )
}
