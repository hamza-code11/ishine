import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { apiFetch } from "../config/api";
import toast from 'react-hot-toast';
import { IoMdMail, IoIosLock, IoMdPerson } from "react-icons/io";
import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Signup() {
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            return toast.error("Passwords do not match!");
        }
        try {
            const data = await apiFetch('/auth/register', {
                method: 'POST',
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                })
            });
            localStorage.setItem('ishine_token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            setUser(data.user);
            toast.success("Account created successfully!");
            navigate("/account");
        } catch (error) {
            toast.error("Registration failed.");
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <TopBar />
            <Navbar />
            <main className="flex-grow flex items-center justify-center bg-[#f8fafc] py-10 px-4">
                <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-[#1a3a5c]">Create Account</h2>
                        <p className="text-slate-500 text-sm mt-1">Join us to start shopping</p>
                    </div>

                    <form onSubmit={handleSignup} className="space-y-4">
                        <InputField label="Full Name" icon={<IoMdPerson />} name="name" type="text" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                        <InputField label="Email Address" icon={<IoMdMail />} name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                        <InputField label="Password" icon={<IoIosLock />} name="password" type="password" value={formData.password} onChange={handleChange} placeholder="••••••••" />
                        <InputField label="Confirm Password" icon={<IoIosLock />} name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} placeholder="••••••••" />

                        <button type="submit" className="w-full bg-[#1a3a5c] hover:bg-[#122b46] text-white font-bold py-3.5 rounded-xl transition-all shadow-md mt-2 active:scale-[0.98]">
                            Sign Up
                        </button>
                    </form>

                    <p className="text-center text-sm text-slate-500 mt-8">
                        Already have an account? <Link to="/login" className="text-[#1a3a5c] font-bold hover:underline">Sign In</Link>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

function InputField({ label, icon, name, type, value, onChange, placeholder }) {
    return (
        <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">{label}</label>
            <div className="relative">
                <input
                    required name={name} type={type} value={value} onChange={onChange} placeholder={placeholder}
                    className="w-full px-11 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#1a3a5c] outline-none transition-all"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">{icon}</div>
            </div>
        </div>
    );
}