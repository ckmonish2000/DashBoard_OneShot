import React from 'react'
import {  Alert  } from "antd"
import "../btn.css"
export default function Error({err,history}) {
    const GoBack=()=>{history.push("/")}
    return (
      
    <div>
    <div style={{display:"flex",margin:10}}>
  <button
  className="btn" 
  onClick={GoBack}
   style={{background:"none",border:"none",outline:"none"}}
   ><img src="https://img.icons8.com/carbon-copy/2x/back.png" style={{width:"30pt",margin:"10pt"}}/></button>
    <h1 style={{margin:"10pt",opacity:0.9}}>Go Home</h1>
  </div>
        <section class="page_404">
        <div class="container">
            <div class="row">	
            <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
            <div class="four_zero_four_bg">
                <h1 class="text-center ">Error</h1>
            
            
            </div>
            
            <div class="contant_box_404">
            <h3 class="h2" style={{textAlign:"center"}}>
            "Oops, Something Went Wrong Check Your Network "
            </h3>   
        </div>
            </div>
            </div>
            </div>
        </div>
    </section>
    </div>
   
    )
}
