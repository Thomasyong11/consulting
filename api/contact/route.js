export async function POST(request) {
  // Simulate API processing
  const body = await request.json();
  console.log("API Contact Form Data:", body);
  
  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return Response.json({ success: true, message: "Message received" });
}
