// import { openai } from "@ai-sdk/openai";
// import { streamText } from "ai";

// // Allow streaming responses up to 30 seconds
// export const maxDuration = 30;

// export async function POST(req: Request) {
//   console.log(req.body);
//   const { messages } = await req.json();

//   const result = await streamText({
//     model: openai("gpt-3.5-turbo"),
//     messages,
//   });

//   return result.toDataStreamResponse();
// }

// pages/api/openai.ts

import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json();

  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    max_tokens: 2000,
    stream: true,
    prompt,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
//   console.log(stream);
  // Respond with the stream
//   console.log(new StreamingTextResponse(stream));
  return new StreamingTextResponse(stream);
}
