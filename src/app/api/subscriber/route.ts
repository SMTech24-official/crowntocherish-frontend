import { connectDB } from "@/lib/connectDB";

export const GET = async () => {
  try {
    const db = await connectDB();
    const subscriberCollection = await db.collection("subscriber");
    const res = await subscriberCollection.find().toArray();
    if (res) {
      return Response.json({
        status: 200,
        data: res,
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

export async function POST(request: Request) {
  const feedbacks = await request.json();
  try {
    const db = await connectDB();
    const subscriberCollection = await db.collection("subscriber");
    const res = await subscriberCollection.insertOne(feedbacks);
    if (res) {
      return Response.json({
        status: 200,
        data: res,
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
}