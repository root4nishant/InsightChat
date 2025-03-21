"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Heading from "@/components/custom/reusables/Heading";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      router.push("/");
    }

    return () => clearInterval(timer);
  }, [countdown, router]);

  return (
    <div className="h-[92vh] flex flex-col justify-center items-center">
      <Image
        src="/logo2.png"
        loading="lazy"
        alt="logo"
        width={200}
        height={200}
      />
      <Heading text="404!" />
      <p>
        Redirecting to the home page in <span>{countdown}</span> seconds...
      </p>
      <div>
        <Link href="/">Go back to Home</Link>
      </div>
    </div>
  );
}
