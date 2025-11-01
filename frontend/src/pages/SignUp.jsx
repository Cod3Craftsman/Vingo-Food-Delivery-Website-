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
  const [role, setRole] = useState("user")
  const navigate = useNavigate()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mobile, setMobile] = useState("")

  const handleSignUp = async () => {
    try {
      const result = await axios.post(`${serverUrl}/api/auth/signup`, {
        fullName, email, password, mobile, role
      }, { withCredentials: true })
      console.log(result)
    } catch (error) {
      console.log("handleSignUp error", error)
    }
  }
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4" style={{ backgroundColor: bgColor }}>
      <div className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border`} style={{ border: `1px solid ${primaryColor}` }}>
        <h1 className={`text-3xl font-bold mb-2`} style={{ color: `${primaryColor}` }}>Vingo</h1>
        <p className="text-gray-600 mb-8">Create your account to get started with delicious food deliveries</p>

        {/* fullName */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input type="text" className="w-full border rounded-lg px-3 py-2 focus:outline-none" placeholder="Enter your Full Name" style={{ border: `1px solid ${borderColor}` }} value={fullName} onChange={(e) => setFullName(e.target.value)} />

        </div>


        {/* email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
          <input type="email" className="w-full border rounded-lg px-3 py-2 focus:outline-none" placeholder="Enter your Email" style={{ border: `1px solid ${borderColor}` }} value={email} onChange={(e) => setEmail(e.target.value)} />

        </div>


        {/* mobile */}
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-700 font-medium mb-1">Mobile Number</label>
          <input type="text" className="w-full border rounded-lg px-3 py-2 focus:outline-none" placeholder="Enter your Mobile Number" style={{ border: `1px solid ${borderColor}` }} value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </div>


        {/* password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
          <div className="relative">
            <input type={showPassword ? "text" : "password"} className="w-full border rounded-lg px-3 py-2 focus:outline-none" placeholder="Enter your Password" style={{ border: `1px solid ${borderColor}` }} value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="absolute right-3 top-[14px] text-gray-500 cursor-pointer" onClick={() => setShowPassword(prev => !prev)}>{!showPassword ? <FaRegEye /> : <FaEyeSlash />}</button>
          </div>
        </div>



        {/* role */}
        <div className="mb-4">
          <label htmlFor="role" className="block text-gray-700 font-medium mb-1">Role</label>
          <div
            className="flex gap-2">
            {["user", "owner", "deliveryBoy"].map((r, index) => (
              <button className="flex-1 border rounded-lg px-3 py-2 text-center font-medium transition-colors cursor-pointer"
                onClick={() => setRole(r)}
                style={
                  role == r ?
                    { backgroundColor: primaryColor, color: "white" }
                    : { border: `1px solid ${primaryColor}`, color: primaryColor }
                } key={index}>{r}</button>
            ))}
          </div>
        </div>

        <button className={`w-full font-semibold py-2 rounded-lg transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`} onClick={handleSignUp}>
          Sign Up
        </button>

        <button className="w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition duration-200 border-gray-400 hover:bg-gray-100 cursor-pointer"><FcGoogle size={20} />
          <span>Sign Up with Google</span>
        </button>
        <p className="text-center mt-6 text-gray-700">Already have an account? <span className="text-[#ff4d2d] cursor-pointer" onClick={() => navigate("/signin")}>Sign In</span></p>

      </div>


    </div>
  )
}

export default SignUp