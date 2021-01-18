import React,{useState} from 'react'
import {Input,DatePicker, Space,Button} from "antd"
import {field,root} from "./styles"
import {dburl} from "../dburl"
import "../btn.css"


export default function CreateCollege(props) {
    

  const [FieldInput, setFieldInput] = useState({
    college_name:"",
    yearFounded:"",
    city:"",
    state:"",
    country:"",
    No_Of_Students:0,
    courses:[]

});


const GoBack=()=>{props.history.goBack()}
const PostData=()=>{
    

    fetch(`${dburl}/college/createcollege`, {
        method: "POST",
        body: JSON.stringify(FieldInput),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      }).then(response =>GoBack()).catch(err => console.log(err));
      
}

const dateHandler=(date, dateString)=>{
    console.log(dateString)
    setFieldInput({...FieldInput, yearFounded: dateString})
  }
const changeHandler = e => {
    setFieldInput({...FieldInput, [e.target.name]: e.target.value})
 }
    return (
  <div>
      <div style={{display:"flex"}}>
          <div style={{display:"flex",margin:10}}>
    <button
    className="btn" 
    onClick={GoBack}
     style={{background:"none",border:"none",outline:"none"}}
     ><img src="https://img.icons8.com/carbon-copy/2x/back.png" style={{width:"30pt",margin:"10pt"}}/></button>
      <h1 style={{margin:"10pt",opacity:0.9}}>Go Back</h1>
    </div>
     
    </div>
    <h1 style={{textAlign:"center",opacity:0.9}}>New College Info</h1>
  <div style={root}>
    <Input placeholder="Institution Name" name="college_name" style={field} onChange={changeHandler} />            
    <Space direction="horizontal">
    <DatePicker onChange={dateHandler} placeholder="founding year" name="yearFounded" style={field} />
    </Space>
    <Input placeholder="City" name="city" style={field} onChange={changeHandler}/>            
    <Input placeholder="State" name="state" style={field} onChange={changeHandler}/>            
    <Input placeholder="Country" name="country" style={field} onChange={changeHandler}/>            
    <Input placeholder="No_Of_Students" name="No_Of_Students" style={field} onChange={changeHandler}/>            
    <Input placeholder="Courses" name="courses" style={field} onChange={changeHandler}/>  
   
        </div>
         <Button style={{margin:"20px 60%"}} onClick={PostData}>Create college</Button>
         </div>
    )
}
