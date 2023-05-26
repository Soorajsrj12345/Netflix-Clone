import {React,useState,useEffect} from 'react'
import './Navbar.css'

function Navbar() {

   const [show,setShow]=useState(false)


   useEffect(()=>{
     window.addEventListener('scroll',()=>{
      if(window.scrollY>450){
        setShow(true)
      }
      else{
        setShow(false)
      }
     })
   },[])


  return (
    <div className={`nav ${show && 'navBlack'}`} >
      <img
        style={{width:'170px'}}
        src='https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo-700x394.png'
        />
      
    </div>
  )
}

export default Navbar