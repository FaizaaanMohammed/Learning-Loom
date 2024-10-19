import { CommitSharp, Phone } from '@mui/icons-material'
import { Box, TextField, Typography,Button, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { registerFunction } from '../../AxiosHandle/Axioshandle'

const Register = () => {
   const initialaValue = {
     name:'',
     email:'',
     mobile:'',
     password:'',
     photo:''
   }
    const [register,setRegister] = useState(initialaValue)
    const navigate = useNavigate()
    const [image,setImage] = useState()
    const [loading,setLoading] = useState(false)
    
    const onHandleLogin = ()=>{
     navigate('/login')
    }

    const onHandleChange = (e)=>{
       const {name,value} = e.target;
       setRegister({...register,[name]:value})
    }

    const onHandleChangePhoto = (event)=>{
      const file = event.target.files[0]
      console.log(file);
      setImage(event.target.files[0])
    }

    const onHandleSubmit = async(data)=>{
         data.preventDefault();
         const formdata = new FormData()
         formdata.append('name',register.name)
         formdata.append('email',register.email)
         formdata.append('mobile',register.mobile)
         formdata.append('password',register.password)
         formdata.append('photo',image)
        const user1 = {
          name:register.name,
          email:register.email,
          mobile:register.mobile,
          password:register.password,
          photo:image
        }
        console.log(user1);
         setLoading(true)
       try{
          const res = await registerFunction(formdata);
          console.log(res);
          console.log("registeration succesfully");
          if(res){
            toast.success(res.data.message)
            navigate('/login')
          }
          else{
            toast.error(res.data.message)
          }
       }
       catch(err){
        setLoading(false)
        console.log(err);
        toast.error(err.message)
        console.log("Found some bug");
        
       }
    }

  return (
    <>
     <Box  display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "55px", minHeight: "70vh", backgroundColor: "#1c2932", padding:"40px" }}>
             <Box
          sx={{
            width: 450,
            minHeight: "400px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            position:"relative",
           
          }}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          onSubmit={onHandleSubmit}
          component='form'
        >
          <Typography sx={{ textAlign: "center" }}>
            <h1>Register Here!</h1>
          </Typography>
         
          <TextField
            label="Name"
            type='text'
            name='name'
            value={register.name}
            onChange={onHandleChange}
            sx={{
              marginBottom: "8px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
            <TextField
            label="Email"
            type='text'
            name='email'
            value={register.email}
            onChange={onHandleChange}
            sx={{
              marginBottom: "8px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <TextField
            label="Phone"
            type='number'
            name='mobile'
            value={register.mobile}
            onChange={onHandleChange}
            sx={{
              marginBottom: "8px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <TextField
            label="Password"
            type='password'
            name='password'
            value={register.password}
            onChange={onHandleChange}
            sx={{
              marginBottom: "20px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}

          />
            <TextField
            label="Photo"
            type='file'
            name='photo'
            onChange={onHandleChangePhoto}
            sx={{
              marginBottom: "20px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            
          />
          { 
          image? (<><img src={URL.createObjectURL(image)} alt=""  style={{width:"150px",textAlign:"center", marginTop: '-16px',marginLeft:'24px',marginBottom:'4px'}}/></>):
          (<>
               <p style={{textAlign:"center", marginTop: '-16px'}}> For Image Choose the File</p>
              </>)
            }
               
                      
          <Button variant="contained"  disableElevation sx={{width:'90%', marginLeft: "auto",
              marginRight: "auto",backgroundColor:'#11bf9a'}}  type='submit' disabled={loading}>
           {
            loading?(<CircularProgress size={20}/>):(
              <div>Register</div>
            )
           }
          </Button>
         <Box  display="flex"
          justifyContent="center"
          flexDirection="row"
          sx={{width:'90%',marginLeft: "auto",
            marginRight: "auto",marginBottom:'20px',position:"relative"}}>
           <h1 style={{borderTop:'1px solid black',width:'30%',marginRight:'auto'}}></h1>
            <h5 style={{position:'absolute',top:"-10px"}} className='Login'>Or Login Here</h5>
            <h1 style={{borderTop:'1px solid black',width:'30%',marginLeft:'auto'}}></h1>
         </Box>
         <Button variant="contained"  disableElevation sx={{width:'90%', marginLeft: "auto",
              marginRight: "auto",backgroundColor:'#1b2731',marginBottom:'20px'}} onClick={onHandleLogin}>
            Log In
          </Button>
          
        </Box>

     </Box>
    </>
  )
}

export default Register
