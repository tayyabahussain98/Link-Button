"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const route = useRouter()
  return (
   <div>
    <h1><b>This is a Homepage</b></h1>
    <button onClick={() => route.push("/about")}><b>Go To Aboutpage</b></button>
    <br />
    <br />
    <Link href={"/about"}><b>Go To Aboutpage</b></Link>
   </div>
  )
}
