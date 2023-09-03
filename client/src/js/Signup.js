import React , {useState} from "react";
import { useNavigate } from 'react-router-dom';
import "../page/cs/signup.css";
import gri from "../page/img/2.png";
import { TextField } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Signform from "./Signform";
import { lightBlue } from '@mui/material/colors';
import { deepOrange } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import InputLabel from '@mui/material/InputLabel';
import blue from '@mui/material/colors/blue';
import Input from '@mui/material/Input';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import WorkIcon from '@mui/icons-material/Work';
import PasswordIcon from '@mui/icons-material/Password';
import LockClockIcon from '@mui/icons-material/LockClock';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
const useStyles = makeStyles(theme=>({
  
    root: {
      paddingTop:"5px",
      paddingBottom:"5px",
    },
    password:{
        marginTop: "15px",
    },
  }));

function Signup(){
    const classes=useStyles();
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [work, setWork] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  


  const PostData = async(e)=>{
    e.preventDefault();
    

   const res = await fetch('/register',{
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body:JSON.stringify({
      name, email, phone,work, password, cpassword
    })
   });
    const data = await res.json();
    if(res.status === 422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }else{
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate("/Signform");
    }

  }

    return(
    <div className="container_signup">
        <form method="POST" className="signupform" >
            <div className="leftside_signup">
            <div className="signup"><span>Sign Up</span></div>
            <div className="user_data">
            <Box className={classes.root} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <PersonIcon sx={{ color: 'action.active', mr: 1 }} />
           <TextField id="input-with-sx"  label="Your Name" variant="standard" name="name" 
             value={name}
            onChange={(e) => setName(e.target.value)}
           />
               </Box>
              
               <Box className={classes.root} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <EmailIcon sx={{ color: 'action.active', mr: 1 }} />
           <TextField id="input-with-sx"  label="Your Email" type="email" name="email" variant="standard" 
             value={email}
            onChange={(e) => setEmail(e.target.value)}
           />
               </Box>
               <Box className={classes.root} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <PhoneIcon sx={{ color: 'action.active', mr: 1 }} />
           <TextField id="input-with-sx"  label="Mobile Number" name="phone" variant="standard" 
             value={phone}
            onChange={(e) => setPhone(e.target.value)}
           />
               </Box>
               <Box className={classes.root} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <WorkIcon sx={{ color: 'action.active', mr: 1 }} />
           <TextField id="input-with-sx"  label="Your Profession" name="work" variant="standard" 
            value={work}
            onChange={(e) => setWork(e.target.value)}
           />
               </Box>
               {/* <Box className={classes.root}>
               <FormControl  >
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </Box> */}
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
          label="Password"
          name="password"
          variant="standard"
          value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          label="Confirm Password"
          name="cpassword"
          variant="standard"
          value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
        />
               </Box>

        {/* <Box className={classes.root}>
        <FormControl  >
          <InputLabel htmlFor="standard-adornment-password">Confirm your Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </Box> */}
        <Box className={classes.password}>
              <Button sx={{ color: 'black', borderColor: 'black' }} variant="outlined" size="medium" 
              onClick={PostData}
              type="submit" >
               Register
           </Button>
           </Box>
           </div>
            </div>
            <div className="rightside_signup">
            <div className="rightside_data">
            <img src={gri} alt="people" className="persons"/>
            <div className="registered">
                <span>Already Registered</span>
            </div>
            </div>
            </div>
        </form>
    </div>
    );
}
export default Signup;
