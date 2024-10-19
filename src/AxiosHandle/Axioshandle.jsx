import axios from "axios"

const baseURl = `http://89.116.32.22:7702`

export const axiosInstance = axios.create({
    baseURl :`http://89.116.32.22:7702`
})

axiosInstance.interceptors.request.use(
    async (config)=>{
         const token = localStorage.getItem('token')
         console.log(token,token);
         if(token!== undefined && token!== null){
            config.headers ['x-access-token'] = token
         }
         return config
    }
)

// register form

export const registerFunction = async(data)=>{
   return await axios.post(`${baseURl}/api/register`, data);
}

// login form

export const loginFunction = async(data)=>{
    return await axios.post(`${baseURl}/api/login`,data)
}

// bannerpicture

export const bannerFunction = async()=>{
     return await axios.get(`${baseURl}/api/banner`)
}

// service

export const serviceFunction = async()=>{
    return await axios.get(`${baseURl}/api/service`)
}

// testimonial

export const testimonialFunction = async()=>{
    return await axios.get(`${baseURl}/api/testimonial`)
}

// team 

export const teamFunction = async()=>{
    return await axios.get(`${baseURl}/api/team`)
}

// contact api

export const contactFunction = async(user)=>{
    return await axios.post(`${baseURl}/api/contact/create`,user)
}

// Courses api 

export const CourseFunction = async()=>{
    return await axios.get(`${baseURl}/api/course`)
}

// blogCategory api 

export const categoryFunction = async()=>{
    return await axios.get(`${baseURl}/api/showallcategory`)
}

// all blog api 

export const blogFunction = async()=>{
    return await axios.get(`${baseURl}/api/allBlog`)
}

// category details 

export const categoryWiseFunction = async(id)=>{
    return await axios.get(`${baseURl}/api/category/post/${id}`)
}

// blogDetails

export const blogDetailsFunction = async(id)=>{
    return await axios.get(`${baseURl}/api//blogdetails/${id}`)
}

// getComment

export const getCommentFunc = async(id)=>{
    return await axios.get(`${baseURl}/api/comment/${id}`)
}

// liked

export const getLikedFunc = async(id)=>{
    return await axios.put(`${baseURl}/api/blog/like/${id}`)
}


// post comment

export const postCommentFunc = async(data,_id)=>{
    return await axiosInstance.post(`${baseURl}/api/blog/${_id}/comment/create`,data)
}