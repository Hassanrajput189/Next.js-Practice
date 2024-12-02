"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log(session)
  if(session) {
    return <>
    <div className = "flex justify-center items-center flex-col gap-4">
      Signed in as {session.user.email} <br/>
      <img src={session.user.image} alt="error" /> <br/>
      <button className="bg-black text-white px-4 rounded-xl hover:font-bold" onClick={() => signOut()}>Sign out</button>
    </div>
    </>
  }
  return <>
  <div className = "flex justify-center items-center flex-col">
    Not signed in <br/>
    <button className="bg-black text-white px-4 rounded-xl hover:font-bold" onClick={() => signIn("github")}>Sign in using Github</button>
  </div>
    {/* <button onClick={() => signIn("google")}>Sign in using Google</button>  */}
  </>
}