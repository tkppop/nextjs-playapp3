import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function ServicesPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>This is a services page</h1>
        <p>More content to follow</p>
        <p>List of services will be added here</p>
      </div>
    </div>
  );
}