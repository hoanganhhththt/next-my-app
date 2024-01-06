'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {

  const router = useRouter();

  return (
    <nav>
      <div className="logo">
        <Image alt="logo nine dev" src="/ninedev.png" width={128} height={77}/>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/dashboard">Dashboard</Link>
      <button onClick={() => router.push("/dashboard")}>Dashboard</button>
    </nav>
  )
}

export default Navbar;