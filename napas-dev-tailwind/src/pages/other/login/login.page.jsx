import {useForm} from "react-hook-form";
import {useState} from "react";
import {useToast} from "../../../contexts/toast.context.jsx";
import {useSetting} from "../../../contexts/setting.context.jsx";

export default function LoginPage() {
    const {
        register, handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm({defaultValues: {email: "", password: ""}});
    const [err, setErr] = useState(null);
    const {showToast} = useToast();
    const {toggleTheme} = useSetting();

    const onSubmit = (data) => {
        if (data.email !== 'thienph@epayjsc.com') {
            showToast({
                title: 'Đăng nhập thất bại',
                description: 'Tài khoản không tồn tại',
                type: 'error'
            });
            return setErr('Tài khoản không tồn tại');
        }
        if (data.password !== '123123a') {
            showToast({
                title: 'Đăng nhập thất bại',
                description: 'Mật khẩu không đúng',
                type: 'error'
            });
            return setErr('Mật khẩu không đúng');
        }
        showToast({
            title: 'Đăng nhập thành công',
        });
        setErr(null);
    }

    return (
        <div className={"flex justify-center items-center h-screen "}>
            <form onSubmit={handleSubmit(onSubmit)}
                  className={"w-[1/2] rounded-lg border border-border bg-card text-card-foreground shadow-sm mx-auto max-w-md px-7 py-7"}>
                <h1 className={" text-[22px] font-bold"}>Đăng nhập</h1>
                <p className={"text-muted-foreground text-[14px] mb-4"}>Nhập email và mật khẩu của bạn để truy cập vào
                    tài khoản</p>
                {err && <div className="text-red-500 text-sm font-medium text-left mb-2">{err}</div>}
                <div className="mb-3">
                    <label
                        className={` text-[14px] font-medium block mb-1 ${errors.email && 'text-red-500'}`}>
                        {errors.email?.message ?? `Nhập email hoặc tên đăng nhập`}</label>
                    <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        placeholder="m@example.com"
                        name="email" {...register('email', {
                        required: 'Vui lòng nhập tài khoản',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Vui lòng nhập email hợp lệ'
                        }
                    })}/>
                </div>
                <div className="mb-3">
                    <label
                        className={` text-[14px] font-medium block mb-1 ${errors.password && 'text-red-500'}`}>{errors.password?.message ?? `Mật khẩu`}</label>
                    <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        placeholder="Mật khẩu"
                        type="password"
                        name="email" {...register('password', {
                        required: 'Vui lòng nhập mật khẩu',
                        pattern: {
                            value: /^.{6,}$/,
                            message: 'Vui lòng nhập mật khẩu hợp lệ'
                        }
                    })}/>
                </div>
                <button
                    className="mb-5 cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                    disabled={isSubmitting}
                    type="submit">Đăng nhập
                </button>
                <div className="items-center pt-0 flex flex-col space-y-4">
                    <div className="text-center text-sm">Tôi chưa có tài khoản? <a
                        className="text-primary hover:underline" href="#"
                        onClick={_ => toggleTheme()}>Liên hệ</a></div>
                </div>
            </form>
        </div>
    )
}