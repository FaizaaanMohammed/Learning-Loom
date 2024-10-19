import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  axiosInstance,
  blogDetailsFunction,
  getCommentFunc,
  getLikedFunc,
  postCommentFunc,
} from "../../AxiosHandle/Axioshandle";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CategoryIcon from "@mui/icons-material/Category";
import CommentIcon from "@mui/icons-material/Comment";
import { useAuth } from "../../toolkit/Context/Context";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
const BlogDetails = () => {
  const { id } = useParams();
  const [auth, setAuth] = useAuth();
  const [blogDetails, setBlogDetails] = useState([]);
  const [getComment, setgetComment] = useState([]);
  const [like, setLike] = useState([]);
  const [dislike, setDisLike] = useState([]);
  const [commentt, setComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadcomment,setLoadComment] = useState(3)
  const [likee,setLikee] = useState(true)
  const [dislikee,setdislikee] = useState(true)
  const initialValue = {
    name: "",
    email: "",
    comment: "",
  };
  const [message, setMessage] = useState(initialValue);
  const token = auth.token

  // getblogdetails data
  const getBlogDetailsData = async () => {
    setLoading(true);
    try {
      const res = await blogDetailsFunction(id);
      setBlogDetails(res?.data?.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // get comment  data
  const getCommentData = async () => {
    setLoading(true);
    try {
      const res = await getCommentFunc(id);
      console.log(res?.data?.post?.comment,'rescomment');
      setgetComment(res?.data?.post?.comment?.comments);
      setLoading(false);
      setLike(res?.data?.post?.comment?.likes);
      setDisLike(res?.data?.post?.comment?.unlikes);
      setComment(res?.data.post?.comment?.comments);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // put liked
  const putLikedData = async () => {
    try {
      const res = await getLikedFunc(id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBlogDetailsData();
    getCommentData();
    putLikedData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  };
  const removetag = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };
  const handleSubmit = async (data) => {
    try {
      const res = await axios.post( `http://89.116.32.22:7702/api/blog/${id}/comment/create`,message,{headers:{
        'x-access-token' : token
    }});
    if(res?.data){
      toast.success("Comment was Added.. Congratulation!")
    }
    } catch (err) {
      console.log(err);
      toast.error("comment not added")
    }
  };
  
  // like button
   const onhandlelike = async()=>{
      try{
         const res = await axios.put(`http://89.116.32.22:7702/api/blog/like/${id}`,{
          // headers:{
          //   "x-access-token" : token
          // }
         })
         console.log('like clicked');
         if (res.data) {
          setLikee(false);
          toast.success("You Liked");
          const savedData = JSON.parse(localStorage.getItem("likedData")) || {};
          savedData[id] = true;
          localStorage.setItem("likedData", JSON.stringify(savedData));
        } else {
          setLikee(false);
          const savedData = JSON.parse(localStorage.getItem("likedData")) || {};
          savedData[id] = false;
          localStorage.setItem("likedData", JSON.stringify(savedData));
        }
      }
      catch(err){
        console.log(err);
      }
   }

   // load more comment
  const moreComment = ()=>{
    setLoadComment(loadcomment + 3)
  }
  return (
    <>
      <Box sx={{ marginTop: "100px" }}>
        <Container>
          <Grid container>
            <Grid
              xs={12}
              md={7}
              sm={7}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {loading ? (
                <>
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
                </>
              ) : (
                <>
                  <Card
                    sx={{
                      margin: "22px",
                      display: "flex",
                      flexDirection: { md: "column", xs: "column" },
                      minHeight: "200px",
                      maxWidth: "700px",
                      padding: "15px",
                    }}
                    className="courses-card"
                  >
                    <CardMedia>
                      <img
                        src='https://media.istockphoto.com/id/1356364287/photo/close-up-focus-on-persons-hands-typing-on-the-desktop-computer-backlit-keyboard-screens-show.jpg?s=612x612&w=0&k=20&c=ijjq-DLNxIaPuGvIX8k06IZxMAjGpyJeboaV_byCX9k='
                        alt=""
                        style={{
                          height: "100%",
                          width: "100%",
                          backgroundSize: "cover",
                        }}
                        className="cardmedia-img"
                      />
                    </CardMedia>
                    <CardContent style={{ padding: "10px", width: "100%" }}>
                      <Typography
                        component="h4"
                        sx={{
                          fontSize: { xs: "14px", sm: "18px" },
                          paddingBottom: "10px",
                        }}
                      >
                        <Link
                          to=""
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          <h4 style={{ margin: "0px", padding: "0px" }}>
                            {blogDetails?.title}
                          </h4>
                        </Link>
                      </Typography>

                      <Box
                        sx={{
                          minHeight: "30px",
                          display: "flex",
                          alignItems: "center",
                          flexWrap: "wrap",
                          margin: "10px 0px",
                        }}
                        className="card-icon"
                      >
                        <Box
                          sx={{
                            display: "flex",
                            margin: "3px",
                            marginRight: "12px",
                          }}
                        >
                          <ThumbUpIcon onClick={onhandlelike} /> {like}
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            margin: "3px",
                            marginRight: "12px",
                          }}
                        >
                          <ThumbDownIcon /> {dislike}
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            margin: "3px",
                            marginRight: "12px",
                          }}
                        >
                          <CommentIcon /> {commentt.length}
                        </Box>
                      </Box>
                      <Box>{removetag(blogDetails.postText)}</Box>
                    </CardContent>
                  </Card>
                </>
              )}
            </Grid>
            <Grid xs={12} sm={5} md={5}>
              <Box
                sx={{
                  minHeight: "200px",
                  margin: "20px",
                  padding: "10px",
                  backgroundColor: "#F2F2F2",
                  borderRadius: "8px",
                }}
              >
                {loading ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <Typography
                      component="h1"
                      sx={{
                        textAlign: "center",
                        fontSize: { sm: "24px", xs: "28px", md: "30px" },
                        fontWeight: "600",
                        padding: "30px",
                      }}
                    >
                      Recent Comments
                    </Typography>

                    {getComment
                      ?.sort((a, b) => {
                        return new Date(b.createdAt) - new Date(a.createdAt);
                      })?.slice(0,loadcomment)
                      ?.map((item) => {
                        return (
                          <>
                            <Card
                              sx={{
                                padding: "10px",
                                border: "1px solid black",
                                margin: "5px",
                                display: "flex",
                              }}
                            >
                              <Box>
                                <AccountCircleIcon
                                  sx={{
                                    marginRight: "15px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                    width: "40px",
                                  }}
                                />
                              </Box>
                              <Box>
                                <Typography
                                  component="h3"
                                  sx={{
                                    fontSize: "22px",
                                    fontWeight: "600",
                                    padding: "0px",
                                  }}
                                >
                                  <b>Name</b> : {item.name}
                                </Typography>
                                <b>Comment</b> : {item.comment} <br />
                                <b>Date</b> : {item.createdAt.slice(0, 10)}
                              </Box>
                            </Card>
                          </>
                        );
                        
                      })}
                  </>
                  
                )}
                <Button sx={{margin:"10px"}} onClick={moreComment}>Load More</Button>
                <Box
                  component="form"
                  sx={{
                    backgroundColor: "#fff",
                    minHeight: "100px",
                    borderRadius: "8px",
                    padding: "15px",
                    marginTop: "25px",
                  }}
                  onSubmit={handleSubmit}
                >
                  <Typography
                    component="h1"
                    sx={{
                      textAlign: "center",
                      fontSize: { sm: "24px", xs: "28px", md: "30px" },
                      fontWeight: "600",
                      padding: "30px",
                    }}
                  >
                    Add Comments
                  </Typography>
                  <Box sx={{ marginBottom: "10px" }}>
                    <label htmlFor="">Name</label>
                    <TextField
                      fullWidth
                      placeholder="Enter Your Name"
                      type="text"
                      name="name"
                      value={message.name}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box sx={{ marginBottom: "10px" }}>
                    <label htmlFor="">Email</label>
                    <TextField
                      fullWidth
                      placeholder="Enter Your Email"
                      type="email"
                      name="email"
                      value={message.email}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box sx={{ marginBottom: "10px" }}>
                    <label htmlFor="">Comment</label>
                    <TextField
                      id="outlined-multiline-static"
                      multiline
                      rows={4}
                      fullWidth
                      placeholder="Write Your comment Here.."
                      type="text"
                      name="comment"
                      value={message.comment}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box sx={{ marginBottom: "10px" }}>
                    <Button variant="contained" type="submit">
                      Comment
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BlogDetails;
