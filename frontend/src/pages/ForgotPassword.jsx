import { useState } from "react"
import { IoIosArrowRoundBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { serverUrl } from "../App"
import axios from "axios"
function ForgotPassword() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const navigate = useNavigate()
  const [otp, setOtp] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSendOtp = async () => {
    try {
      const result = await axios.post(`${serverUrl}/api/auth/send-otp`, { email }, { withCredentials: true })
      console.log(result)
      setStep(2)
    } catch (error) {
      console.log(error)
    }
  }


  const handleVerifyOtp = async () => {
    try {
      const result = await axios.post(`${serverUrl}/api/auth/verify-otp`, { email, otp }, { withCredentials: true })
      console.log(result)
      setStep(3)
    } catch (error) {
      console.log(error)
    }
  }

  const handleResetPassword = async () => {
    if (newPassword != confirmPassword) {
      return null;
    }
    try {
      const result = await axios.post(`${serverUrl}/api/auth/reset-password`, { email, newPassword }, { withCredentials: true })
      console.log(result)
      navigate("/signin")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex w-full items-center justify-center min-h-screen p-4 bg-[#fff9f6]">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
        <div className="flex items-center gap-4 mb-4">
          <IoIosArrowRoundBack size={30} className="text-[#ff4d2d] cursor-pointer" onClick={() => navigate("/signin")} />
          <h1 className="text-2xl font-semibold text-center text-[#ff4d2d]">Forgot Password</h1>
        </div>
        {step == 1 &&
          <div>
            {/* email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
              <input type="email" className="w-full border-[1px] border-gray-200 rounded-lg px-3 py-2 focus:outline-none" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <button className={`w-full font-semibold py-2 rounded-lg transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`} onClick={handleSendOtp}>
              Send OTP
            </button>

          </div>
        }



        {step == 2 &&

          <div>
            {/* OTP */}
            <div className="mb-6">
              <label htmlFor="otp" className="block text-gray-700 font-medium mb-1">OTP</label>
              <input type="text" className="w-full border-[1px] border-gray-200 rounded-lg px-3 py-2 focus:outline-none" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
            </div>

            <button className={`w-full font-semibold py-2 rounded-lg transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`} onClick={handleVerifyOtp}>
              Verify OTP
            </button>

          </div>
        }


        {step == 3 &&

          <div>
            {/* RESET PASSWORD */}
            <div className="mb-6">
              <label htmlFor="newPassword" className="block text-gray-700 font-medium mb-1">New Password</label>
              <input type="text" className="w-full border-[1px] border-gray-200 rounded-lg px-3 py-2 focus:outline-none" placeholder="Create new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-1">Confirm Password</label>
              <input type="text" className="w-full border-[1px] border-gray-200 rounded-lg px-3 py-2 focus:outline-none" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>

            <button className={`w-full font-semibold py-2 rounded-lg transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`} onClick={handleResetPassword}>
              Reset Password
            </button>

          </div>

        }

      </div>
    </div>

  )
}

export default ForgotPassword