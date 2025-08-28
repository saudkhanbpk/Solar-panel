import { NextResponse } from "next/server";
import  connectDB  from "../../../lib/mongodb";
import Pakages from '../../../models/pakages.model'

export async function GET() {
    try {
        await connectDB();
        const pakages = await Pakages.find({});
        return NextResponse.json(pakages, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function POST(req) {
    
    try {
        await connectDB();
        const body = await req.json();
        const newpakages = new Pakages(body);
        await newpakages.save();
        return NextResponse.json(newpakages, { status: 201 });

    } catch (error) {
        NextResponse.json({ error: error.message }, { status: 500 });
    }
}

