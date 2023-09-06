import React , {useEffect, useState} from "react";
import "../page/cs/contact.css";
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import EmailIcon from '@mui/icons-material/Email';
import PinDropIcon from '@mui/icons-material/PinDrop';
import PhoneIcon from '@mui/icons-material/Phone';
const useStyles = makeStyles(theme=>({
  
    root: {
      paddingTop:"5px",
      paddingBottom:"5px",
    },
    multiline:{
        width:"100%",
    },
    
  }));

function Contact(){
    const classes=useStyles();
    const [userData , setUserData] = useState({name:"",email:"",phone:"",message:""});

    const userContact = async()=>{
    try{
      const res = await fetch('/getdata',{
        method:"GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
      console.log(data);
      setUserData({...userData,name: data.name,email: data.email,phone: data.phone });
      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }

    }
    catch(err){
      console.log(err);
    }
    }
    useEffect(()=> {
      userContact();
    },[]);

    //we are storing data in states
    const handleInputs = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUserData({...userData,[name]:value});
    }
    //send the data to backend
    const contactForm = async(e)=>{
        e.preventDefault();
        const {name , email, phone , message} = userData;
        const res = await fetch('contact',{
            method: "POST",
            headers: {
              "Content-Type" : "application/json"
            },
            body:JSON.stringify({
              name, email, phone,message
            })
        })
        const data = await res.json();
        if(!data){
            console.log("message not send");
        }
        else{
            alert("Message Send");
            setUserData({...userData, message:""});
        }
    }
    return(
        <div className="contact_page">
            <div className="admin_contact">
                <div className="phone_number">
                    <PhoneIcon sx={{ color: 'action.active', mr: 1 }}/>
                    <div className="number">
                        <span className="hidden">Phone</span>
                        <span className="center_1">+91 9548060979</span>
                    </div>
                </div>
                <div className="email_id">
                    <EmailIcon sx={{ color: 'action.active', mr: 2 }}/>
                    <div className="email">
                        <span className="hidden">Email</span>
                        <span className="center_1">ritikkumar1770@gmail.com</span>
                    </div>
                </div>
                <div className="home_address">
                    <PinDropIcon sx={{ color: 'action.active', mr: 2 }}/>
                    <div className="address">
                        <span className="hidden">Address</span>
                        <span className="center_1">Bijnor,UP</span>
                    </div>
                </div>
            </div>
            <div className="message">
                <div className="get_in_touch">Get in Touch</div>
                <form method="POST" className="user_info">
                    <div className="user_identity">
                        <div className="user_email">
                        <TextField onChange={handleInputs} name="name" value={userData.name} id="outlined-basic" placeholder="Name" variant="filled" size="small"/>
                        </div>
                        <div className="user_email">
                        <TextField onChange={handleInputs} name="email" value={userData.email} id="outlined-basic" placeholder="Email" variant="filled" size="small"/>
                        </div>
                        <div className="user_email">
                        <TextField onChange={handleInputs} name="phone" value={userData.phone} id="outlined-basic" placeholder="Phone Number" variant="filled" size="small"/>
                        </div>
                    </div>
                    <div className="user_message">
                    <TextField className={classes.multiline}
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows={4}
                      onChange={handleInputs} name="message" value={userData.message}
                      />
                    </div>
                    <div className="collect_info">
                       <Button onClick={contactForm} className={classes.messagebutton} sx={{ color: 'black', borderColor: 'black' }} variant="outlined" size="medium" >
                           Send Message
                       </Button>
                    </div>
                </form>

            </div>
        </div>
    );
}
export default Contact;
