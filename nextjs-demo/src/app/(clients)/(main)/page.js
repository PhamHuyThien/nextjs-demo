"use client"
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {signIn, signOut} from "next-auth/react";
import {getUser} from "@/app/services/auth-service";

export default function Home() {
    const {
        register, handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm({defaultValues: {email: "", password: ""}});

    const [text, setText] = useState("");

    useEffect(() => {
        getUser().then(user => {
            console.log(user)
        }).catch(e =>{
            console.error(e)
        })
    }, [text]);

    async function loginAction(formData) {
        const email = formData.email;
        const password = formData.password;

        try {
            // Gọi signIn của Server. Thằng này sẽ tự động chạy callback jwt, session
            // và redirect dựa trên những gì ta cấu hình hoặc xử lý tiếp theo.
             await signIn("credentials", {
                email,
                password,
                redirect: false, // Tắt redirect mặc định của NextAuth để tự điều hướng bằng Redirect của Next.js
            });
            setText("OK")
        } catch (error) {
            if (error instanceof AuthError) {
                switch (error.type) {
                    case "CredentialsSignin":
                        return {error: "Sai tài khoản hoặc mật khẩu!"};
                    default:
                        return {error: "Đã xảy ra lỗi hệ thống."};
                }
            }
            throw error;
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(loginAction)}>
                <div className={"text-red-500"}>{text}</div>
                <input type={"text"} className="input" {...register('email')}/><br/>
                <input type={"text"} className="input" {...register('password')}/><br/>
                <button className={"btn btn-primary"}>Login</button>
            </form>
            <button className={"btn btn-danger"} onClick={() => signOut()}>Logout</button>
        </div>
    )
}
