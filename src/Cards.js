import axios from 'axios';
import { useState } from 'react';
import { useEffect } from "react";
import Template from './Template';

const Cards = () =>{
    const [info,setdata] = useState([]);
    useEffect(()=>{
        axios.post("http://localhost:5617/delivery/getdata").then((response)=>{setdata(response.data.user.response);}).catch((error)=>{console.log(error.message)})
    },[])
    useEffect(()=>{
console.log("info",info);
const local= localStorage.setItem('dd',info);
    },[info])
    return(<>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)"}}>
    {
        info.map((data)=>(
            <div style={{width:"39%",height:"300px",border:"2px solid black",borderRadius:"5px"}}>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px"}}>
                <div>name:</div>
                <div>{data.name}</div>
            </div>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px"}}>
                <div>mobileNo:</div>
                <div>{data.mobileno}</div>
            </div>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px"}}>
                <div>item:</div>
                <div>{data.item}</div>
            </div>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px"}}>
                <div>Price:</div>
                <div>{data.price}</div>
            </div>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px"}}>
                <div>address:</div>
                <div>{data.address}</div>
            </div>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px"}}>
                <button style={{backgroundColor:"green",marginLeft:"45px"}}>ACCEPT</button>
            </div>
            </div>
        ))
    }
    </div>
    </>);
}
export default Cards;