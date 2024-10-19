import React, { useEffect, useState } from "react";
import { bannerFunction, CourseFunction } from "../../AxiosHandle/Axioshandle";
import { Carousel } from "react-responsive-carousel";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

const Courses = () => {
  const [banner, setBanner] = useState([]);
  const [course, setCourse] = useState([]);
  // const [loading,setLoading] = useState(false)

  const bannerData = async () => {
    try {
      // setLoading(true)
      const res = await bannerFunction();
      setBanner(res?.data?.bannerdata);
      //  setLoading(false)
    } catch (err) {
      // setLoading(false)
      console.log(err);
    }
  };

  const courseData = async () => {
    try {
      const res = await CourseFunction();
      setCourse(res?.data?.Courses);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    bannerData();
    courseData();
  }, []);
  console.log("course", course);
  return (
    <>
      {/* start carousel */}

      <Box sx={{ marginTop: { md: "64px", xs: "56px" } }}>
        <Carousel>
        <div style={{ position: "relative" }}>
            <img
              src={`https://www.pngitem.com/pimgs/m/127-1272135_web-design-web-development-icon-hd-png-download.png`}
              style={{
                maxHeight: "85vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: { md: "10%", sm: "5%", lg: "20%", xs: "0%" },
                left: "5%",
                zIndex: "999",
              }}
            >
              <Typography
                sx={{
                  color: "#624E88",
                  textAlign: "left",
                  margin: { sm: "10px 0px!important", md: "30px" },
                  fontSize: {xs:"12px",sm:"1.2em"},
                }}
              >
                <h1>
                  WEB <br /> DEVELOPMENT
                </h1>
              </Typography>

              <Typography
                component="p"
                sx={{
                  textAlign: "left",
                  color: "#000",
                  width: "500px",
                  marginTop: { sm: "-20px", md: "20px" },
                  fontSize: { lg: "20px", sm: "15px" },
                  fontWeight: "400",
                  display: { xs: "none", sm: "block" },
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                sit quidem itaque odit. Aliquam at, praesentium maiores velit
                aperiam veniam, magnam nihil tempora obcaecati modi eveniet
                alias quas temporibus molestiae!
              </Typography>
              <Box sx={{ marginTop: { sm: "-14px", md: "20px", xs: "-35px" },display:"flex",justifyContent:"flex-start" }}>
                <Link to='/contact'>
                <button
                  style={{
                    border: "2px solid white",
                    color: "white",
                    borderRadius: "14px",
                    padding: "13px 35px",
                    fontSize: "16px",
                    marginTop: "20px",
                    cursor: "pointer",
                    backgroundColor: "#624E88",
                    fontWeight:"600",
                    fontFamily:"sans-serif"
                  }}
                >
                  Getting Start
                </button>
                </Link>
              </Box>
            </Box>
          </div>
          <div style={{ position: "relative" }}>
            <img
              src={`https://www.cyblance.com/portfolio/wp-content/uploads/2022/12/laravel-banner.jpg`}
              style={{
                maxHeight: "85vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: { md: "10%", sm: "5%", lg: "20%", xs: "0%" },
                left: "5%",
                zIndex: "999",
              }}
            >
              <Typography
                sx={{
                  color: "#624E88",
                  textAlign: "left",
                  margin: { sm: "10px 0px!important", md: "30px" },
                  fontSize: {xs:"12px",sm:"1.2em"},
                }}
              >
                <h1>
                  WEB <br /> DEVELOPMENT
                </h1>
              </Typography>

              <Typography
                component="p"
                sx={{
                  textAlign: "left",
                  color: "#000",
                  width: "500px",
                  marginTop: { sm: "-20px", md: "20px" },
                  fontSize: { lg: "20px", sm: "15px" },
                  fontWeight: "400",
                  display: { xs: "none", sm: "block" },
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                sit quidem itaque odit. Aliquam at, praesentium maiores velit
                aperiam veniam, magnam nihil tempora obcaecati modi eveniet
                alias quas temporibus molestiae!
              </Typography>
              <Box sx={{ marginTop: { sm: "-14px", md: "20px", xs: "-35px" },display:"flex",justifyContent:"flex-start" }}>
                <Link to='/contact'>
                <button
                  style={{
                    border: "2px solid white",
                    color: "white",
                    borderRadius: "14px",
                    padding: "13px 35px",
                    fontSize: "16px",
                    marginTop: "20px",
                    cursor: "pointer",
                    backgroundColor: "#624E88",
                    fontWeight:"600",
                    fontFamily:"sans-serif"
                  }}
                >
                  Getting Start
                </button>
                </Link>
              </Box>
            </Box>
          </div>
        
        </Carousel>
      </Box>
      {/* end carousel part */}

      {/* start course part */}
      <Box sx={{ paddingBottom: "20px" }}>
        <Container>
          <Typography
            component="h1"
            sx={{
              textAlign: "center",
              color: "#000",
              fontSize: { xs: "28px", md: "32px" },
              fontWeight: "600",
            }}
          >
            <u>Our Courses</u>
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "#000",
              textTransform: "capitalize",
              fontSize: { xs: "14px", sm: "18px" },
            }}
            component="p"
          >
            <p style={{}}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              numquam
            </p>
          </Typography>
          <Grid container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flexstart",
              flexWrap: "wrap",
              width: "90%",
              margin: "auto",
            }}
          >
            {course?.map((item) => {
              return (
                <>
                  <Grid xs={12} sm={6} md={4} spacing={2}>
                    <Card
                      sx={{
                        minWidth: 210,
                        margin: "20px",
                        maxWidth: "360px",
                        minHeight: "409px",
                        maxHeight: "409px",
                      }}
                    >
                      <CardMedia
                        sx={{ height: 140, backgroundSize: "cover" }}
                        image={`https://cdn.sanity.io/images/tlr8oxjg/production/9f15109746df254c5a030a7ba9239f8a4bb5dadb-1456x816.png?w=3840&q=100&fit=clip&auto=format`}
                        title="green iguana"
                      />
                      <CardContent
                        sx={{
                          minHeight: "174px!important",
                          maxHeight: "174px!important",
                        }}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <h3>
                            <b>Duration</b> : {item.duration} <br />
                          </h3>
                          <h3>
                            <b>Fees</b> : {item.fees}
                          </h3>
                          <h3>
                            <b>Requirements</b> : {item.requirement}
                          </h3>
                        </Typography>
                      </CardContent>
                      <Typography component="div" sx={{ marginTop: "30px" }}>
                        <Button
                          variant="contained"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "auto",
                          }}
                        >
                          Apply
                        </Button>
                      </Typography>
                    </Card>
                  </Grid>
                </>
              );
            })}
          </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Courses;
