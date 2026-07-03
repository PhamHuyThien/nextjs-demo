"use client"
import React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {Eye, EyeOff, Lock, Mail} from 'lucide-react';
import Link from "next/link";
import {useApp} from "@/app/(clients)/_providers/app-provider";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import {getUser} from "@/app/_actions/auth-action";

// 1. Định nghĩa Schema Validate bằng Zod
const loginSchema = z.object({
    email: z.string().min(1, { message: "Email không được để trống" }).email({ message: "Email không đúng định dạng" }),
    password: z.string().min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),
    rememberMe: z.boolean().optional(),
});

export default function LoginPage() {
    const [showPassword, setShowPassword] = React.useState(false);
    const {showLoading, hideLoading, login, logout, setUser} = useApp();
    const router = useRouter();
    // 2. Khởi tạo react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    });

    // 3. Hàm xử lý khi Submit thành công
    const onSubmit = async (data) => {
        try {
            showLoading();
            const result = await login(data.email, data.password);
            if (!result.ok) {
                return toast.error(`Tài khoản hoặc mật khẩu không đúng (${result.error})`);
            }
            setUser(result);
            toast.success("Đăng nhập thành công");
            router.push('/');
        } catch (error) {
            toast.error("Có lỗi xảy ra, vui lòng thử lại");
            console.error(error);
        } finally {
            hideLoading();
        }
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
                <div className="card-body">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <h2 className="card-title text-3xl font-bold justify-center text-primary mb-2">
                            Chào Mừng Trở Lại
                        </h2>
                        <p className="text-sm text-base-content/70">
                            Vui lòng đăng nhập vào tài khoản của bạn
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                        {/* Trường Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Địa chỉ Email</span>
                            </label>
                            <div className="input input-bordered flex items-center gap-2 relative focus-within:border-primary">
                                <Mail className="w-5 h-5 opacity-50" />
                                <input
                                    type="text"
                                    placeholder="name@example.com"
                                    className="grow"
                                    {...register('email')}
                                />
                            </div>
                            {errors.email && (
                                <label className="label py-1">
                                    <span className="label-text-alt text-error font-medium">{errors.email.message}</span>
                                </label>
                            )}
                        </div>

                        {/* Trường Mật khẩu */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Mật khẩu</span>
                            </label>
                            <div className="input input-bordered flex items-center gap-2 relative focus-within:border-primary">
                                <Lock className="w-5 h-5 opacity-50" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="grow"
                                    {...register('password')}
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-ghost btn-xs btn-circle"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                            {errors.password && (
                                <label className="label py-1">
                                    <span className="label-text-alt text-error font-medium">{errors.password.message}</span>
                                </label>
                            )}
                        </div>

                        {/* Remember Me & Quên mật khẩu */}
                        <div className="flex items-center justify-between pt-2">
                            <label className="label cursor-pointer justify-start gap-2">
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-primary checkbox-sm rounded"
                                    {...register('rememberMe')}
                                />
                                <span className="label-text text-sm select-none">Ghi nhớ đăng nhập</span>
                            </label>
                            <a href="#" className="link link-primary link-hover text-sm font-medium">
                                Quên mật khẩu?
                            </a>
                        </div>

                        {/* Nút Đăng nhập */}
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className={`btn btn-primary w-full ${isSubmitting ? 'loading' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Đang xử lý...' : 'Đăng Nhập'}
                            </button>
                        </div>
                    </form>

                    {/* Divider & Đăng ký */}
                    <div className="divider text-xs text-base-content/50 my-6">HOẶC</div>

                    <p className="text-center text-sm text-base-content/80">
                        Chưa có tài khoản?{' '}
                        <Link href="/register" className="link link-primary font-semibold">
                            Đăng ký ngay
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
}