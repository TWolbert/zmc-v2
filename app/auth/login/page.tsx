"use client";
import { toast } from "react-toastify";
import SubmitBtn from "./submitbnt";
import { CreateTables, Signin, Signup } from "@/app/_functions/AuthUtils";
import { motion } from "framer-motion";

export default function Login() {
    async function handleLogin(formData: FormData) {
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;

        if (!username) {
            toast.error("Please enter a username");
            return;
        }

        if (!password) {
            toast.error("Please enter a password");
            return;
        }

        const res = await Signin(username, password);

        if ("error" in res) {
            toast.error(res.error);
            return;
        }

        toast.success("Logged in!");
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden relative">
            <motion.h1 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
            className="text-6xl font-bold mb-10 z-20">Login</motion.h1>
            <motion.form
                action={handleLogin}
                className=" flex gap-2 flex-col p-3 rounded-xl border-accent-300 border-2 bg-zinc-900/30 backdrop-blur-sm z-20"
                // Animate using framer motion
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
            >
                <label
                    htmlFor="username"
                    className="font-bold after:content-[':'] text-xl"
                >
                    Username
                </label>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="px-3 py-2 rounded-md bg-background-800 text-xl w-[20vw]"
                />
                <label
                    htmlFor="password"
                    className="font-bold after:content-[':'] text-xl"
                >
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="px-3 py-2 rounded-md bg-background-800 text-xl"
                />
                <SubmitBtn />
            </motion.form>
        </main>
    );
}
