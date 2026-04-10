import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongoose";
import User from "@/lib/models/User";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Please fill all fields" },
        { status: 400 }
      );
    }

    await dbConnect();

    // Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "User registered successfully", user: { id: user._id, name: user.name, email: user.email } },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "An error occurred while registering the user", error: error.message },
      { status: 500 }
    );
  }
}
