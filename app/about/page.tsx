"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Aboutpage = () => {
    const route = useRouter()
  return (
    <div>
        <h1><b>Aboutpage</b></h1>
        <button onClick={() => route.push("/navbar")}><b>Go To Navbar</b></button>
        <br />
        <br />
        <Link href={"/navbar"}><b>Go To Navbar</b></Link>
    </div>
  )
}

export default Aboutpage