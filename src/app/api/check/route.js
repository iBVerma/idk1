import { connect } from "@/dbconfig/dbconfig";

import axios from "axios";
import Student from "@/models/Students";
import Login from "@/models/Login";

export const POST=async(req)=>{
    const request=await req.json();
    connect();
    if(request.type==="login"){
        const currUser=await Login.findOne({
          username:request.username
        })
        
        if(currUser && currUser.password===request.password){
            const currUser1=await Student.findOne({
                username:request.username
            })
            return Response.json(currUser1)
        }
        else return Response.json("err")
    }
    else{
        const currUser=await Student.create({
            "username":request.username,
            "password":request.password,
            "first_name":request.firstname,
            "last_name":request.lastname,
            "email":request.email
            
        })
        await Login.create({
            "username":request.username,
            "password":request.password,
        })
        return Response.json(currUser)
    }
    //console.log(request)
    return Response.json("ok")
}