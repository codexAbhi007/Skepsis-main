// import { NextRequest, NextResponse } from "next/server";
// import { createClient } from "redis";

// const redisClient = createClient({ url: "redis://localhost:6379" });
// await redisClient.connect();

// export async function POST(request: NextRequest) {
//   const { email, otp } = await request.json();
//   console.log("Called")

//   // Retrieve OTP from Redis
//   let storedOtp = await redisClient.get(email);

//   if (!storedOtp) {
//     return NextResponse.json(
//       { error: "No OTP has been generated" },
//       { status: 400 }
//     );
//   }

//   if (otp === storedOtp) {
//     // Clear OTP after successful verification
//     storedOtp = null;
//     return NextResponse.json(
//       { message: "OTP verified successfully" },
//       { status: 200 }
//     );
//   }

//   return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
// }
