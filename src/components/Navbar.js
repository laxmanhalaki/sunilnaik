import React, { useState } from 'react'
import logo from './images/logo.jpeg'


const Navbar = () => {
    const [navstate,setNavstate]=useState(false);
    const [searchstate,setSearchstate]=useState(false)

    const toggle=()=>{
        if(navstate===true){
            setNavstate(false)
        }else{
            setNavstate(true)
        }    
    }

    const stoggle=()=>{
        if(searchstate===true){
            setSearchstate(false)
        }else{
            setSearchstate(true)
        }    
    }
  return (
    <div >
<section className="header">
        <a href="#" ><img className="logo" src={logo} alt=""/></a>
        <nav className={navstate===true? 'navbar active':'navbar'} id="navbar">
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#ourvideos">our videos</a>
            <a href="#contact">contact Us</a>
            <i className="fas fa-times" id="nav-close" onClick={toggle}></i>
            
        </nav>
        <div className="icons">
            <i className=" fas fa-search" id="src" onClick={stoggle}></i>
            <i className="fas fa-bars" id="menu" onClick={toggle}></i>
        </div>

        <div className={searchstate===true? 'search active':'search'} id="search">
            <div className="box">
                <input  placeholder="type to search" id="search-box"/>
                <label  className="fas fa-search" style={{backgroundColor:"white"}}></label> 
            </div>
           
            
            <i className="fas fa-times" id="close" onClick={stoggle}></i>
        </div>
       
    </section>
    </div>
  )
}

export default Navbar