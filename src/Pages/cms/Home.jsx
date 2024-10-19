import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
  bannerFunction,
  serviceFunction,
  testimonialFunction,
} from "../../AxiosHandle/Axioshandle";
import "./Home.css";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const Home = () => {
  const [banner, setBanner] = useState();
  const [service, setService] = useState();
  const [testimonial, setTestimonial] = useState();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await bannerFunction();
      setBanner(res?.data?.bannerdata);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const serviceData = async () => {
    setLoading(true);
    try {
      const res = await serviceFunction();
      setService(res?.data?.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const testimonialData = async () => {
    setLoading(true);
    try {
      const res = await testimonialFunction();
      setTestimonial(res?.data?.testimonials);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  console.log("test", testimonial);

  useEffect(() => {
    getData();
    serviceData();
    testimonialData();
  }, []);

  console.log("kk", banner);

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

      {/* start About us part */}

      <Box sx={{ minHeight: "50vh", backgroundColor: "" }}>
        <h1
          style={{
            textAlign: "center",
            margin: "0px!important",
            lineHeight: "0!important",
            margin: "0px",
          }}
        >
          About Us
        </h1>
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

        <Grid container spacing={2} sx={{ width: "90%", margin: "auto" }}>
          <Grid item xs={12} md={6} sm={6}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYjg2_JBQmfVepH5dKILjh_dggQhlmB3dgA&s"
              alt=""
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column!important",
            }}
          >
            <Typography sx={{ fontWeight: "400", cursor: "pointer" }}>
              <p style={{ lineHeight: "1.7" }}>
                Digital Skill Setters is at the forefront of digital technology
                and skill development, dedicated to empowering individuals and
                businesses to thrive in the ever-evolving digital landscape.
                Established in 2023, our team has been instrumental in shaping
                the digital capabilities of countless professionals, ensuring
                they remain competitive and relevant in their respective
                industries.
              </p>
            </Typography>
            <Typography>
              <h2>Our Mission & Vision</h2>
              <p style={{ lineHeight: "1.7", cursor: "pointer" }}>
                Our mission is to bridge the gap between traditional skills and
                the demands of the modern digital world. By providing tailored
                training, resources, and support, we enable our clients to
                adapt, innovate, and excel in the digital era. To be recognised
                globally as the leading authority in digital skill enhancement,
                fostering a community where individuals and businesses can
                seamlessly integrate digital proficiency into their daily
                operations.
              </p>
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* end About us part */}

      {/* start our service part */}
      <Box
        sx={{
          minHeight: "50vh",
          backgroundColor: "#193d57",
          padding: "30px",
        }}
      >
        <Container>
          <Typography
            component="h1"
            sx={{
              textAlign: "center",
              color: "#fff",
              fontSize: { xs: "28px" },
            }}
          >
            <u>Our Service</u>
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#fff",
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

          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              width: "90%",
              margin: "auto",
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
                {service?.map((item) => {
                  return (
                    <>
                      <Grid item xs={12} sm={6} md={4} spacing={2}>
                        <Card
                          sx={{
                            maxWidth: "345px",
                            margin: "15px",
                            cursor: "pointer",
                            borderRadius: "12px",
                            border: "2px solid black",
                          }}
                          className="service_card"
                        >
                          <CardMedia
                            sx={{
                              height: "140px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src="https://as1.ftcdn.net/v2/jpg/02/15/15/08/1000_F_215150815_D248bPxiY2K1QDO7PixyuGDBVO89TOuW.jpg"
                              alt=""
                              style={{
                                minHeight: "100px",
                                width: "100px",
                                borderRadius: "50%",
                                backgroundSize: "cover",
                                border: "2px double black",
                                className: "image",
                              }}
                            />
                          </CardMedia>
                          <CardContent>
                            <Typography component="div">
                              <h3 style={{ textAlign: "center" }}>
                                {item.name}
                              </h3>
                            </Typography>
                            <Typography component="div">
                              <p style={{ textAlign: "center" }}>
                                {item.details.slice(0, 70)}
                              </p>
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </>
                  );
                })}
              </>
            )}
          </Grid>
        </Container>
      </Box>

      {/* end service part */}

      {/* start testiomonal part */}
      <Box sx={{ minHeight: "50vh", padding: "30px" }}>
        <Container>
          <Typography
            component="h1"
            sx={{
              textAlign: "center",
              color: "#000",
              fontSize: { xs: "28px" },
              fontWeight: "600",
            }}
          >
            <u>Testimonial</u>
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

          <Grid
            container
            sx={{
              width: "90%",
              margin: "auto",
              display: "flex",
              justifyContent: "flexstart",
              alignItems: "center",
              flexWrap: "wrap",
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
                {testimonial?.map((item) => {
                  return (
                    <>
                      <Grid xs={12} sm={6} md={4}>
                        <Card
                          sx={{
                            minWidth: "250px",
                            maxWidth: "345px",
                            margin: "15px",
                            cursor: "pointer",
                            borderRadius: "12px",
                            border: "2px solid black",
                            maxHeight: "480px",
                            minHeight: "425px",
                          }}
                          className="service_card"
                        >
                          <CardMedia
                            sx={{
                              height: "190px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={`https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=`}
                              alt=""
                              style={{
                                width: "100%",
                                backgroundSize: "cover",
                                backgroundPosition: "top",
                                className: "image",
                              }}
                            />
                          </CardMedia>
                          <CardContent sx={{ padding: "20px" }}>
                            <Typography
                              component="h3"
                              sx={{ margin: "50px 0px 0px!important" }}
                            >
                              <h3 style={{ textAlign: "center" }}>
                                {item.name}
                              </h3>
                            </Typography>
                            <Typography component="p">
                              <p style={{ textAlign: "center" }}>
                                {item.position}
                              </p>
                            </Typography>
                            <Typography component="p">
                              <p style={{ textAlign: "center" }}>
                                {item.talk.slice(0, 150)}
                              </p>
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </>
                  );
                })}
              </>
            )}
          </Grid>
        </Container>
      </Box>

      {/* end testimonial part */}
    </>
  );
};

export default Home;
