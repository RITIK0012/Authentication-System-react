import React , {useState} from "react";
import { useNavigate } from 'react-router-dom';
import "../page/cs/signform.css";
import Contact from "./Contact";
import gri from "../page/img/2.png";
import { TextField } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { lightBlue } from '@mui/material/colors';
import { deepOrange } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import blue from '@mui/material/colors/blue';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';
const useStyles = makeStyles(theme=>({
  
    root: {
      marginBottom: "15px",
    },
    button:{
      paddingTop:"20px",
      width:"100%",
    },
  }));

function Signform(){
    const navigate = useNavigate();
    const classes=useStyles();
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e)=>{
      e.preventDefault();
      const res = await fetch('/signin' , {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        }, 
        body:JSON.stringify({
            email,
            password
        })
      })
      const data = await res.json();
      if(res.status === 400 || !data){
        window.alert("Invalid Credentials");
      }
      else{
        window.alert("Login Successful");
        navigate('/contact');
      }
    }

    return(
    <form method="POST"className="container" >
      <div className="form">
        <div className="leftside">
            <img src={gri} alt="people" className="person"/>
            <div className="createAccount">
                <span>Create an account</span>
            </div>
        </div>
        <div className="rightbartop">
        <div className="rightside">
           <div className="signin"><span>Sign In</span></div>
        
             <div className="fields">
            <Box className={classes.root} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <PersonIcon sx={{ color: 'action.active' , mr:1, ml:1}} />
           <TextField id="input-with-sx"  label="Email" type="email" name="email" variant="standard" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           />
               </Box>
        
               <Box className={classes.root} sx={{ display: 'flex', alignItems: 'flex-end' }}>
               <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            <TextField sx={{ color: 'action.active', mr: 1 }}
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          label="Your Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="standard"
        />
               </Box>
            <Box className={classes.button}>
              <Button sx={{ color: 'black', borderColor: 'black' }} variant="outlined" size="medium" fullWidth
              onClick={loginUser}
              type="submit">
               Login
           </Button>
           </Box>
            </div>
           <div className="reach">
            <span className="icons">Login:</span>
            <FacebookIcon sx={{ color: lightBlue[500],mx:1 }}/>
            <InstagramIcon sx={{ color: deepOrange[500],mx:1 }}/>
            <LocalPostOfficeIcon sx={{ color: red[500] , mx:1}}/>
             </div>
          </div>
          </div>
       </div>
    </form>
    );
}
export default Signform;