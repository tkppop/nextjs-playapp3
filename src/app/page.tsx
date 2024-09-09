import Image from "next/image";
import Link from 'next/link'
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  // const { userId } = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div> 
        <p> This is a home page</p>
        <p> More content to follow</p>
        <div> 
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p> This is Prasanna's project</p>
          <br />
          <p> someone is playing here</p>
          <Link href="/about" className="text-blue-500 hover:underline">
            About Us
          </Link>
          {/* {userId && (
            <Link href="/services" className="text-blue-500 hover:underline ml-4">
              Services
            </Link>
          )} */}
        </div>
      </div>
    </main>
  );
}
