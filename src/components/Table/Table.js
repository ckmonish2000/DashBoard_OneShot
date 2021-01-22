import React from 'react'
import {  Table, Tag, Space, Button  } from "antd"
import {TableCard} from "./styles"
import QueueAnim from 'rc-queue-anim';
import {useHistory} from "react-router-dom"

export default function CollegeTable(props) {
    var {data,State,Reset}=props;
    const { Column, ColumnGroup } = Table;
    const history=useHistory()
 
  if(State!==""){
    data=data.filter(
      val=>{
        return val.state===State
      })
  }
    // Table Heading
    const TableHead=()=>{return State===""?<h1 style={{textAlign:"left"}}>List Of Colleges </h1>:
      <h1 style={{textAlign:"left"}}>Colleges From {State.toUpperCase()}<Button onClick={Reset} style={{float:"right"}}>Reset</Button></h1>}

    // Courses Tag
    let Tager=tags=>(
          <>
          {
          tags.map(tag => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))
          }
        </>
      )
    


    let ViewDetailBtn= val=>{
      return(
      <Button onClick={()=>history.push({
        pathname:"/details",
        state:{
          id:val,
          data:data
        }
      })}>
        View Details
        </Button>)
    }
    return (
    <div style={TableCard} >
            
   <Table dataSource={data} 
    title={TableHead}
    pagination={{pageSize:3}}
    loading={data.length===0?true:false}> 
      <Column title="College Name" dataIndex="name"/>
      <Column title="Student Strength" dataIndex="No_Of_Students" />
      <Column title="Country" dataIndex="country" />
      <Column title="State" dataIndex="state" />
      <Column title="City" dataIndex="city" />
    <Column
      title="Courses Offered"
      dataIndex="courses"
      key="tags"
      render={Tager}
    />
  <Column title="College Info" dataIndex="_id" render={ViewDetailBtn}/>
  </Table>
        </div>
    )
}
