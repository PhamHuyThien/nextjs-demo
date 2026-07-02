'use client';

import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {Eye, EyeOff, Lock, Mail, ShieldCheck, User} from 'lucide-react';
import toast from 'react-hot-toast';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {useApp} from "@/app/(clients)/_providers/app-provider";
import * as AuthAction from "@/app/_actions/auth-action";

// 1. Định nghĩa Schema Validate bằng Zod cho Đăng Ký
const registerSchema = z.object({
    fullName: z.string().min(2, {message: "Họ và tên phải có ít nhất 2 ký tự"}),
    email: z.string().min(1, {message: "Email không được để trống"}).email({message: "Email không đúng định dạng"}),
    password: z.string().min(6, {message: "Mật khẩu phải có ít nhất 6 ký tự"}),
    confirmPassword: z.string().min(1, {message: "Vui lòng xác nhận lại mật khẩu"}),
    agreeTerms: z.literal(true, {
        errorMap: () => ({message: "Bạn phải đồng ý với điều khoản sử dụng"}),
    }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không trùng khớp",
    path: ["confirmPassword"], // Báo lỗi chính xác tại ô nhập confirmPassword
});

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const router = useRouter();
    const {showLoading, hideLoading} = useApp();

    // 2. Khởi tạo react-hook-form
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            agreeTerms: false,
        },
    });

    // 3. Hàm xử lý khi Đăng ký thành công
    const onSubmit = async (data) => {
        showLoading();
        try {
            let response = await AuthAction.register(data.email, data.password, data.fullName, data.agreeTerms);
            if (response.code !== 200) {
                return toast.error(response.message);
            }
            toast.success('Đăng ký tài khoản thành công!');
            router.push('/login');
        } catch (error) {
            toast.error('Có lỗi xảy ra, vui lòng thử lại!');
        } finally {
            hideLoading();
        }
    };

    return (
        <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300 mx-auto">
            <div className="card-body">

                {/* Header */}
                <div className="text-center mb-4">
                    <h2 className="card-title text-3xl font-bold justify-center text-primary mb-2">
                        Tạo Tài Khoản
                    </h2>
                    <p className="text-sm text-base-content/70">
                        Đăng ký nhanh chóng để trải nghiệm dịch vụ
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    {/* Họ và tên */}
                    <div className="form-control">
                        <label className="label"><span className="label-text font-medium">Họ và tên</span></label>
                        <div
                            className="input input-bordered flex items-center gap-2 relative focus-within:border-primary">
                            <User className="w-5 h-5 opacity-50"/>
                            <input type="text" placeholder="Nguyễn Văn A" className="grow" {...register('fullName')} />
                        </div>
                        {errors.fullName && (
                            <label className="label py-0.5"><span
                                className="label-text-alt text-error font-medium">{errors.fullName.message}</span></label>
                        )}
                    </div>

                    {/* Email */}
                    <div className="form-control">
                        <label className="label"><span className="label-text font-medium">Địa chỉ Email</span></label>
                        <div
                            className="input input-bordered flex items-center gap-2 relative focus-within:border-primary">
                            <Mail className="w-5 h-5 opacity-50"/>
                            <input type="text" placeholder="name@example.com" className="grow" {...register('email')} />
                        </div>
                        {errors.email && (
                            <label className="label py-0.5"><span
                                className="label-text-alt text-error font-medium">{errors.email.message}</span></label>
                        )}
                    </div>

                    {/* Mật khẩu */}
                    <div className="form-control">
                        <label className="label"><span className="label-text font-medium">Mật khẩu</span></label>
                        <div
                            className="input input-bordered flex items-center gap-2 relative focus-within:border-primary">
                            <Lock className="w-5 h-5 opacity-50"/>
                            <input type={showPassword ? "text" : "password"} placeholder="••••••••"
                                   className="grow" {...register('password')} />
                            <button type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-ghost btn-xs btn-circle"
                                    onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <EyeOff className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
                            </button>
                        </div>
                        {errors.password && (
                            <label className="label py-0.5"><span
                                className="label-text-alt text-error font-medium">{errors.password.message}</span></label>
                        )}
                    </div>

                    {/* Nhập lại mật khẩu */}
                    <div className="form-control">
                        <label className="label"><span
                            className="label-text font-medium">Xác nhận mật khẩu</span></label>
                        <div
                            className="input input-bordered flex items-center gap-2 relative focus-within:border-primary">
                            <ShieldCheck className="w-5 h-5 opacity-50"/>
                            <input type={showConfirmPassword ? "text" : "password"} placeholder="••••••••"
                                   className="grow" {...register('confirmPassword')} />
                            <button type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-ghost btn-xs btn-circle"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ? <EyeOff className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <label className="label py-0.5"><span
                                className="label-text-alt text-error font-medium">{errors.confirmPassword.message}</span></label>
                        )}
                    </div>

                    {/* Điều khoản sử dụng */}
                    <div className="form-control pt-2">
                        <label className="label cursor-pointer justify-start gap-2 align-top">
                            <input type="checkbox"
                                   className="checkbox checkbox-primary checkbox-sm rounded mt-0.5" {...register('agreeTerms')} />
                            <span className="label-text text-sm select-none">
                Tôi đồng ý với <a href="#" className="link link-primary link-hover">Điều khoản dịch vụ</a> và <a
                                href="#" className="link link-primary link-hover">Chính sách bảo mật</a>
              </span>
                        </label>
                        {errors.agreeTerms && (
                            <label className="label py-0.5"><span
                                className="label-text-alt text-error font-medium">{errors.agreeTerms.message}</span></label>
                        )}
                    </div>

                    {/* Nút Đăng ký */}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                            {isSubmitting ? <span className="loading loading-spinner"></span> : 'Đăng Ký Đay'}
                        </button>
                    </div>
                </form>

                {/* Chuyển hướng sang Login */}
                <div className="divider text-xs text-base-content/50 my-4">HOẶC</div>
                <p className="text-center text-sm text-base-content/80">
                    Đã có tài khoản?{' '}
                    <Link href="/login" className="link link-primary font-semibold">
                        Đăng nhập ngay
                    </Link>
                </p>

            </div>
        </div>
    );
}