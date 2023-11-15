const { UserModel, DataModel } = require("./Schema");
require("dotenv").config();

exports.SignUp = async (req,res) =>{
    try{
const {name,email,password,confirmPassword} = req.body;
// if(password !== confirmPassword){
//      res.status(500).json({error:"please enter confirm password correctly"});
// }
    const response = await UserModel.create({name,email,password,confirmPassword});
    res.status(200).json({
        user:{response}
    })

    }
    catch(error){
console.log(error.message);
res.status(500).json({
    error:error.message
})
    }
}
exports.login = async (req,res) =>{
    try{
    const {email,password} = req.body;
    const response1 = await UserModel.findOne({email});
    // if(!response1){
    //  res.status(500).json({error:"email is not valid"});
    // }
    // if(password !== response1.password){
    //     res.status(500).json({error:"you had entered incorrect password"});
    // }
    res.status(200).json({
        user:{response1}
    })
}
catch(error){
    console.log(error.message);
}
}

exports.createOrder = async (req,res) =>{
    try{
const {name,mobileno,item,price,address} = req.body;
const orderresponse = await DataModel.create({name,mobileno,item,price,address}) ;
res.status(200).json({user:{orderresponse}});
    }
    catch(error){
        console.log(error);
        res.status(200).json({error:error.messsage})
    }
}
exports.getAllData = async (req,res) =>{
    try{
const response = await DataModel.find();
res.status(200).json({user:{response}});
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({error:error.message});
    }
}