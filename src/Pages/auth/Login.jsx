import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { loginFunction } from "../../AxiosHandle/Axioshandle";
import { toast } from "react-toastify";
import { useState } from "react";
import { useAuth } from "../../toolkit/Context/Context";

export default function Login() {
   const initialaValue = {
     email:" ",
     password:""
   }
    const [auth,setAuth] = useAuth()
    const [user,setUser] = useState(initialaValue)
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)

    const onHandleNavigate = ()=>{
        navigate('/register')
    }

    const onHandleChange = (e)=>{
          const{name,value} = e.target;
          setUser({...user,[name]:value})
    }
    
    const onHandleSubmit = async(data)=>{
      data.preventDefault();
      let formdata = new FormData()
      formdata.append('email',user.email)
      formdata.append('password',user.password)
      const user1 = {
         email:user.email,
         password:user.password
      }
      console.log(user);
       setLoading(true)
       try{
         const res = await loginFunction(user1)
         localStorage.setItem('auth',JSON.stringify(res?.data))
         localStorage.setItem('token',JSON.stringify(res?.data?.token))
         if(res){
          setAuth(
            {
              ...user,
              user:res.data.user,
              token:res.data.token
            }
          )
           toast.success(res.data.message)
           navigate('/')
         }
         else{
            toast.error(res.data.message)
         }
       }
       catch(err){
        setLoading(false)
        toast.error("Login Denied")
         console.log(err);
       }
    }
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "55px", height: "90vh", backgroundColor: "#1c2932" }}
      >
        <Box
          sx={{
            width: 350,
            minHeight: "400px",
            backgroundColor: "#fff",
            borderRadius: "8px",
          }}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          component='form'
          onSubmit={onHandleSubmit}
        >
          <Typography sx={{ textAlign: "center" }}>
            <h1>Login Here!</h1>
          </Typography>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={user.email}
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
            type="password"
            name="password"
            value={user.password}
            onChange={onHandleChange}
            sx={{
              marginBottom: "0px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <Typography sx={{ marginLeft: "auto", width: "39%" }}>
            <h5 style={{ margin: "0px!important" }}>Forget Password?</h5>
          </Typography>
          <Button variant="contained"  disableElevation sx={{width:'90%', marginLeft: "auto",
              marginRight: "auto",backgroundColor:'#11bf9a'}} type="submit" disabled={loading}>
            {
              loading?(<div><CircularProgress size={20} style={{ color: "" }}/></div>):(
                <div>Login</div>
              )
            }
          </Button>
         <Box  display="flex"
          justifyContent="center"
          flexDirection="row"
          sx={{width:'90%',marginLeft: "auto",
            marginRight: "auto",marginBottom:'20px',position:"relative"}}>
           <h1 style={{borderTop:'1px solid black',width:'30%',marginRight:'auto'}}></h1>
            <h5 style={{position:'absolute',top:"-9px"}}>Or Register Here</h5>
            <h1 style={{borderTop:'1px solid black',width:'30%',marginLeft:'auto'}}></h1>
         </Box>
         <Button variant="contained"  disableElevation sx={{width:'90%', marginLeft: "auto",
              marginRight: "auto",backgroundColor:'#1b2731',marginBottom:'20px'}} onClick={onHandleNavigate}>
            Register
          </Button>
        </Box>
      </Box>
    </>
  );
}
