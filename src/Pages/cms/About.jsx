import React, { useEffect, useState } from "react";
import {
  bannerFunction,
  serviceFunction,
  teamFunction,
} from "../../AxiosHandle/Axioshandle";
import { Link, useFetcher } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const About = () => {
  const [banner, setBanner] = useState([]);
  const [service, setService] = useState([]);
  const [team, setTeam] = useState([]);

  const bannerData = async () => {
    try {
      const res = await bannerFunction();
      setBanner(res?.data?.bannerdata);
    } catch (err) {
      console.log(err);
    }
  };

  const serviceData = async () => {
    try {
      const res = await serviceFunction();
      setService(res?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  const teamData = async () => {
    try {
      const res = await teamFunction();
      setTeam(res?.data?.TeamMember);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    bannerData();
    serviceData();
    teamData();
  }, []);

  return (
    <>
      {/* start banner part */}
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

      {/* end banner part */}

      {/* start about part */}
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

      {/* end about part */}

      {/* start service part */}

      <Box
        sx={{
          minHeight: "50vh",
          backgroundColor: "#193d57",
          padding:"30px"
        }}
      >
       <Container>
       <Typography component="h1" sx={{ textAlign: "center", color: "#fff",fontSize:{xs:'28px'} }}>
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
                        <h3 style={{ textAlign: "center" }}>{item.name}</h3>
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
        </Grid>
       </Container>
      </Box>

      {/* end service part */}

      {/* start team part */}
      <Box sx={{ minHeight: "80vh", padding: "30px 0px" }}>
     <Container>
     <Typography component="h1" sx={{ textAlign: "center", color: "#000",fontSize:{xs:'28px'},fontWeight:"600" }}>
          <u>Our Team</u>
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
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "90%",
            margin: "auto",
          }}
        >
          {team?.map((item) => {
            return (
              <>
                <Grid item xs={12} spacing={2} sm={6} md={3}>
                  <Card
                    sx={{
                      minWidth: "210px",
                      maxWidth: "300px",
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
                        src={`https://www.ultimatebeaver.com/wp-content/uploads/2021/04/photo-gallery-img-02.jpg`}
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
                    <CardContent sx={{ paddingTop: "0px!important" }}>
                      <Typography component="div">
                        <h3
                          style={{
                            textAlign: "center",
                            margin: "0px!important",
                          }}
                        >
                          {item.name}
                        </h3>
                      </Typography>
                      <Typography component="div">
                        <p
                          style={{
                            textAlign: "center",
                            margin: "0px!important",
                          }}
                        >
                          {item.possession}
                        </p>
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          marginTop: "20px",
                        }}
                      >
                        <FacebookIcon variant="contained" color="primary" />
                        <WhatsAppIcon variant="contained" color="success" />
                        <TwitterIcon variant="contained" color="black" />
                        <InstagramIcon variant="contained" color="secondary" />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
        </Grid>
     </Container>
      </Box>
    </>
  );
};

export default About;
