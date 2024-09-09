import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ServicesPage2 from "./page2";

export default async function ServicesPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const user = await currentUser();
  console.log("user",user)
  const firstName = (user?.firstName || "Guest").charAt(0).toUpperCase() + (user?.firstName || "Guest").slice(1);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-2xl font-bold mb-4">Welcome to Our Services</h1>
        <p className="mb-4">Hello {firstName}, We're glad to have you here.</p>
        <h1>This is a services page</h1>
        <p>More content to follow</p>
        <p>List of services will be added here</p>
        <ServicesPage2/>
      </div>
    </div>
  );
}