import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import food from './signin.jpg'
const SignUp = () =>{
    const navigate = useNavigate();
    const [email,setemail] = useState("");
    const [name,setname] = useState("");
    const [password,setpassword] = useState("");
    const [cpass,setcp] = useState("");
    const submitform = (e) =>{
e.preventDefault();
axios.post("http://localhost:5617/delivery/signup",{name,email,password,cpass}).then(()=>{console.log("created user");navigate("/home"); setemail("");setname("");setpassword("");setcp("")}).catch((error)=>{console.log(error.message)})
  }
    return(<>
    <div style={{height:"100%",width:"100%",display:"flex",justifyContent:"center",}}>
        <div style={{height:"350px",marginTop:"250px"}}><img src={food} style={{height:"250px"}}/></div>  
    <div style={{height:"250px",width:"400px",marginTop:"250px"}}>
        <form>
            <div >
            <div style={{display:"flex",paddingTop:"30px",height:"20%",width:"full"}}>
                <div style={{width:"200px",fontSize:"20px",paddingLeft:"10px"}}><label for="user-name">User-Name:</label></div>
              <div> <input type="text" onChange={(e)=>{setname(e.target.value)}} style={{border:"1px solid black",borderRadius:"5px",fontSize:"15px"}} required /></div>
            </div>
            <div style={{display:"flex",paddingTop:"15px",height:"20%",width:"full"}}>
            <div style={{width:"200px",fontSize:"20px",paddingLeft:"10px"}}><label for="email">E-mail:</label></div>
                <div><input type="text" onChange={(e)=>{setemail(e.target.value)}} style={{border:"1px solid black",borderRadius:"5px",fontSize:"15px"}} required /></div>
                
            </div>
            <div style={{display:"flex",paddingTop:"15px",height:"20%",width:"full"}}>
            <div style={{width:"200px",fontSize:"20px",paddingLeft:"10px"}}><label for="password">Password:</label></div>
             <div><input type="text" onChange={(e)=>{setpassword(e.target.value)}} style={{border:"1px solid black",borderRadius:"5px",fontSize:"15px"}} id="password" required /></div>   
            </div>
            <div style={{display:"flex",paddingTop:"15px",height:"20%",width:"full"}}>
             <div style={{width:"200px",fontSize:"20px",paddingLeft:"10px"}}> <label for="confirm-password">Confirm-Password:</label></div>  
             <div><input type="text" onChange={(e)=>{setcp(e.target.value)}} style={{border:"1px solid black",borderRadius:"5px",fontSize:"15px"}} id="confirm-password"required /></div>   
            </div>
            <div style={{height:"20%",width:"full"}}>
                <button onClick={submitform} style={{height:"45px",width:"80px",marginLeft:"180px",marginTop:"35px",fontSize:"17px",border:"2px soild black" ,borderRadius:"5px",backgroundColor:"purple"}}>Submit</button>
            </div>
            </div>
            
        </form>
    </div>
    </div>
    
    </>);
}
export default  SignUp;