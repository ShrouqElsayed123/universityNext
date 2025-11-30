import connect from "@/lib/db";
import User from "@/models/User";

export async function GET() {
  try {
    await connect(); // اتصال بالـ DB

    const newUser = await User.create({
      username: "admin",
      password: "123",
      name: "Admin User",
    });

    return Response.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
    );

  } catch (error) {
    return Response.json(
      { message: "Error creating user", error: error.message },
      { status: 500 }
    );
  }
}
