import React from 'react'
import students from "./students.json"
import Kisi from './kisi'
import './style.scss';
const Kisiler = () => {
  return (
    <div className='st-container'>
        
        {
            students.map((student, index) => (<Kisi key={index} studentss={student}></Kisi>))
        }
    </div>
  )
}

export default Kisiler