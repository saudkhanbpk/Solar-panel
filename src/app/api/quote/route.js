import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import QuoteSchema from "../../../models/quote.model"


export async function POST(req){
 try {
      await connectDB();

      const body = await req.json();
      const { name ,email ,address ,phone ,interestedProduct ,message } = body;

      if(!name ,!address ,!phone ,!interestedProduct){
        return new Response(
            JSON.stringify({'sucess':false , error: 'required field are missing'}),
            {status:404}
        );
      }
      const newQuote =QuoteSchema({
        name,
        email,
        address,
        phone,
        interestedProduct,
        message
      })
      await newQuote.save();

      return new Response(
        JSON.stringify({'sucess':true,message:"Quote submitted sucessfully"}),
        {status:201}
      )
       
 } catch (error) {
    console.error("Error saving quote:", error);
    return new Response(
        JSON.stringify({sucess:false , error:"internal server error"}),
        {status:500}
    );
 }
}