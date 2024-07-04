import { Description, GitHub, LinkedIn, Title } from "@mui/icons-material";
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NetworkWifi3BarIcon from '@mui/icons-material/NetworkWifi3Bar';
export default{
    name:"Prathamesh Pawar",
    title:"Computer Programmer",

    birthdate:"30-07-2004",
    email:"prathameshpawarpap@gmail.com ",
    address:"A/P pedhe walope chiplun wadkar coloney room-d8, pin:415605",
    phone:"8329119606",
    Social:{
        

        GitHub:{
            link:"https://github.com/pratz2040",
            text:"  MyGit-Hub",
            icon:<GitHubIcon/>,
        },
        Netlify:{
            link:"https://app.netlify.com/teams/pratz2040/overview",
            text:"  MyNetlify",
            icon:<NetworkWifi3BarIcon/>,

        },

        LinkedIn:{
            link:"https://www.linkedin.com/in/prathamesh-pawar-454934274/",
            text:"  MyLinkedin",
            icon:<LinkedInIcon/>,

        },

    },

    about:
    "An intermediate computer programmer, with a good hand in programming language. I have a good experience with C, CPP, Data structure and Machine learning. A good problem solver with Positive Attitude. Highly Confident and Enthusiastic. Look for a company and a place to grow.",
    
    experience:[
        {
            title:"Self Project",
            date:"(1-2-24)-(28-2-24)",
            Description:"Worked on a Hand Gesture recognition projest using various Python libraries and have a hands on experience with Machine learning.was useful in day to day use and medical purposes",
        },
        {
            title:"Deltiin",
            date:'(15-06-24) -(present)',
            Description:" Developed dynamic and interactive web applications using modern JavaScript frameworks and libraries, such as React.js and vite app. Implemented reusable components to streamline development and maintain consistency across projects.",
        },
    ],

    educations:[
        {
            title:"Christ jyoti convent high school",
            university:"Mumbai university,India",
            Description:"Studied SSC",
        },

        {
            title:"Dnyandeep school of Science",
            university:'Mumbai university,India',
            Description:"Completed HSC",
        },

        { 
            title:"Government college of Engineering,karad",
            university:"Shivaji Maharaj university ",
            date:"2024-2027( Expected)",
            Description:"Bachelor of Technology, Information Technology",


        },
    ],


}

    