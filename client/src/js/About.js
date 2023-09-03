import React , {useEffect, useState} from "react";
import gri from "../page/img/2.png";
import "../page/cs/about.css";
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate();
  const [userData , setUserData] = useState({});
  const callAboutPage = async()=>{
    try{
      const res = await fetch('/about',{
        method:"GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials:"include"
      
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
      navigate('/Signform');
    }
  }
  useEffect(()=> {
    callAboutPage();
  },[]);


    const [profilePhoto, setProfilePhoto] = useState(gri);
 
  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    // You can use FileReader to display the uploaded image before saving it to state
    const reader = new FileReader();
    reader.onload = () => {
      setProfilePhoto(reader.result);
    };
    reader.readAsDataURL(uploadedImage);
  };

  return (
    <form method="GET" className='profile'>
    <div className='user_details'>
      <div className='leftside_details'>
      <div className="profile_container">
      {profilePhoto && <img src={profilePhoto} className="user_pic" alt="Profile" />}
      </div>
      <input type="file" accept="image/*" className="input_field" onChange={handleImageUpload} />
      </div>
      <div className='rightside_details'>
        <div className='profile_head'>
            <h3>{userData.name}</h3>
            <h4>{userData.work}</h4>
        </div>
        <div className='profile_bottom'>
            <div className='profile_row'>
                <div className="profile_row_left">
                <label>User Id</label>
                </div>
                <div className="profile_row_right">
                <p>{userData._id}</p>
                </div>
            </div>
            <div className='profile_row'>
                <div className="profile_row_left">
                <label>Name</label>
                </div>
                <div className="profile_row_right">
                <p>{userData.name}</p>
                </div>
            </div>
            <div className='profile_row'>
                <div className="profile_row_left">
                <label>Email</label>
                </div>
                <div className="profile_row_right">
                <p>{userData.email}</p>
                </div>
            </div>
            <div className='profile_row'>
                <div className="profile_row_left">
                <label>Phone</label>
                </div>
                <div className="profile_row_right">
                <p>{userData.phone}</p>
                </div>
            </div>
            <div className='profile_row'>
                <div className="profile_row_left">
                <label>Profession</label>
                </div>
                <div className="profile_row_right">
                <p>{userData.work}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
    </form>
  )
}

export default About;
