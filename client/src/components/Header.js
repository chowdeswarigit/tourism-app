import React, { useState } from 'react'


import {MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavbarBrand} from 'mdb-react-ui-kit'

    import { useSelector } from 'react-redux'
    import { useDispatch } from 'react-redux'
import { setLogout } from '../redux/features/authSlice'
import { Link } from 'react-router-dom'
const Header = () => {

    const [show,setShow] = useState(false)
    const dispatch  = useDispatch()

    const {user} = useSelector((state)=>({...state.auth})) 
    const handleLogout = ()=>{
        dispatch(setLogout())
    }
   return (
   <MDBNavbar fixed='top' expand="lg"  style={{backgroundColor:"#e3c3c4"}}>
    <MDBContainer>
        <MDBNavbarBrand  href = '/' style={{color:"#606080",fontWeight:"600" ,fontSize:"22px"}}>
            Tourpedia
        </MDBNavbarBrand>
        {/* <MDBNavbarToggler
        type='button'
        aria-expanded="false"
        aria-label='Toogle  navigation' 
        onClick={()=> setShow(!show)}
        >
            <MDBIcon icon='bars' fas />

        </MDBNavbarToggler>
            
            style={{color:"#0606080"}} */}

            <MDBCollapse show={show} navbar>
                <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
                    {user?.result?._id &&(
                        <h6 style={{marginRight:"30px",marginTop:"17px"}}>Logged in as :{user?.result?.email}</h6>
                    )}
                    <MDBNavbarItem >
                        <MDBNavbarLink href='/home'>
                             
                         <p className='header-text'>Home</p>

                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    {user?.result?._id && (
                        <>
                         <MDBNavbarItem >
                        <MDBNavbarLink href='/home'>
                            <p className='header-text'>Add Tour</p>

                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem >
                        <MDBNavbarLink href='/dashboard'>
                            <p className='header-text'>Dashboard</p>

                        </MDBNavbarLink>
                    </MDBNavbarItem>
                        </>
                    )}
                   {user?.result?._id ? (
                    <MDBNavbarItem >
                    <MDBNavbarLink href='/login'>
                        <p className='header-text' onClick={handleLogout}>Logout</p>

                    </MDBNavbarLink>
                </MDBNavbarItem>

                   ) :(
                    <MDBNavbarItem >
                        <MDBNavbarLink href='/login'>
                            <p className='header-text'>Login</p>

                        </MDBNavbarLink>
                    </MDBNavbarItem>

                   )}

                    

                    


                </MDBNavbarNav>

            </MDBCollapse>

        
    </MDBContainer>

   </MDBNavbar>
  )
}

export default Header
