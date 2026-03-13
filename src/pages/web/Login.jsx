import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { apiFetch } from "../../config/api";
import toast from 'react-hot-toast';
import { IoMdMail, IoIosLock, IoMdEye, IoMdEyeOff } from "react-icons/io";
import TopBar from "../../components/layout/TopBar";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function Login() {
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await apiFetch('/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });
            localStorage.setItem('ishine_token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            setUser(data.user);
            toast.success('Login successful!');
            navigate(data.user.role === 'admin' ? '/admin' : '/account');
        } catch (err) {
            toast.error(err.message || 'Login failed');
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <TopBar />
            <Navbar />
            <main className="flex-grow flex items-center justify-center bg-[#f8fafc] py-10 px-4">
                <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-extrabold text-[#1a3a5c]">Welcome Back</h2>
                        <p className="text-slate-500 text-sm mt-1">Please enter your details to sign in</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email</label>
                            <div className="relative">
                                <input 
                                    required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-11 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1a3a5c] outline-none transition-all"
                                    placeholder="email@example.com"
                                />
                                <IoMdMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase ml-1">Password</label>
                            <div className="relative">
                                <input 
                                    required type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-11 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1a3a5c] outline-none transition-all"
                                    placeholder="••••••••"
                                />
                                <IoIosLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                    {showPassword ? <IoMdEyeOff size={20}/> : <IoMdEye size={20}/>}
                                </button>
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-[#1a3a5c] hover:bg-[#122b46] text-white font-bold py-3.5 rounded-xl transition-all shadow-md active:scale-[0.98]">
                            Sign In
                        </button>
                    </form>

                    <p className="text-center text-sm text-slate-500 mt-8">
                        Don't have an account? <Link to="/signup" className="text-[#1a3a5c] font-bold hover:underline">Create Account</Link>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}