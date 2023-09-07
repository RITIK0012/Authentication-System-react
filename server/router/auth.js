const jwt = require("jsonwebtoken");
const express= require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");
require('../db/conn');
const User = require("../model/userSchema");


router.get('/', (req,res)=>{
    res.send(`Hello world from the server router js`);
});


//Using promises
// router.post('/register', (req,res)=>{
//     const {name, email, phone, work, password, cpassword}=req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error : "Plz field the fiels properly"});
//     }
//     User.findOne({email: email}).then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error: "Email already exist"});
//         }
//         const user = new User({name, email, phone, work, password, cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message: "User registered successfully"});
//         }).catch((err)=>{
//             res.status(500).json({error: "Failed to registered"})
//         })
//     }).catch(err =>{
//         console.log(err);
//     })

// });


router.post('/register', async(req,res)=>{
    const {name, email, phone, work, password, cpassword}= req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error : "Plz field the fiels properly"});
    }

    try{
        const userExist = await User.findOne({email: email})
        if(userExist){
            return res.status(422).json({error: "Email already exist"});
        }

        const user = new User({name, email, phone, work, password, cpassword});



        await user.save();
        res.status(201).json({message: "User registered successfully"});
    }
    catch(err){
        console.log(err);
    }

});


//login route

router.post('/signin',async(req,res)=>{
    // console.log(req.body);
    // res.json({message: "awesome"})
    try{
        let token;
        const {email , password} = req.body;

        if(!email || !password ){
            return res.status(400).json({error: "Please fill the data"});
        }

        const userLogin = await User.findOne({email:email});
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            })

            if(!isMatch){
                res.status(400).json({error: "Invalid Credential"});
            }
            else{
                res.json({message: "user Signin Successfully"});
            }
        }
        else{
            res.status(400).json({error: "Invalid Credential"});

        }

        // console.log(userLogin);
       
       
    }catch(err){
        console.log(err);
    }
});

//About us Page

router.get('/about',authenticate ,(req,res)=>{
    console.log(`Hello my about`);
    res.send(req.rootUser);
});

//get user data for contact us and home page
router.get('/getdata',authenticate, (req,res)=>{
    console.log(`Hello my contact`);
    res.send(req.rootUser);
});

router.post('/contact',authenticate,async(req,res)=>{
    try{
        const {name,email,phone,message}=req.body;
        if(!name || !email || !phone || !message){
            console.log("Error in contact form");
            return res.json({error:"Please filled the contact form"});
        }
        const userContact = await User.findOne({_id: req.userID});
        if(userContact){
            const userMessage = await userContact.addMessage(name,email,phone,message);
            await userContact.save();
            res.status(201).json({message: "user contact successfully"});
        }
    }   
    catch(error){
        console.log(error);
    }
});


// router.get('/logout' ,(req,res)=>{
//     console.log(`Hello my Logout page`);
//     res.clearCookie('jwtoken',{path:'/'});
//     res.status(200).send('User Logout');
// });

module.exports = router;