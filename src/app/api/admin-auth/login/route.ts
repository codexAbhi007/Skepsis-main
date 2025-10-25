// import { NextRequest, NextResponse } from "next/server";

// import nodemailer from "nodemailer";
// import { connectRedis, redisClient } from "@/lib/redis";



// // Function to generate OTP
// function generateOTP(): string {
//   return Math.floor(100000 + Math.random() * 900000).toString();
// }

// export async function POST(request: NextRequest) {
//   const { email, password, name, role } = await request.json();

//   // Ensure Redis is connected
//   try {
//     await connectRedis();
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Reddis Connection Error!" },
//       { status: 500 }
//     );
//   }

//   // Hardcoded admin credentials
//   const adminEmail = process.env.ADMIN_EMAIL;
//   const adminPassword = process.env.ADMIN_PASSWORD;

//   if (!adminEmail || !adminPassword) {
//     return NextResponse.json(
//       { error: "Server configuration error" },
//       { status: 500 }
//     );
//   }

//   // Validate credentials
//   if (email !== adminEmail || password !== adminPassword) {
//     console.log("Wrong credentials");
//     return NextResponse.json(
//       { error: "Invalid email or password" },
//       { status: 401 }
//     );
//   }

//   console.log("Correct Credentials Recieved!");

//   // Generate OTP
//   const OTP = generateOTP();

//   //Storing the OTP in redis for 300seconds (5minutes)
//   await redisClient.set(email, OTP, { EX: 300 });

//   // Configure nodemailer to send email
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     secure: true,
//     auth: {
//       user: adminEmail,
//       pass: process.env.EMAIL_PASSWORD, // Use environment variable for email password
//     },
//   });

//   // Email content
//   const mailOptions = {
//     from: adminEmail,
//     to: adminEmail, // Sending the email to the same shared email
//     subject: "Admin Panel OTP Verification",
//     text: `Hello,\n\nAn admin is trying to log in.\n\nName: ${name}\nRole: ${role}\n\nYour OTP is: ${OTP}\n\nIf this wasn't you, please take immediate action.`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return NextResponse.json({ message: "OTP sent to email" }, { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
//   }
// }
