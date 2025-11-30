import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="text-center mt-10">
      <h1>Welcome {session.user.name}</h1>
      <p>This page is protected 🎉</p>
    </div>
  );
}
