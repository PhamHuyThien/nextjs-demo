export default function LoginPage() {
    return (
        <div className={"flex justify-center items-center h-screen "}>
            <div
                className={"w-[1/2] rounded-lg border border-[var(--border)] bg-card text-card-foreground shadow-sm mx-auto max-w-md px-7 py-7"}>
                <h1 className={"text-[var(--text-h1)] text-[22px] font-bold"}>Đăng nhập</h1>
                <p className={"text-[var(--text-h2)] text-[14px] mb-4"}>Nhập email và mật khẩu của bạn để truy cập vào
                    tài khoản</p>
                <div className="mb-3">
                    <label className="text-[var(--text-h1)] text-[14px] font-medium block mb-1">Nhập email hoặc tên đăng
                        nhập</label>
                    <input
                        className="h-10 w-full border border-[var(--border)] rounded-sm px-3 text-[var(--text-h1)] text-[14px] focus-visible:border-[var(--border-focus)] focus-visible:border-[2px] focus:outline-none focus:ring-0"
                        placeholder="m@example.com"
                        aria-describedby="_r_a_-form-item-description _r_a_-form-item-message" aria-invalid="true"
                        name="email"/>
                </div>
                <div className="mb-3">
                    <label className="text-[var(--text-h1)] text-[14px] font-medium block mb-1">Mật khẩu</label>
                    <input
                        className="h-10 w-full border border-[var(--border)] rounded-sm px-3 text-[var(--text-h1)] text-[14px] focus-visible:border-[var(--border-focus)] focus-visible:border-[2px] focus:outline-none focus:ring-0"
                        placeholder="Mật khẩu"
                        name="email"/>
                </div>
                <button
                    className="mb-5 cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                    type="submit">Đăng nhập
                </button>
                <div className="items-center pt-0 flex flex-col space-y-4">
                    <div className="text-center text-sm">Tôi chưa có tài khoản? <a
                        className="text-primary hover:underline" href="#">Liên hệ</a></div>
                </div>
            </div>
        </div>
    )
}