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

    // Check if feedback already exists (using email as a unique identifier, adjust as needed)
    const existingFeedback = await subscriberCollection.findOne({ email: feedbacks.email });
    
    if (existingFeedback) {
      return Response.json({
        status: 409, // Conflict status code
        message: "Feedback already exists",
      });
    }
    
    // Add the current time to the feedbacks object
    feedbacks.time = new Date().toISOString();

    // Insert the feedback if it doesn't already exist
    const res = await subscriberCollection.insertOne(feedbacks);
    
    if (res) {
      return Response.json({
        status: 200,
        data: res,
      });
    }
    
    return Response.json({
      status: 404,
      message: "Insertion failed",
    });
  } catch (error) {
    return Response.json({
      message: error,
    });
  }
}

