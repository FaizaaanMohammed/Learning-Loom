import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../toolkit/Context/Context";
import { blogFunction, categoryFunction } from "../../AxiosHandle/Axioshandle";
import { Link } from "react-router-dom";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CategoryIcon from "@mui/icons-material/Category";
import CommentIcon from "@mui/icons-material/Comment";
import { CircularProgress } from "@mui/material";

const Blog = () => {
  const [auth, setAuth] = useAuth();
  const [category, setCategory] = useState([]);
  const [blog, setBlog] = useState([]);
  const [search, setSearch] = useState([]);
  const [loadmore, setLoadMore] = useState(4);
  const [loading, setLoading] = useState(false);

  const getCategoryData = async () => {
    setLoading(true);
    try {
      const res = await categoryFunction();
      setCategory(res?.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const getBlogData = async () => {
    setLoading(true);
    try {
      const res = await blogFunction();
      setBlog(res?.data?.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  console.log("blog", blog);
  useEffect(() => {
    getCategoryData();
    getBlogData();
  }, []);

  const onHandleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const getCategory = (categoryId) => {
    console.log("nn", categoryId);
    const categories = category?.data?.find(
      (category) => category?._id === categoryId
    );
    return categories ? categories?.category : "uncategorised";
  };

  const onExpandMore = () => {
    setLoadMore(loadmore + 4);
  };

  const removetag = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };
  return (
    <>
      <Box sx={{ marginTop: "64px"}}>
        <Grid
          container
          sx={{
            minHeight: "70vh",
            width: "90%",
            margin: "auto",
            flexWrap: "wrap",
          }}
        >
          <Grid
            item
            xs={12}
            sm={5}
            md={4}
            sx={{
              padding: "22px",
              margin:"10px 0px",
              backgroundColor:"#F2F2F2"
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <TextField
                id="outlined-basic"
                label="Search Here..."
                variant="outlined"
                onChange={onHandleChange}
                sx={{width:"80%"}}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <Card
                sx={{ margin: "30px 0px",  maxWidth: "300px" }}
              >
                <CardMedia>
                  <Avatar
                    alt="Cindy Baker"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmInQ4W0QuRbOTUzBVhfwv66I5cCeHDVY4SQ&s"
                    sx={{
                      cursor: "pointer",
                      margin: "auto",
                      height: "100px",
                      width: "100px",
                    }}
                  />
                </CardMedia>
                <CardContent>
                  <h2 style={{ textAlign: "center", margin: "0px" }}>
                    {auth?.user?.name}
                  </h2>
                  <h4 style={{ textAlign: "center", margin: "0px" }}>
                    Web Developer
                  </h4>
                  <p style={{ textAlign: "center", padding: "0px" }}>
                    I'm a web developer with a passion for creating beautiful
                    and functional websites.
                  </p>
                </CardContent>
              </Card>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              
              }}
            >
              <Typography>
                <h2 style={{ textAlign: "center" }}>All Category</h2>
              </Typography>
              {loading ? (
                <div>Loading..</div>
              ) : (
                category?.data?.map((item) => {
                  return (
                    <>
                      <ul
                        style={{
                          textAlign: "center",
                          margin: "0px",
                          padding: "0px",
                          fontWeight:"600"
                        }}
                      >
                        <li style={{ listStyle: "none" }}>
                          <Link
                            to={`/post/${item._id}`}
                            style={{ cursor: "pointer" }}
                          >
                            <Button
                              style={{ color: "black", fontSize: "16px" }}
                            >
                              {" "}
                              {item?.category}
                            </Button>
                          </Link>
                        </li>
                      </ul>
                    </>
                  );
                })
              )}
            </Box>
          </Grid>
          <Grid item xs={12} sm={7} md={8} sx={{ padding: "22px" }}>
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
              blog?.filter((item)=>{
                if(search===""){
                  return item
                }
               else if(item.title.toLowerCase().includes(search)){
                  return item
               }
              })?.slice(0, loadmore)?.map((item) => {
                console.log("category", item.category);
                return (
                  <>
                    <Card
                      sx={{
                        margin: "22px",
                        display: "flex",
                        flexDirection: {md:"row",xs:'column'},
                        minHeight: "200px",
                        maxWidth: "900px",
                      }}
                      className="courses-card"
                    >
                      <CardMedia
                      sx={{width:{sm:"500px",xs:"100%"}}}
                      >
                        <img
                          src={`https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg`}
                          alt=""
                          style={{ height: "100%", width: "100%",backgroundSize:"cover" }}
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
                        <Box sx={{padding:"10px 0px"}}>{removetag(item.postText.slice(0, 220))}</Box>
                        <Box sx={{ marginTop: "15px " }}>
                          <Link to={`/blogdetails/${item._id}`}>
                            <Button  sx={{ color: "#fff",backgroundColor:"#000!important" }}>
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
            <div
              style={{
                backgroundColor: "#171717",
                margin: "auto",
                width: "8%",
                textAlign: "center",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              {
                <Button sx={{ color: "#fff" }} onClick={onExpandMore}>
                  <ExpandMoreIcon />
                </Button>
              }
            </div>
            
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Blog;
