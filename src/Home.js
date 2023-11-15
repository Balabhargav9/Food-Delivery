import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Home = () =>{
    const navigate = useNavigate();
    const [array,setarray] = useState([]);
    const [data,setdata] = useState({name:"",mobileno:"",item:"",price:"",address:""});
    const [name,setname]= useState("");
    const [mobileno,setmob]=useState("");
    const [item,setitem] = useState("");
    const [price,setprice] = useState("");
    const [address,setadd]=useState("");
    const Delivery = (e) =>{
e.preventDefault();
setarray([...array,data]);
axios.post("http://localhost:5617/delivery/createorder",{name,mobileno,item,price,address}).then(()=>{console.log("order taken")}).catch((error)=>{console.log(error.message)});
    }
    useEffect(()=>{
        console.log(array);

},[array])
const changeWeb = () =>{
navigate("/cards");
}
    return(<>
    
    <div style={{border:"2px solid black",width:"400px",height:"350px",marginLeft:"550px",marginTop:"200px"}}>
      <form>
        <div style={{display:"flex",height:"50px",width:"full",marginTop:"40px"}}>
        <div style={{width:"100px",fontSize:"18px",paddingLeft:"15px"}}><label for="name">Name:</label></div>  
         <div ><input onChange={(e)=>{setdata({ ...data, name: e.target.value });setname(e.target.value)}} style={{border:"2px solid black" , borderRadius:"5px",fontSize:"18px"}}  id="name" type="text" required /></div> 
        </div>
        <div style={{display:"flex",height:"50px",width:"full"}}>
        <div style={{width:"100px",fontSize:"18px",paddingLeft:"15px"}}> <label for="phone-no">Mobile No:</label></div> 
       <div><input onChange={(e)=>{setdata({ ...data, mobileno: e.target.value });setmob(e.target.value)}} style={{border:"2px solid black" , borderRadius:"5px",fontSize:"18px"}}  id="phone-no" type="number" required /></div>   
        </div>
        <div style={{display:"flex",height:"50px",width:"full"}}>
         <div style={{width:"100px",fontSize:"18px",paddingLeft:"15px"}}> <label for="food-item">Give a Task:</label></div>
        <div><input onChange={(e)=>{setdata({ ...data, item: e.target.value });setitem(e.target.value)}} style={{border:"2px solid black" , borderRadius:"5px",fontSize:"18px"}} id="food-item" type="text" required/></div>  
        </div>
        <div style={{display:"flex",height:"50px",width:"full"}}>
        <div style={{width:"100px",fontSize:"18px",paddingLeft:"15px"}}><label for="money">PRICE:</label></div>  
        <div><input onChange={(e)=>{setdata({ ...data, price: e.target.value });setprice(e.target.value)}} style={{border:"2px solid black" , borderRadius:"5px",fontSize:"18px"}} id="money" type="money" required /></div>  
        </div>
        <div style={{display:"flex",height:"50px",width:"full"}}>
        <div style={{width:"100px",fontSize:"18px",paddingLeft:"15px"}}><label for="address">ADRESS:</label></div>  
        <div><input onChange={(e)=>{setdata({ ...data, address: e.target.value });setadd(e.target.value)}} style={{border:"2px solid black" , borderRadius:"5px",fontSize:"18px"}} id="address" type="text" /></div>  
        </div>
        <div id="take_delivery" style={{height:"50px",width:"full",marginLeft:"150px"}}>
<button onClick={Delivery} style={{backgroundColor:"green",height:"50px",width:"100px",borderRadius:"5px"}}>TAKE A DELIVERY</button>
    </div>
      </form>
      
    </div>
    <div >
        <button onClick={changeWeb} style={{height:"50px",width:"100px",backgroundColor:"green",marginLeft:"700px",borderRadius:"5px"}}>ACCEPT A DELIEVERY</button>
      </div>
    </>);
}
export default Home;