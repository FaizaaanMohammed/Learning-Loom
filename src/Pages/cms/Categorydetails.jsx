import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  categoryFunction,
  categoryWiseFunction,
} from "../../AxiosHandle/Axioshandle";
import {
  Grid,
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { useAuth } from "../../toolkit/Context/Context";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CategoryIcon from "@mui/icons-material/Category";
import CommentIcon from "@mui/icons-material/Comment";

const Categorydetails = () => {
  const [auth, setAuth] = useAuth();
  const { id } = useParams();
  const [category, setCategory] = useState([]);
  const [categorywisedetails, setCategorywiseDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data,setData] = useState(categorywisedetails)

  const getCategoryData = async () => {
    try {
      const res = await categoryFunction();
      setCategory(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCategoryWiseDetails = async () => {
    setLoading(true);
    try {
      const res = await categoryWiseFunction(id);
      setCategorywiseDetails(res.data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  // console.log("category",category);

  useEffect(() => {
    getCategoryData();
    getCategoryWiseDetails();
  }, []);

  const onHandleChange = async () => {};

  const getCategory = (categoryId) => {
    // console.log('id',categoryId);
    const categories = category?.data?.find(
      (category) => category?._id === categoryId
    );
    return categories ? categories?.category : "uncategorised";
  };

  console.log(data,'datatatata');
  const removetag = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <>
      <Grid
        container
        sx={{
          minHeight: "70vh",
          width: "90%",
          margin: "auto",
          flexWrap: "wrap",
          marginTop: "64px",
          justifyContent:"center"
        }}
      >
        

        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          sx={{ padding: "22px" }}
        >
          {
            data?(
              <>
              {loading ? (
             <div
             style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               minHeight: "500px",
             }}
           >
             <CircularProgress />
           </div>
          ) : (
            categorywisedetails.map((item) => {
              console.log(item.category);
              return (
                <>
                  <Card
                      sx={{
                        margin: "22px",
                        display: "flex",
                        flexDirection: {md:"row",xs:'column'},
                        minHeight: "200px",
                        
                      }}
                      className="courses-card"
                    >
                      <CardMedia
                       sx={{width:{sm:"100%px",xs:"100%",md:"700px"}}}
                      >
                        <img
                          src={`https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg`}
                          alt=""
                          style={{ height: "100%", width: "100%",backgroundSize:"cover",backgroundPosition:"center" }}
                          className="cardmedia-img"
                        />
                      </CardMedia>
                      <CardContent style={{ padding: "10px", width: "100%" }}>
                        <Typography component='h4'
                        sx={{fontSize:{xs:'14px',sm:"18px"},paddingBottom:"10px"}}
                        >
                        <Link
                          to=""
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          <h4 style={{ margin: "0px", padding: "0px" }}>
                            {item?.title}
                          </h4>
                        </Link>
                        </Typography>
                       
                        <Box
                          sx={{
                            border: "1px solid black",
                            minHeight: "30px",
                            display: "flex",
                            justifyContent: {sm:"space-evenly"},
                            alignItems: "center",
                            flexWrap:"wrap",
                            
                          }}
                          className="card-icon"
                        >
                          <Box sx={{ display: "flex",margin:"3px" }}>
                            <AccessibilityNewIcon  /> Sahil
                          </Box>
                          <Box sx={{ display: "flex",margin:"3px" }}>
                            <CommentIcon /> 25
                          </Box>
                          <Box sx={{ display: "flex",margin:"3px" }}>
                            <CalendarMonthIcon /> Sahil
                          </Box>
                          <Box sx={{ display: "flex",margin:"3px" }}>
                            <CategoryIcon />
                            {getCategory(item.category)}
                          </Box>
                        </Box>
                        <Box sx={{padding:"15px 0px"}}>{removetag(item.postText.slice(0, 220))}</Box>
                        <Box sx={{ marginTop: "20px " }}>
                          <Link to={`/blogdetails/${item._id}`}>
                            <Button variant="outlined" sx={{ color: "black" }}>
                              Details
                            </Button>
                          </Link>
                        </Box>
                      </CardContent>
                    </Card>
                </>
              );
            })
          )}
              </>
            ):(
              <>
              <h1 style={{display:"flex",justifyContent:"center",minHeight:"300px"}}>No Data Found</h1>
              </>
            )
          }
        </Grid>
      </Grid>
    </>
  );
};

export default Categorydetails;
