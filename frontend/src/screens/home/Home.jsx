import {  useEffect, useState } from "react"
// import useLogout from "../../hooks/useLogout";
 import { useAuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
// import useGoogle from "../../hooks/useGoogle";

const Home = () => {
  const [count, setCount] = useState(0)
  // const { logout} = useLogout()
   const {authUser} = useAuthContext()
  // const {google} = useGoogle()

  useEffect(() => {
    console.log('here we are')
    if(!authUser){
     < Navigate to = '/login'/>
    }
    }, [authUser]);

      
  const handleCount = async () => {
    setCount(count + 1)
    const res = await fetch(`api/home/count`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ count })
    })
    const data = await res.json()
    setCount(data.count)
  }
  return (
    <div className="w-3/5 sm:h-[450px] md:h-[700px] rounded-md bg-clip-padding backdrop-filter 
      backdrop-blur-sm bg-opacity-10 border border-blue-300">
        <div className="flex flex-col justify-center items-center mt-60 gap-12"> <h1 className="text-7xl text-white">{count}</h1>
        <button className="text-white font-bold text-5xl" onClick={handleCount}>Click me</button>
        </div> 
     

        {/* <div className="mt-auto">
          {!loading ? <button className="w-6 h-6 text-gray-500 cursor-pointer" onClick={logout} /> : <span className="loading loading-spinner"></span>}
        </div> */}

    </div>
  )
}
// 2/4 w

export default Home