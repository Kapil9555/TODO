import DATABASE_CONNECTION from "@/app/config/connection"
import NewTodo from "@/app/models/newTaskModel";
import { NextResponse } from "next/server";

export const PATCH = async(req,{params})=>{
    await DATABASE_CONNECTION();

    try{
        const body = await req.json();
        console.log("body completed",body)
         console.log("params",params.id)
         const respData = await NewTodo.findOneAndUpdate({_id:params.id},{isCompleted:body.isCompleted},{new:true})

         if(respData != null){
            return NextResponse.json({message:"Task Updated Successfully"})
         }
         if(respData == null){
            return NextResponse.json({message:"Failed To Update Task"})
         }
    }
    catch(err){
        console.log(err);
         return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
} 