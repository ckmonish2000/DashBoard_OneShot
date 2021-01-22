import React,{useEffect,useState} from 'react'
import {  Table, Tag, Space, Button,Modal  } from "antd"
import { dburl } from '../dburl';
import "./styles.css"
export default function ViewDetails(props) {

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    const { Column, ColumnGroup } = Table;
    const {location}=props;
    const [collegeInfo, setcollegeInfo] = useState([])
    const [CollegeStudents, setCollegeStudents] = useState([])
    const [ModalVisible, setModalVisible] = useState(false)
   useEffect(() => {
    const x=location?.state.data.filter(e=>{
        return e._id===location.state.id
    })
    setcollegeInfo(x[0])
    fetch(`${dburl}/student/${x[0]?._id}`)
    .then(e=>e.json())
    .then(val=>setCollegeStudents(val))
    .catch(err=>console.log(err))
   }, [])

    // Table
   let Tager=tags=>(<>{tags.map(tag => (<Tag color="blue" key={tag}>{tag.capitalize()}</Tag>))}</>)

   const TableHead=()=>{return <div>
    <h1 style={{textAlign:"left"}}>list of students
    <Button style={{float:"right"}} onClick={()=>setModalVisible(true)}>Add New Student</Button>
    </h1></div>}


    return (
        <div>

    {/* college Info code  */}

      <div className="detailsParent">
      <h1 style={{textDecoration:"underline"}}>{collegeInfo.name?.toUpperCase()}</h1>
          <p className="Label">City: <span className="Value">{collegeInfo.city?.capitalize()}</span></p>
          <p className="Label">State: <span  className="Value">{collegeInfo.state?.capitalize()}</span></p>
          <p className="Label">Country: <span  className="Value">{collegeInfo.country?.capitalize()}</span></p>
          <p className="Label">Year Founded: <span  className="Value">{collegeInfo.yearFounded ? collegeInfo.yearFounded :"Na" }</span></p>
          <p className="Label">Courses Offered: <span  className="Value">{collegeInfo.courses?.map(e=>
             <Tag color="green" key={e}>
              {e.capitalize()}
            </Tag>)}
            </span></p>
      </div>

{/* table code */}

            <div style={{margin:"20pt",boxShadow: "3px 3px 5px 6px #ccc",borderRadius:"7pt",padding:"5pt",marginTop:"30pt",marginBottom:"10pt"}} >
            <Table dataSource={CollegeStudents} 
            title={TableHead}
            pagination={{pageSize:3}}
            > 
             <Column title="Sl.no" dataIndex="college_id" render={val=>CollegeStudents.indexOf(val)+1} />
            <Column title="College Id" dataIndex="college_id" />
            <Column title="Student Name" dataIndex="name"/>
            <Column title="Batch" dataIndex="batchYear" />
            <Column title="Skills" dataIndex="skills" render={Tager} />  
            </Table>
            </div>


    {/* Modal code */}
            <Modal title="welcome" visible={ModalVisible} onOk={()=>setModalVisible(false)} onCancel={()=>setModalVisible(false)}>
                <p>hello sir</p>
            </Modal>

        </div>
    )
}
