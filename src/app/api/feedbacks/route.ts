import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const GET = async () => {
  try {
    const db = await connectDB();
    const feedBackCollections = await db.collection("feedbacks");
    const res = await feedBackCollections.find().toArray();
    if (res) {
      const avg_rating = parseFloat(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (res.reduce((acc: any, data: any) => acc + data.rating, 0) / res.length).toFixed(2)
      );
      return Response.json({
        status: 200,
        data: res,
        length: res?.length,
        avg_rating: avg_rating,
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
    const feedBackCollections = await db.collection("feedbacks");
    const res = await feedBackCollections.insertOne(feedbacks);
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

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json(); // Assuming the ID is provided in the JSON body
    // console.log(id);
    if (!id) {
      return new Response(
        JSON.stringify({ status: 400, message: "ID is required for deletion" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const db = await connectDB();
    const feedBackCollections = db.collection("feedbacks");

    // Delete document by ID
    const res = await feedBackCollections.deleteOne({ _id: new ObjectId(id) });

    if (res.deletedCount > 0) {
      return new Response(
        JSON.stringify({
          status: 200,
          message: "Feedback deleted successfully",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ status: 404, message: "Feedback not found" }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return Response.json({
      message: error,
    });
  }
}

export async function PATCH(request: Request) {
  try {
    const { id } = await request.json(); // Assume the ID is provided in the JSON body
    // console.log(id);

    if (!id) {
      return new Response(
        JSON.stringify({
          status: 400,
          message: "ID is required for updating status",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const db = await connectDB();
    const feedBackCollections = db.collection("feedbacks");

    // Find the document by ID
    const feedback = await feedBackCollections.findOne({
      _id: new ObjectId(id),
    });

    if (!feedback) {
      return new Response(
        JSON.stringify({ status: 404, message: "Feedback not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Determine new status based on current status
    const newStatus =
      feedback.status === "published" ? "unpublished" : "published";

    // Update the document with the new status
    const res = await feedBackCollections.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: newStatus } }
    );

    if (res.modifiedCount > 0) {
      return new Response(
        JSON.stringify({
          status: 200,
          message: `Feedback ${newStatus}.`,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ status: 500, message: "Failed to update status" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return Response.json({
      message: error,
    });
  }
}
