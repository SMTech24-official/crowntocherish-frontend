import { connectDB } from "@/lib/connectDB";

export const GET = async () => {
  try {
    const db = await connectDB();
    const articlesCollection = await db.collection("articles");
    const res = await articlesCollection.find().toArray();
    if (res) {
      return Response.json({
        status: 200,
        data: res,
        length: res?.length
      });
    }
    return Response.json({
      status: 404,
      message: "No data Found",
    });
  } catch (error) {
    return Response.json({
      message: error,
    });
  }
};