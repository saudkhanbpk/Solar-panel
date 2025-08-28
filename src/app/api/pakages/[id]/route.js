import { NextResponse } from "next/server";
import  connectDB  from "../../../../lib/mongodb";
import Pakages from '../../../../models/pakages.model'


export async function DELETE(req, { params }) {
    try {
        await connectDB();
        const { id } = await params;
        const deleted = await Pakages.findByIdAndDelete(id);

        if (!deleted) {
            return NextResponse.json(
                { error: "Package not found" },
                { status: 404 }
            );
        }

        return NextResponse.json("pakage deleted sucessfully");
    } catch (error) {
        return NextResponse.json({ error: message.error })
    }
}


export async function PUT(req, { params }) {
    try {
        await connectDB();
        const { id } = await params;
        const body = await req.json();

        const updated = await Pakages.findByIdAndUpdate(id, body,{
            new: true,
            runValidators: true,
        });

        if(!updated){
            NextResponse.json({error:"Pakage not found"},{status:404})
        }
        return NextResponse.json(updated,{status:200});

    } catch (error) {
     
        return NextResponse.json({error:error.message},{status:500});
    }
}