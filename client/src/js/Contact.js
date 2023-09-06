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
    const [userData , setUserData] = useState({});
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
      setUserData(data);
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
                <form className="user_info">
                    <div className="user_identity">
                        <div className="user_email">
                        <TextField value={userData.name} id="outlined-basic" placeholder="Name" variant="filled" size="small"/>
                        </div>
                        <div className="user_email">
                        <TextField value={userData.email} id="outlined-basic" placeholder="Email" variant="filled" size="small"/>
                        </div>
                        <div className="user_email">
                        <TextField value={userData.phone} id="outlined-basic" placeholder="Phone Number" variant="filled" size="small"/>
                        </div>
                    </div>
                    <div className="user_message">
                    <TextField className={classes.multiline}
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows={4}
                      />
                    </div>
                    <div className="collect_info">
                       <Button className={classes.messagebutton} sx={{ color: 'black', borderColor: 'black' }} variant="outlined" size="medium" >
                           Send Message
                       </Button>
                    </div>
                </form>

            </div>
        </div>
    );
}
export default Contact;
