import {useEffect, useRef, useState} from "react";
import {useSetting} from "../../contexts/setting.context.jsx";
import {Link, useNavigate} from "react-router";

export default function UserHeaderComponent() {
    const [openLang, setOpenLang] = useState(false);
    const refLang = useRef(null);

    const [openSidebar, setOpenSidebar] = useState(false);
    const refSidebar = useRef(null);

    const {toggleTheme} = useSetting();
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!refLang.current?.contains(e.target)) {
                setOpenLang(false);
            }
            if (!refSidebar.current?.contains(e.target)) {
                setOpenSidebar(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    return <header
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2 md:gap-6 min-w-0">
                <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden [&_svg]:size-6 cursor-pointer"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-_r_n_"
                    data-state="closed"
                    onClick={() => setOpenSidebar(!openSidebar)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-menu h-5 w-5"
                    >
                        <line x1={4} x2={20} y1={12} y2={12}/>
                        <line x1={4} x2={20} y1={6} y2={6}/>
                        <line x1={4} x2={20} y1={18} y2={18}/>
                    </svg>
                    <span className="sr-only">Chuyển đổi menu</span>
                </button>

                <Link className="hidden md:block" to="/">
                    <div className="flex items-center gap-2">
                        <img
                            alt="Napas Logo"
                            className="h-8 w-32 rounded-md"
                            src="//developer.napas.com.vn/logo-napas.png"
                            style={{objectFit: "contain"}}
                        />
                    </div>
                </Link>
            </div>
            <nav className="hidden md:flex flex-1 justify-center gap-6 text-sm min-w-0">
                <Link
                    className="transition-colors duration-200 relative text-foreground font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:w-full hover:after:w-full"
                    to="/"
                >
                    Trang Chủ
                </Link>
                <Link
                    className="font-medium transition-colors duration-200 relative text-foreground/60 hover:text-foreground/80 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:w-0 hover:after:w-full"
                    to="/product"
                >
                    Sản phẩm của Napas
                </Link>
                <a
                    className="font-medium transition-colors duration-200 relative text-foreground/60 hover:text-foreground/80 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:w-0 hover:after:w-full"
                    href="#"
                >
                    Liên hệ
                </a>
            </nav>
            <div className="flex items-center gap-2 justify-end min-w-0">
                <div className="relative" ref={refLang}>
                    <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 max-md:[&_svg]:size-6 cursor-pointer"
                        type="button"
                        id="radix-_r_q_"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                        onClick={() => setOpenLang(!openLang)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-globe h-[1.2rem] w-[1.2rem]"
                        >
                            <circle cx={12} cy={12} r={10}/>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                            <path d="M2 12h20"/>
                        </svg>
                        <span className="sr-only">Change language</span>

                    </button>
                    {openLang && <div dataradix-popper-content-wrapper dir="ltr" style={{
                        zIndex: 50,
                    }} className={`bg-primary-foreground absolute top-10 -left-25`}>
                        <div data-side="bottom" data-align="end" role="menu" aria-orientation="vertical"
                             data-state="open"
                             dataradix-menu-content dir="ltr" id="radix-_r_r_" aria-labelledby="radix-_r_q_"
                             className="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                             tabIndex={-1} data-orientation="vertical"
                             style={{
                                 outline: 'none',
                                 pointerEvents: 'auto'
                             }}>
                            <div role="menuitem"
                                 className="relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus:text-primary focus:bg-transparent focus:border-0 focus:outline-none focus:ring-0 cursor-pointer"
                                 tabIndex={-1} data-orientation="vertical" dataradix-collection-item>English
                            </div>
                            <div role="menuitem"
                                 className="relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary focus:text-primary focus:bg-transparent focus:border-0 focus:outline-none focus:ring-0 cursor-pointer"
                                 tabIndex={-1} data-orientation="vertical" dataradix-collection-item>Tiếng Việt
                            </div>
                        </div>
                    </div>}
                </div>

                <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 max-md:[&_svg]:size-6 cursor-pointer"
                    type="button"
                    id="radix-_r_s_"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                    onClick={toggleTheme}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-sun h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    >
                        <circle cx={12} cy={12} r={4}/>
                        <path d="M12 2v2"/>
                        <path d="M12 20v2"/>
                        <path d="m4.93 4.93 1.41 1.41"/>
                        <path d="m17.66 17.66 1.41 1.41"/>
                        <path d="M2 12h2"/>
                        <path d="M20 12h2"/>
                        <path d="m6.34 17.66-1.41 1.41"/>
                        <path d="m19.07 4.93-1.41 1.41"/>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-moon absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                    </svg>
                    <span className="sr-only">Toggle theme</span>
                </button>
                <div className="hidden md:flex items-center gap-2">
                    <Link
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
                        to="/login"
                    >
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </div>
        {openSidebar && <div data-state="open"
                             className="fixed inset-0 z-50 h-screen bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
                             style={{pointerEvents: 'auto'}} data-aria-hidden="true" aria-hidden="true"/>}

        {openSidebar && <div role="dialog" id="radix-_R_kmivb_" aria-describedby="radix-_R_kmivbH2_"
                             aria-labelledby="radix-_R_kmivbH1_" data-state="open"
                             className="h-screen fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 left-0 w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm pr-0"
                             tabIndex={-1} style={{pointerEvents: 'auto'}} ref={refSidebar}>
            <h2 id="radix-_R_kmivbH1_" className="text-lg font-semibold text-foreground hidden">mobile nav</h2>
            <div className="flex flex-col h-full">
                <div className="p-4 border-b"><Link to="/">
                    <div className="flex items-center gap-2"><img alt="Napas Logo"
                                                                  className="h-8 w-32 rounded-md"
                                                                  src="//developer.napas.com.vn/logo-napas.png"
                                                                  style={{objectFit: 'contain'}}/></div>
                </Link></div>
                <nav className="flex flex-col gap-1 p-4 flex-grow"><Link
                    className="font-semibold text-base transition-colors duration-200 p-2 rounded-md text-foreground hover:bg-muted"
                    to="/">Trang Chủ</Link><Link
                    className="font-semibold text-base transition-colors duration-200 p-2 rounded-md text-foreground hover:bg-muted"
                    to="/product">Sản phẩm của Napas</Link><a
                    className="font-semibold text-base transition-colors duration-200 p-2 rounded-md text-foreground hover:bg-muted"
                    href="#">Liên hệ</a>
                    <div data-orientation="horizontal" role="none"
                         className="shrink-0 bg-border h-[1px] w-full mt-2 mb-2"/>
                    <div className="flex flex-col py-1"><span
                        className="font-semibold text-sm mb-2 text-foreground/70">Ngôn ngữ</span>
                        <div className="flex items-center gap-2 w-full">
                            <button
                                className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full justify-center cursor-pointer">English
                            </button>
                            <button
                                className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 rounded-md px-3 w-full justify-center cursor-pointer">Tiếng
                                Việt
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col py-1"><span
                        className="font-semibold text-sm mb-2 text-foreground/70">Chủ đề</span>
                        <div className="flex flex-col gap-2">
                            <button
                                className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8 w-full justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                     strokeLinecap="round" strokeLinejoin="round"
                                     className="lucide lucide-sun h-4 w-4 mr-2">
                                    <circle cx={12} cy={12} r={4}/>
                                    <path d="M12 2v2"/>
                                    <path d="M12 20v2"/>
                                    <path d="m4.93 4.93 1.41 1.41"/>
                                    <path d="m17.66 17.66 1.41 1.41"/>
                                    <path d="M2 12h2"/>
                                    <path d="M20 12h2"/>
                                    <path d="m6.34 17.66-1.41 1.41"/>
                                    <path d="m19.07 4.93-1.41 1.41"/>
                                </svg>
                                Light
                            </button>
                            <button
                                className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 w-full justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                     strokeLinecap="round" strokeLinejoin="round"
                                     className="lucide lucide-moon h-4 w-4 mr-2">
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                                </svg>
                                Dark
                            </button>
                            <button
                                className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 w-full justify-start">System
                            </button>
                        </div>
                    </div>
                </nav>
                <div className="p-4 border-t">
                    <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full mb-2"
                        onClick={()=>navigate('/login')}
                    >Đăng nhập
                    </button>
                </div>
            </div>
            <button type="button"
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-x h-4 w-4">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                </svg>
                <span className="sr-only">Close</span></button>
        </div>}
    </header>
}