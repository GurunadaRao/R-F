import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaLinkedin, FaEye, FaEyeSlash } from "react-icons/fa";

const carouselImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_HNtzab6ojgN54e2XDDJ31nBF6n84Iulpg&s",
  "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/pwxhmyfv/ff08ff76-82fc-4acd-b225-d03fb6b82b1f.jpg",
  "https://www.budgetbytes.com/wp-content/uploads/2024/06/Grilled-Salmon-Overhead.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADXnxv0ljfzD_a74LupI1L4KAFx0vvoBOCQ&s",
  "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg",
  "https://www.southernliving.com/thmb/rQaGDkAPGa_MeU4eglrAaeuexjg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/southern-living-chicken-parmesan-ddmfs-0047-fe218cb392784e79bfb4bb586685d6f9.jpg",
  "",
];

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [tab, setTab] = useState("candidate");
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] relative px-2">
      <div
        className="max-w-4xl w-full bg-white shadow-2xl flex overflow-hidden"
        style={{
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "50px",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        {/* Left: Carousel Section */}
        <div
          className="hidden md:flex flex-col items-center justify-center bg-yellow-400 w-1/2 relative transition-all duration-700 ease-in-out m-4 "
          style={{
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "50px",
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "10px",
          }}
        >
          <div className="absolute top-8 left-8 flex items-center gap-2">
            <span
              className="text-blue-900 text-4xl font-extrabold"
              onClick={() => navigate("/")}
            >
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFU1wrMmUqiDfqCLCwoIi87VSKnR7KxrTmWBaP8NU76VfoLgcrFpFmYzZmCi_0i1wKp1e3mIBwvtWvWBeAdLYAtNo-bNKI3NmK4x6Itky-noRWw8TYZm4NnezxEgTTuYw9hpoEZ25Bo9rnY2geS12YWFUH-V3MuAEKqoUo8n4VZGQydai5YT_Ei9kIW3E/s320/Sophisticated%20Restaurant%20Logo%20-%20Letter%20'D'.png"
                alt=""
                className="h-[100px] w-[100px] rounded-full"
              />
            </span>
            <h1>Taste Beyond the cuisine</h1>
          </div>
          <div className="flex flex-col items-center mt-12">
            <img
              src={carouselImages[currentImage]}
              alt="carousel"
              className="w-96 h-64 object-cover rounded-2xl shadow-lg mb-4 transition-all duration-1000 ease-in-out"
            />
            <p className="text-gray-800 text-center font-serif font-bold text-sm px-4">
              Discover a world of flavors with our curated selection of dishes
              from around the globe. From spicy to savory, we have something for
              every palate.
            </p>
          </div>
        </div>

        {/* Right: Login Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
          <div className="flex mb-6 bg-blue-50 p-2 rounded-3xl shadow-md w-[230px] mx-auto">
            <button
              className={`px-6 py-2 rounded-full font-semibold text-sm focus:outline-none transition-all ${
                tab === "candidate"
                  ? "bg-blue-100 text-blue-900"
                  : "text-gray-500"
              }`}
              onClick={() => setTab("candidate")}
            >
              Customer
            </button>
            <button
              className={`px-6 py-2 rounded-full font-semibold text-sm focus:outline-none transition-all ${
                tab === "recruiter"
                  ? "bg-blue-100 text-blue-900"
                  : "text-gray-500"
              }`}
              onClick={() => setTab("recruiter")}
            >
              Admin
            </button>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Log in</h2>

          <div className="space-y-3 mb-4">
            <button className="w-full flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white hover:bg-gray-50 transition mb-1">
              <FaGoogle className="text-xl mr-2 text-red-500" />
              <span className="flex-1 text-left">Continue with Google</span>
            </button>
            <button className="w-full flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white hover:bg-gray-50 transition">
              <FaLinkedin className="text-xl mr-2 text-blue-700" />
              <span className="flex-1 text-left">Login with LinkedIn</span>
            </button>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="mx-2 text-gray-400 text-xs">
              Or login with email
            </span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-gray-600 mb-1"
              >
                Email Id
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors text-gray-900"
                placeholder="Enter your email"
              />
              <div className="text-xs mt-1">
                <a href="#" className="text-blue-600 hover:underline">
                  Login via OTP
                </a>
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-gray-600 mb-1"
              >
                Enter Your Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors text-gray-900 pr-10"
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={-1}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="text-xs mt-1 text-right">
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg mt-2 transition text-lg"
            >
              Login
            </button>
          </form>

          <div className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
