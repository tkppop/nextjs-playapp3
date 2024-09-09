import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { useState } from 'react';
// import axios from 'axios';

// ... existing imports and code ...

export default async function ServicesPage2() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>This is a services page 2</p>
    </div>
  );
}