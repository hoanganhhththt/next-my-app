'use client'

import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {

  const router = useRouter()

  return (
    <nav>
      <div className="logo">
        <h1>Hale</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/dashboard">Dashboard</Link>
      <button onClick={() => router.push("/dashboard")}>Dashboard</button>
    </nav>
  )
}

export default Navbar;