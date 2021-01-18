import React from 'react'
import {  Table, Tag, Space  } from "antd"
import {TableCard} from "./styles"
import QueueAnim from 'rc-queue-anim';

export default function CollegeTable({data}) {
    const { Column, ColumnGroup } = Table;

    // Table Heading
    const TableHead=()=><h1 style={{textAlign:"left"}}>List Of Colleges</h1>

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

    return (
    <div style={TableCard} >
            
   <Table dataSource={data} 
    title={TableHead}
    pagination={{pageSize:3}}
    loading={data.length===0?true:false}> 
      <Column title="College ID" dataIndex="_id"/>
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

  </Table>
        </div>
    )
}
