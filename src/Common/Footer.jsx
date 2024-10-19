import { Box, Container, Grid, TextField } from "@mui/material";
import React from "react";
import image from "../Images/learning-loom-high-resolution-logo-transparent.png";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "0px",
          backgroundColor: "#ecf1fc",
          minHeight: "300px",
          padding:"30px"
        }}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
      >
        <Container>
          <Grid container>
            <Grid sm={6} xs={12} md={3}>
              <Box>
                <img src={image} alt="" style={{ width: "180px",paddingTop:"20px" }} />
                <Box>
                  <h4 style={{margin:"10px 0px"}}>
                    Address: Plot-9,
                    <br /> Eco Intelligent Park, <br />
                    Unit No- 7E, 7th Floor,
                    <br /> EM Block, Sector V, <br />
                    Bidhannagar, Kolkata,
                    <br /> West Bengal 700091
                  </h4>
                </Box>
              </Box>
            </Grid>
            <Grid sm={6} xs={12} md={3}>
              <Box>
                <h3 style={{ textTransform: "uppercase", color: "#373f49" }}>
                  Useful Links
                </h3>
                <ul style={{ margin: "0px", padding: "0px" }}>
                  <li style={{ listStyle: "none", paddingBottom: "8px" }}>
                    <Link
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li style={{ listStyle: "none", paddingBottom: "8px" }}>
                    <Link
                      to="/about"
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        fontSize: "18px",
                      }}
                    >
                      About
                    </Link>
                  </li>
                  <li style={{ listStyle: "none", paddingBottom: "8px" }}>
                    <Link
                      to="/blog"
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        fontSize: "18px",
                      }}
                    >
                      Blog
                    </Link>
                  </li>
                  <li style={{ listStyle: "none", paddingBottom: "8px" }}>
                    <Link
                      to="/courses"
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        fontSize: "18px",
                      }}
                    >
                      Courses
                    </Link>
                  </li>
                  <li style={{ listStyle: "none", paddingBottom: "8px" }}>
                    <Link
                      to="/contact"
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        fontSize: "18px",
                      }}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid sm={6} xs={12} md={3}>
              <Box>
                <h3 style={{ textTransform: "uppercase", color: "#373f49" }}>
                  Our Services
                </h3>
                <ul style={{ margin: "0px", padding: "0px" }}>
                  <li style={{ listStyle: "none", paddingBottom: "8px" }}>
                    <Link
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        fontSize: "18px",
                      }}
                    >
                      Web Desgin
                    </Link>
                  </li>
                  <li style={{ listStyle: "none", paddingBottom: "8px" }}>
                    <Link
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        fontSize: "18px",
                      }}
                    >
                      Web Development
                    </Link>
                  </li>
                  <li style={{ listStyle: "none", paddingBottom: "8px" }}>
                    <Link
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        fontSize: "18px",
                      }}
                    >
                      Product Managemnet
                    </Link>
                  </li>
                  <li style={{ listStyle: "none", paddingBottom: "8px" }}>
                    <Link
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        fontSize: "18px",
                      }}
                    >
                      Marketing
                    </Link>
                  </li>
                  <li style={{ listStyle: "none", paddingBottom: "8px" }}>
                    <Link
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        fontSize: "18px",
                      }}
                    >
                      Graphic Desgin
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid sm={6} xs={12} md={3}>
              <Box>
                <h3 style={{ textTransform: "uppercase", color: "#373f49" }}>
                  conatct
                </h3>
                <Box>
                  <TextField
                    label="Email"
                    type="text"
                    sx={{
                      marginBottom: "px",
                      width: "90%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <ul style={{ padding: "0px" }}>
                    <li
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "4px",
                        cursor: "pointer",
                      }}
                    >
                      <InstagramIcon />{" "}
                      <span style={{ paddingLeft: "10px" }}>Instagram</span>
                    </li>
                    <li
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "4px",
                        cursor: "pointer",
                      }}
                    >
                      <GitHubIcon />{" "}
                      <span style={{ paddingLeft: "10px" }}>GitHub</span>
                    </li>
                    <li
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "4px",
                        cursor: "pointer",
                      }}
                    >
                      <LinkedInIcon />{" "}
                      <span style={{ paddingLeft: "10px" }}>LinkedIn</span>
                    </li>
                  </ul>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{ backgroundColor: "#b9cde6" }}
      >
        <Container>
          <Grid container>
            <Grid xs={12} md={12} sm={12}>
              <h3 style={{textAlign:"center",fontFamily:"sans-serif",textTransform:"capitalize",fontSize:"16px"}}>All ©Copyrights Are reserved</h3>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
