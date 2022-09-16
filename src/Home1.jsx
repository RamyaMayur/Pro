import React from 'react'
import { Edit } from './Edit'
import { Publish } from './publish'
import "./Publish.css"
const Home1 = () => {
  return (
    <div className='HomePublish'>
       <Edit/>
        <Publish/>
    </div>
  )
}
export default Home1
