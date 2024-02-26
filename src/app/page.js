"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [username,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const [firstname,setfirstname]=useState("")
  const [lastname,setlastname]=useState("")
  const [email,setemail]=useState("")
  const [data,setdata]=useState(null);
  const router=useRouter();
  
  async function func(){
    const res=await axios.post("/api/check",{
        "type":"signup",
        "username":username,
        "password":password,
        "firstname":firstname,
        "lastname":lastname,
        "email":email,
      
    })
    
    setdata(res.data)
    console.log(res.data)
    console.log(data)
    // console.log("clicked")
  }
  return (
    <div className="p-10">
      <h1>STUDENT ENROLLMENT SIGNUP FORM</h1>
      <br/>
      <br/>
      <div className="flex flex-col gap-y-0">
        
        <input className="w-2/4 text-black" type="text" onChange={(e)=>setUserName(e.target.value)}/>username
        <br/>
      <br/>
        <input className="w-2/4 text-black" type="text" onChange={(e)=>setPassword(e.target.value)}/>password
        <br/>
      <br/>
        <input className="w-2/4 text-black" type="text" onChange={(e)=>setfirstname(e.target.value)}/>first name
        <br/>
      <br/>
        <input className="w-2/4 text-black" type="text" onChange={(e)=>setlastname(e.target.value)}/>last Name
        <br/>
      <br/>
        <input className="w-2/4 text-black" type="text" onChange={(e)=>setemail(e.target.value)}/>email
        <br/>
      <br/>
      </div>
      <div className="flex flex-row gap-x-40">
        <button className="bg-blue-200 p-2">cancel</button>
        <button onClick={()=>func()} className="bg-yellow-300 p-2">submit</button>
      </div>
      <br/>
      <br/>
      if you have account
      <br/>
      <button className="text-yellow-900" onClick={()=>router.push('/login')}>login</button>
      <br/>
      <br/>
      
      {data!==null && 
      <div>
        {data.username}
        <br/>
        {data.last_name}
        <br/>
        {data.first_name}
        <br/>
        {data.email}
      </div>}
    </div>
  );
}
