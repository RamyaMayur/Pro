import React from 'react'
 import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
 
 export const Publish = () => {
    let [publish,setpublish]=useState([])
 useEffect(()=>{axios.get("http://localhost:5000/Publish")
 .then((resp)=>{setpublish(resp.data);})
 
 .catch((error)=>{
    console.log(error);
 })
},[])
 console.log(publish);
   return (
     <div className='Publish'>
        <h1>Published</h1>
        
            {publish.map(text=>(
                <div className='Desc' key={text.id}>
                <h2>{text.Title}</h2>
                <p>{text.Para}</p>
                </div>
            ))}
        
     </div>

   )
 }