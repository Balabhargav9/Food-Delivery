import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pic from "./login.jpg";
const Login = () =>{
    const navigate = useNavigate();
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const logincomplete = (e) =>{
e.preventDefault();
axios.post("http://localhost:5617/delivery/login",{email,password}).then(()=>{console.log("logged in user successfully");navigate("/home")}).catch((error)=>{console.log(error.message)})
    }
    return(<>
    <div style={{height:"100%",width:"100%",display:"flex",justifyContent:"center",marginTop:"250px"}}>
       
    <div id="log-in" style={{width:"20%",height:"150px"}}>
<form>
    <div style={{display:"flex",height:"25%",width:"full",marginTop:"15px",paddingLeft:"8px"}}>
        <div style={{width:"80px"}}><label for="e-mail">E-mail:</label></div>
        <div><input onChange={(e)=>{setemail(e.target.value)}} type="text" id="e-mail" required/></div>
    </div>
    <div style={{display:"flex",height:"25%",width:"full",marginTop:"15px",paddingLeft:"8px"}}>
        <div style={{width:"80px"}}><label for="pass">Password:</label></div>
        <div><input onChange={(e)=>{setpassword(e.target.value)}} type="text" id="pass" required/></div>
    </div>
    <div style={{width:"full",height:"50%",marginTop:"25px",paddingLeft:"90px"}}>
        <button onClick={logincomplete} style={{height:"35px",fontSize:"18px"}}>SUBMIT</button>
    </div>
</form>
    </div>
    <div><img src={pic} style={{height:"150px",width:"200px"}} /></div>
    </div>
    </>);
}
export default Login;