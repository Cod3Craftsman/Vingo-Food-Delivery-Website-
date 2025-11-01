import { useState } from "react"
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { serverUrl } from "../App"
function SignUp() {
  const primaryColor = "#ff4d2d"
  const hoverColor = "#e64323"
  const bgColor = "#fff9f6"
  const borderColor = "#ddd"

  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSignIn = async () => {
    try {
      const result = await axios.post(`${serverUrl}/api/auth/signin`, {
        email, password
      }, { withCredentials: true })
      console.log(result)
    } catch (error) {
      console.log("handleSignIn error", error)
    }
  }
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4" style={{ backgroundColor: bgColor }}>
      <div className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border`} style={{ border: `1px solid ${primaryColor}` }}>
        <h1 className={`text-3xl font-bold mb-2`} style={{ color: `${primaryColor}` }}>Vingo</h1>
        <p className="text-gray-600 mb-8">Sign In to your account to get started with delicious food deliveries</p>




        {/* email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
          <input type="email" className="w-full border rounded-lg px-3 py-2 focus:outline-none" placeholder="Enter your Email" style={{ border: `1px solid ${borderColor}` }} value={email} onChange={(e) => setEmail(e.target.value)} />

        </div>



        {/* password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
          <div className="relative">
            <input type={showPassword ? "text" : "password"} className="w-full border rounded-lg px-3 py-2 focus:outline-none" placeholder="Enter your Password" style={{ border: `1px solid ${borderColor}` }} value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="absolute right-3 top-[14px] text-gray-500 cursor-pointer" onClick={() => setShowPassword(prev => !prev)}>{!showPassword ? <FaRegEye /> : <FaEyeSlash />}</button>
          </div>
        </div>

        {/* forgot password */}
        <div className="text-right mb-4 text-[#ff4d2d]"><span className="cursor-pointer" onClick={() => navigate("/forgot-password")}>Forgot Password</span></div>


        <button className={`w-full font-semibold py-2 rounded-lg transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`} onClick={handleSignIn}>
          Sign In
        </button>

        <button className="w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition duration-200 border-gray-400 hover:bg-gray-100 cursor-pointer"><FcGoogle size={20} />
          <span>Sign In with Google</span>
        </button>
        <p className="text-center mt-6 text-gray-700">Don't have an account? <span className="text-[#ff4d2d] cursor-pointer" onClick={() => navigate("/signup")}>Sign Up</span></p>

      </div>


    </div>
  )
}

export default SignUp