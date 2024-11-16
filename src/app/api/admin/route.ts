import { connectDB } from "@/lib/connectDB";

export async function POST(request: Request) {
  const admin = await request.json();
  try {
    const db = await connectDB();
    const adminCollection = await db.collection("admin");
    const isExist = await adminCollection.findOne({
      email: admin.email,
      password: admin.password,
    });
    if (isExist) {
      return Response.json({ status: 200, data: isExist });
    }
    return Response.json({
      status: 401,
      message: "Invalid Credential",
    });
  } catch (error) {
    return Response.json({
      message: error,
    });
  }
}
