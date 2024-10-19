import React, { useEffect, useState } from "react";
import { bannerFunction, contactFunction } from "../../AxiosHandle/Axioshandle";
import { Carousel } from "react-responsive-carousel";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  const [banner, setBanner] = useState([]);
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onsubmit = async (data) => {
    const user = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };
    setLoading(true);
    try {
      const res = await contactFunction(user);
      toast.success("Message Sent Sucessfully");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const bannerData = async () => {
    try {
      const res = await bannerFunction();
      setBanner(res?.data?.bannerdata);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    bannerData();
  }, []);
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

      {/* start contact part */}
      <Box
        sx={{ minHeight: "60vh", backgroundColor: "", paddingBottom: "20px" }}
      >
        <Container>
          <Typography
            component="h1"
            sx={{
              textAlign: "center",
              color: "#000",
              fontSize: { xs: "28px" },
            }}
          >
            <u>Contact us</u>
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
            sx={{ width: "90%", margin: "auto" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            <Grid xs={12} md={6} sm={6} sx={{ width: "100%",marginBottom:"20px",paddingRight:"20px" }}>
              <Card
                style={{ width: "100%", height: "400px", background: "pink" }}
              >
                <iframe
                  title="Google Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.2126179789667!2d88.36056549999999!3d22.600152000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275927b0061ad%3A0x496c2fab98874c86!2sWebskitters%20Technology%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1613040323222!5m2!1sen!2sus"
                  allowFullScreen
                ></iframe>
              </Card>
            </Grid>
            <Grid
              xs={12}
              md={6}
              sm={6}
              sx={{}}
              minWidth="300px"
              maxWidth="400px"
              border="1px solid black"
              borderRadius="12px"
              padding="25px"
            >
              <Typography>
                <h2 style={{ textAlign: "center", margin: "0px" }}>
                  Contact us
                </h2>
                <p style={{ textAlign: "center" }}>
                  Fill up the form and our team will get back to you within 24
                  hours.
                </p>
              </Typography>
              <Box
                component="form"
                display="flex"
                justifyContent="center"
                flexDirection="column"
                onSubmit={handleSubmit(onsubmit)}
              >
                <TextField
                  type="text"
                  id="outlined-required"
                  label="First Name"
                  placeholder="Enter Your  Name.."
                  sx={{ marginBottom: "10px", backgroundColor: "#fff" }}
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && (
                  <span style={{ color: "red" }}>This Field Is Requierd</span>
                )}

                <TextField
                  id="outlined-required"
                  label="E-mail"
                  type="email"
                  sx={{ marginBottom: "10px" }}
                  placeholder="Enter Your Email.."
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <span style={{ color: "red" }}>This field is Requierd</span>
                )}
                <TextField
                  type="number"
                  id="outlined-required"
                  label="Phone"
                  sx={{ marginBottom: "10px" }}
                  placeholder="Enter Your Phone.."
                  {...register("phone", { required: true })}
                />
                {errors.phone?.type === "required" && (
                  <span style={{ color: "red" }}>This field is Requierd</span>
                )}
                <TextField
                  id="outlined-required"
                  label="Message"
                  type="text"
                  sx={{ marginBottom: "10px" }}
                  placeholder="Sent Your Message.."
                  {...register("message", { required: true })}
                />
                {errors.message?.type === "required" && (
                  <span style={{ color: "red" }}>This field is Requierd</span>
                )}

                <Button
                  variant="outlined"
                  sx={{ width: "120px", margin: "auto" }}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={20} /> : <div>Submit</div>}
                </Button>
              </Box>
            </Grid>
          </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
