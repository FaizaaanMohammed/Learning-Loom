import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar, Container, Grid } from "@mui/material";
import image from "../Images/learning-loom-high-resolution-logo-transparent.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import '../Common/Navbar.css';
import Swal from "sweetalert2";
import LoginIcon from '@mui/icons-material/Login';
import { useAuth } from "../toolkit/Context/Context";
import { toast } from "react-toastify";

const drawerWidth = 240;
const navItems = ["Home", "About", "Blog", "Courses", "Contact"];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [auth,setAuth] = useAuth()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={image} alt="" style={{ width: 150 }} />
      </Typography>
      <Divider />
      <List>
        
          <ListItem disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", justifyContent: "center",flexDirection:"column" }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <Button style={{ color: "#000" }} className="button">
                  Home
                </Button>
              </Link>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button style={{ color: "#000" }} className="button">
                  About
                </Button>
              </Link>
              <Link
                to="/blog"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button style={{ color: "#000" }}>blog</Button>
              </Link>
              <Link
                to="/courses"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button style={{ color: "#000" }}>Courses</Button>
              </Link>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button style={{ color: "#000" }}>Contact</Button>
              </Link>
            </ListItemButton>
          </ListItem>
        
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const navigate = useNavigate();

  const onHandleClick = () => {
    Swal.fire({
      title: "Opps! You Are Not Logged In",
      text: "Login First!",
      imageUrl: "https://png.pngtree.com/png-clipart/20230409/original/pngtree-admin-and-customer-service-job-vacancies-png-image_9041264.png",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      showCancelButton: true,
      confirmButtonText:'Login Here',
      confirmButtonColor: "#3A833A",
      cancelButtonColor: "#d33",
      cancelButtonText:'Register Here'
      
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login')
      }
      else if(result.isDismissed){
        navigate('/register')
      }
    });
  };

  const onHandleLogout = ()=>{
    Swal.fire({
      title: "You are in Your Profile",
      text: "want LogOut ?",
      imageUrl: "https://png.pngtree.com/png-clipart/20230409/original/pngtree-admin-and-customer-service-job-vacancies-png-image_9041264.png",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      showCancelButton: true,
      confirmButtonText:'LogOut Here',
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3A833A",
      cancelButtonText:'Home'
      
    }).then((result) => {
      if (result.isConfirmed) {
        setAuth({
          ...auth,
          user:null,
          token:''
        })
        localStorage.removeItem('auth');
        localStorage.removeItem('token')
        toast.error("Log Out")
        navigate('/login')
      }
      else if(result.isDismissed){
        navigate('/')
      }
    });
  }


 

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width:"90%",
        margin:'auto'
      }}
    >
      <CssBaseline />

      <Container maxWidth="sm">
        <AppBar
          component="nav"
          sx={{
            backgroundColor: "#263238",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                maxWidth: "200px!important",
              }}
            >
              <img src={image} alt="" style={{ width: 190 }} />
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                maxWidth: "700px",
                margin: "auto",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <Button style={{ color: "white" }} className="button">
                  Home
                </Button>
              </Link>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button style={{ color: "white" }} className="button">
                  About
                </Button>
              </Link>
              <Link
                to="/blog"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button style={{ color: "white" }}>blog</Button>
              </Link>
              <Link
                to="/courses"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button style={{ color: "white" }}>Courses</Button>
              </Link>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button style={{ color: "white" }}>Contact</Button>
              </Link>
             
            </Box>

            {
              !auth.user?(
                <>
                <Box sx={{ maxWidth: "150px" }} classname="icons">
              <AccountCircleIcon
                sx={{ marginRight: "13px", cursor: "pointer",width:"30px",height:"30px" }}
                className="icon"
                onClick={onHandleClick}
              />
            </Box>
                </>
              ):(
                <>
                <Box sx={{ maxWidth: "150px",display:"flex",alignItems:"center",justifyContent:"center" ,marginLeft:"",marginLeft:{xs:"auto",sm:"0px"}}} classname="profile-icons">
                <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmInQ4W0QuRbOTUzBVhfwv66I5cCeHDVY4SQ&s" onClick={onHandleLogout} sx={{ marginRight: "13px", cursor: "pointer" }}/>
              
            </Box>
                </>
              )
            }
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Container>
    </Box>
  );
}
