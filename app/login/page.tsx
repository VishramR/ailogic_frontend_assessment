"use client"

import { DEMO_EMAIL, DEMO_PASSWORD } from '@/lib/auth'
// import { useRouter } from 'next/router'
import { redirect } from "next/navigation";
import React, { FormEvent, useState } from 'react'

const LoginPage = () => {
    // const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e?.preventDefault() 
        setError("")
        if(
            email === DEMO_EMAIL &&
            password === DEMO_PASSWORD
        ){
            document.cookie = 
            "auth=true; Path=/; SameSite=Lax"
            // router.replace("/products")
            redirect("/products")
            // router.refresh()
        }else{
            setError("Invalid email or password")
        }
    }

  return (
    <>
    <div>
        <h1>Login</h1>

        <p>Enter you credentials to continue</p>

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Email' value={email}
            onChange={(e) =>setEmail(e.target.value)}
            required/>

            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Password' value={password}
            onChange={(e) =>setPassword(e.target.value)}
            required/>

            {error && (
                <p className='error'>{error}</p>
            )}

            <button
            type='submit'
            >
                Login
            </button>
        </form>
    </div>
    </>
  )
}

export default LoginPage