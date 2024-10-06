"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const route = useRouter()
  return (
    <div>
        <h1><b>You are Navbar</b></h1>
        <button onClick={() => route.push("/.")}><b>Go To Homepage</b></button>
        <br />
        <br />
        <Link href={"/."}><b>Go To Homepage</b></Link>
    </div>
  )
}

export default Navbar