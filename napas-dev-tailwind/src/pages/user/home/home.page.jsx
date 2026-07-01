import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const imageSlices = [
    "//developer.napas.com.vn/card.png",
    "//developer.napas.com.vn/transfer.png",
    "//developer.napas.com.vn/qr.png",
]

export default function HomePage() {
    return <div className="flex-1 container max-lg:max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-8 pb-16">
            <div className="fade-in-up">
                <div className="transition-all duration-700 ease-out opacity-100 translate-y-0"
                     style={{transitionDelay: '0ms'}}>
                    <section
                        className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background py-10 md:py-20 lg:py-30">
                        <div className="absolute inset-0 z-0 opacity-10">
                            <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark"/>
                        </div>
                        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"/>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"/>
                        <div className="container relative z-10 px-4 md:px-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="flex flex-col gap-6">
                                    <div
                                        className="inline-block w-fit rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">Cổng
                                        thông tin dành cho nhà phát triển
                                    </div>
                                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-balance">Cổng
                                        tích hợp sản phẩm Napas</h1><p
                                    className="max-w-[500px] text-lg md:text-xl text-muted-foreground leading-relaxed">Tăng
                                    cường khả năng vận hành doanh nghiệp của bạn.</p>
                                    <div className="flex flex-col gap-3 xs:flex-row pt-4">
                                        <button
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 btn-gradient rounded-full px-6 sm:px-8">Xem
                                            Sản Phẩm
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-arrow-right ml-2 h-5 w-5">
                                                <path d="M5 12h14"/>
                                                <path d="m12 5 7 7-7 7"/>
                                            </svg>
                                        </button>
                                        <button
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground h-11 rounded-full px-6 bg-transparent sm:px-8">Tiến
                                            hành tích hợp
                                        </button>
                                    </div>
                                </div>
                                <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden group">
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        navigation={{
                                            prevEl: '.custom-prev',
                                            nextEl: '.custom-next'
                                        }}
                                        pagination={{
                                            clickable: true,
                                            dynamicBullets: true // (Tùy chọn) Giúp các chấm thu nhỏ bớt nếu có quá nhiều ảnh
                                        }}
                                    >
                                        {imageSlices.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <img alt="Banking Dashboard 1" className="w-full h-full object-cover "
                                                     src={image}/>
                                            </SwiperSlide>
                                        ))}
                                        <button
                                            className="custom-prev inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-10 w-10 absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-chevron-left h-6 w-6">
                                                <path d="m15 18-6-6 6-6"/>
                                            </svg>
                                        </button>
                                        <button
                                            className="custom-next inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-10 w-10 absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-chevron-right h-6 w-6">
                                                <path d="m9 18 6-6-6-6"/>
                                            </svg>
                                        </button>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="gap-8 pt-5 border-t border-primary/10">
                                <div className="items-center text-center justify-center flex flex-col"><p
                                    className="text-3xl md:text-4xl font-bold text-primary ">Mạng lưới Tổ Chức Thành
                                    Viên của Napas</p><p className="text-sm text-muted-foreground mt-2">Công ty Cổ phần
                                    Thanh toán Quốc gia Việt Nam (NAPAS) đang quản trị và vận hành hệ thống chuyển mạch
                                    tài chính hơn 20.600 máy ATM, hơn 741.000 thiết bị chấp nhận thanh toán (POS/mPOS)
                                    phục vụ hơn 80 triệu khách hàng của 68 Tổ chức thành viên là ngân hàng và công ty
                                    tài chính.</p></div>
                                <div className="grid grid-cols-2 mt-20 md:grid-cols-3 gap-8 text-center">
                                    <div><p className="text-3xl md:text-4xl font-bold text-primary"><span
                                        className="transition-all ">68+</span></p><p
                                        className="text-sm text-muted-foreground mt-2">Ngân Hàng/ Công ty tài chính</p>
                                    </div>
                                    <div><p className="text-3xl md:text-4xl font-bold text-primary"><span
                                        className="transition-all ">40+</span></p><p
                                        className="text-sm text-muted-foreground mt-2">Đơn vị Trung gian thanh toán</p>
                                    </div>
                                    <div><p className="text-3xl md:text-4xl font-bold text-primary"><span
                                        className="transition-all ">200+</span></p><p
                                        className="text-sm text-muted-foreground mt-2">Thiết bị chấp nhận thanh toán
                                        (POS/mPOS)</p></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="fade-in-up">
                <div className="transition-all duration-700 ease-out opacity-100 translate-y-0"
                     style={{transitionDelay: '0ms'}}>
                    <section className="py-4 md:py-6 bg-muted/30">
                        <div className="container px-4 md:px-8">
                            <div className="space-y-4 mb-12 text-center">
                                <div className="inline-block">
                                    <div
                                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                             strokeLinecap="round" strokeLinejoin="round"
                                             className="lucide lucide-fire-extinguisher h-3 w-3 mr-1">
                                            <path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"/>
                                            <path d="M9 18h8"/>
                                            <path d="M18 3h-3"/>
                                            <path d="M11 3a6 6 0 0 0-6 6v11"/>
                                            <path d="M5 13h4"/>
                                            <path d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"/>
                                        </svg>
                                        Dịch vụ nổi bật
                                    </div>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Một kết nối. Mọi thanh
                                    toán</h2><p className="max-w-2xl mx-auto text-lg text-muted-foreground">Sứ mệnh của
                                chúng tôi là “Trở thành mạng lưới thanh toán bán lẻ đáng tin cậy nhất với Chính phủ,
                                Ngân hàng, Trung gian thanh toán, khách hàng và các đối tác thông qua hợp tác cùng mang
                                đến những sản phẩm thanh toán sáng tạo, dễ tiếp cận, dễ sử dụng và đáng tin cậy đối với
                                người dân Việt Nam”</p></div>
                            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                                <div
                                    className="rounded-lg text-card-foreground border-2 border-primary/10 bg-background shadow-sm hover:shadow-lg transition-shadow duration-200"
                                    id={1}>
                                    <div className="space-y-1.5 p-6 relative z-10 items-stretch pb-4 flex flex-col">
                                        <div className="flex items-start justify-between mb-4">
                                            <div
                                                className="rounded-sm bg-primary/5 group-hover:bg-primary/20 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                                     className="lucide lucide-id-card h-8 w-8 text-primary">
                                                    <path d="M16 10h2"/>
                                                    <path d="M16 14h2"/>
                                                    <path d="M6.17 15a3 3 0 0 1 5.66 0"/>
                                                    <circle cx={9} cy={11} r={2}/>
                                                    <rect x={2} y={5} width={20} height={14} rx={2}/>
                                                </svg>
                                            </div>
                                            <div
                                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-green-500/10 text-green-700 dark:text-green-400">Phổ
                                                biến
                                            </div>
                                        </div>
                                        <div
                                            className="tracking-tight mt-2 text-left text-lg md:text-xl font-semibold">Thẻ
                                            nội địa NAPAS
                                        </div>
                                        <div className="text-left text-sm text-muted-foreground mt-1">OAuth 2.0, MFA, và
                                            mã hóa dữ liệu
                                        </div>
                                    </div>
                                    <div className="p-6 pt-0"><p
                                        className="text-sm md:text-base text-muted-foreground leading-relaxed mt-2 justify-center text-justify">Thẻ
                                        nội địa NAPAS ( gọi tắt là Thẻ NAPAS) là thẻ thanh toán do các Ngân hàng và Công
                                        ty Tài chính Việt Nam phát hành, số thẻ được bắt đầu bằng mã tổ chức phát hành
                                        thẻ 9704 do Ngân hàng Nhà nước cấp.</p></div>
                                </div>
                                <div
                                    className="rounded-lg text-card-foreground border-2 border-primary/10 bg-background shadow-sm hover:shadow-lg transition-shadow duration-200"
                                    id={2}>
                                    <div className="space-y-1.5 p-6 relative z-10 items-stretch pb-4 flex flex-col">
                                        <div className="flex items-start justify-between mb-4">
                                            <div
                                                className="rounded-sm bg-primary/5 group-hover:bg-primary/20 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                                     className="lucide lucide-zap h-8 w-8 text-primary">
                                                    <path
                                                        d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
                                                </svg>
                                            </div>
                                            <div
                                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-green-500/10 text-green-700 dark:text-green-400">Phổ
                                                biến
                                            </div>
                                        </div>
                                        <div
                                            className="tracking-tight mt-2 text-left text-lg md:text-xl font-semibold">Chuyển
                                            tiền nhanh NAPAS 247
                                        </div>
                                        <div className="text-left text-sm text-muted-foreground mt-1"/>
                                    </div>
                                    <div className="p-6 pt-0"><p
                                        className="text-sm md:text-base text-muted-foreground leading-relaxed mt-2 justify-center text-justify">Dịch
                                        vụ Chuyển tiền nhanh NAPAS 247 là hạ tầng chuyển tiền thời gian thực do NAPAS
                                        cung cấp cho các Tổ chức thành viên (ngân hàng và tổ chức phi ngân hàng), cho
                                        phép khách hàng thực hiện giao dịch chuyển và nhận tiền tức thời 24/7, bao gồm
                                        cả ngày nghỉ, lễ, Tết.</p></div>
                                </div>
                                <div
                                    className="rounded-lg text-card-foreground border-2 border-primary/10 bg-background shadow-sm hover:shadow-lg transition-shadow duration-200"
                                    id={3}>
                                    <div className="space-y-1.5 p-6 relative z-10 items-stretch pb-4 flex flex-col">
                                        <div className="flex items-start justify-between mb-4">
                                            <div
                                                className="rounded-sm bg-primary/5 group-hover:bg-primary/20 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                                     className="lucide lucide-qr-code h-8 w-8 text-primary">
                                                    <rect width={5} height={5} x={3} y={3} rx={1}/>
                                                    <rect width={5} height={5} x={16} y={3} rx={1}/>
                                                    <rect width={5} height={5} x={3} y={16} rx={1}/>
                                                    <path d="M21 16h-3a2 2 0 0 0-2 2v3"/>
                                                    <path d="M21 21v.01"/>
                                                    <path d="M12 7v3a2 2 0 0 1-2 2H7"/>
                                                    <path d="M3 12h.01"/>
                                                    <path d="M12 3h.01"/>
                                                    <path d="M12 16v.01"/>
                                                    <path d="M16 12h1"/>
                                                    <path d="M21 12v.01"/>
                                                    <path d="M12 21v-1"/>
                                                </svg>
                                            </div>
                                            <div
                                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-green-500/10 text-green-700 dark:text-green-400">Phổ
                                                biến
                                            </div>
                                        </div>
                                        <div
                                            className="tracking-tight mt-2 text-left text-lg md:text-xl font-semibold">VietQRPay
                                        </div>
                                        <div className="text-left text-sm text-muted-foreground mt-1"/>
                                    </div>
                                    <div className="p-6 pt-0"><p
                                        className="text-sm md:text-base text-muted-foreground leading-relaxed mt-2 justify-center text-justify">Dịch
                                        vụ thanh toán VietQRPay là dịch vụ do NAPAS cung cấp cho các Tổ chức thành viên
                                        (ngân hàng và tổ chức phi ngân hàng), cho phép khách hàng thực hiện thanh toán
                                        nội địa bằng hình thức quét mã QR tại Đơn vị chấp nhận thanh toán (ĐVCNTT) thông
                                        qua ứng dụng thanh toán QR Code theo thời gian thực (real-time), đảm bảo nhanh
                                        chóng, an toàn và thuận tiện.</p></div>
                                </div>
                                <div
                                    className="rounded-lg text-card-foreground border-2 border-primary/10 bg-background shadow-sm hover:shadow-lg transition-shadow duration-200"
                                    id={4}>
                                    <div className="space-y-1.5 p-6 relative z-10 items-stretch pb-4 flex flex-col">
                                        <div className="flex items-start justify-between mb-4">
                                            <div
                                                className="rounded-sm bg-primary/5 group-hover:bg-primary/20 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                                     className="lucide lucide-qr-code h-8 w-8 text-primary">
                                                    <rect width={5} height={5} x={3} y={3} rx={1}/>
                                                    <rect width={5} height={5} x={16} y={3} rx={1}/>
                                                    <rect width={5} height={5} x={3} y={16} rx={1}/>
                                                    <path d="M21 16h-3a2 2 0 0 0-2 2v3"/>
                                                    <path d="M21 21v.01"/>
                                                    <path d="M12 7v3a2 2 0 0 1-2 2H7"/>
                                                    <path d="M3 12h.01"/>
                                                    <path d="M12 3h.01"/>
                                                    <path d="M12 16v.01"/>
                                                    <path d="M16 12h1"/>
                                                    <path d="M21 12v.01"/>
                                                    <path d="M12 21v-1"/>
                                                </svg>
                                            </div>
                                            <div
                                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-green-500/10 text-green-700 dark:text-green-400">Phổ
                                                biến
                                            </div>
                                        </div>
                                        <div
                                            className="tracking-tight mt-2 text-left text-lg md:text-xl font-semibold">Thanh
                                            Toán VietQRGlobal
                                        </div>
                                        <div className="text-left text-sm text-muted-foreground mt-1"/>
                                    </div>
                                    <div className="p-6 pt-0"><p
                                        className="text-sm md:text-base text-muted-foreground leading-relaxed mt-2 justify-center text-justify">Dịch
                                        vụ thanh toán VietQRGlobal là dịch vụ do NAPAS cung cấp cho các Tổ chức thành
                                        viên (ngân hàng và tổ chức phi ngân hàng), cho phép khách hàng thực hiện thanh
                                        toán xuyên biên giới bằng hình thức quét mã QR tại Đơn vị chấp nhận thanh toán
                                        (ĐVCNTT) thông qua ứng dụng thanh toán QR Code theo thời gian thực (real-time),
                                        đảm bảo nhanh chóng, an toàn và thuận tiện.</p></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="fade-in-up">
                <section id="products" className="py-4 md:py-6 lg:py-6 sm: scroll-mt-20">
                    <div className="container px-4 md:px-6" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                        <div className="transition-all duration-700 ease-out opacity-100 translate-y-0"
                             style={{transitionDelay: '0ms'}}>
                            <div className="space-y-4 mb-12 text-center">
                                <div className="inline-block">
                                    <div
                                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                             strokeLinecap="round" strokeLinejoin="round"
                                             className="lucide lucide-zap h-3 w-3 mr-1">
                                            <path
                                                d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
                                        </svg>
                                        Dịch vụ của chúng tôi
                                    </div>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Các API mạnh mẽ cho mọi
                                    trường hợp sử dụng</h2><p
                                className="max-w-2xl mx-auto text-lg text-muted-foreground">Lựa chọn từ bộ ngân hàng API
                                toàn diện của chúng tôi để xây dựng các ứng dụng tài chính sáng tạo.</p></div>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div className="transition-all duration-700 ease-out opacity-100 translate-y-0"
                                 style={{transitionDelay: '0ms'}}>
                                <div
                                    className="rounded-lg bg-card text-card-foreground shadow-sm h-full group relative overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl min-h-[340px] flex flex-col">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                    <div className="space-y-1.5 p-6 relative z-10 flex flex-col items-stretch">
                                        <div className="flex items-start justify-between mb-4">
                                            <div
                                                className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                                     className="lucide lucide-credit-card h-6 w-6 text-primary">
                                                    <rect width={20} height={14} x={2} y={5} rx={2}/>
                                                    <line x1={2} x2={22} y1={10} y2={10}/>
                                                </svg>
                                            </div>
                                            <div
                                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-green-500/10 text-green-700 dark:text-green-400">Mới
                                            </div>
                                        </div>
                                        <div className="font-semibold tracking-tight text-xl">Digital Payment Platform
                                        </div>
                                        <div className="text-sm text-muted-foreground line-clamp-2">Digital Payment
                                            Platform.
                                        </div>
                                    </div>
                                    <div
                                        className="p-6 pt-0 relative z-10 space-y-4 flex-1 flex flex-col justify-start">
                                        <ul className="space-y-2">
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">Thanh toán bằng thẻ/tài khoản</div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">Thanh toán/nạp tiền bằng token thẻ/token tài
                                                    khoản
                                                </div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">Thanh toán bằng mã VietQRPay</div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">Thanh toán bằng ứng dụng của Ngân hàng/Trung gian
                                                    thanh toán
                                                </div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">Thanh toán bằng ApplePay</div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">Giải pháp xác thực 3DS</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="items-center relative z-10 mt-auto p-4 pt-0 bg-background flex flex-col">
                                        <div className="flex items-center gap-2 w-full"><a
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full group/btn bg-primary/5 hover:bg-primary hover:text-white text-primary mt-4"
                                            href="/vi/product/introduce/digital-payment-platform">Tổng quan
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-arrow-right ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform">
                                                <path d="M5 12h14"/>
                                                <path d="m12 5 7 7-7 7"/>
                                            </svg>
                                        </a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="transition-all duration-700 ease-out opacity-100 translate-y-0"
                                 style={{transitionDelay: '100ms'}}>
                                <div
                                    className="rounded-lg bg-card text-card-foreground shadow-sm h-full group relative overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl min-h-[340px] flex flex-col">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                    <div className="space-y-1.5 p-6 relative z-10 flex flex-col items-stretch">
                                        <div className="flex items-start justify-between mb-4">
                                            <div
                                                className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                                     className="lucide lucide-users h-6 w-6 text-primary">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx={9} cy={7} r={4}/>
                                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                                </svg>
                                            </div>
                                            <div
                                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-green-500/10 text-green-700 dark:text-green-400">Mới
                                            </div>
                                        </div>
                                        <div className="font-semibold tracking-tight text-xl">Open Banking</div>
                                        <div className="text-sm text-muted-foreground line-clamp-2">Open Banking</div>
                                    </div>
                                    <div
                                        className="p-6 pt-0 relative z-10 space-y-4 flex-1 flex flex-col justify-start">
                                        <ul className="space-y-2">
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">Kết nối duy nhất, tiêu chuẩn thống nhất: Tối ưu
                                                    triển khai Open API với một kết nối, một chuẩn chung.
                                                </div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">Linh hoạt vai trò: Hỗ trợ đồng thời 02 vai trò
                                                    Data Provider (DP) và Third Party Provider (TPP).
                                                </div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">AIS – Truy vấn thông tin tài khoản: Cung cấp số
                                                    dư, chi tiết tài khoản, lịch sử giao dịch nhanh chóng, chính xác.
                                                </div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">PIS – Thanh toán tiện lợi: Khởi tạo giao dịch
                                                    chuyển tiền, truy vấn trạng thái và hủy giao dịch dễ dàng.
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="items-center relative z-10 mt-auto p-4 pt-0 bg-background flex flex-col">
                                        <div className="flex items-center gap-2 w-full"><a
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full group/btn bg-primary/5 hover:bg-primary hover:text-white text-primary mt-4"
                                            href="/vi/product/introduce/open-banking">Tổng quan
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-arrow-right ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform">
                                                <path d="M5 12h14"/>
                                                <path d="m12 5 7 7-7 7"/>
                                            </svg>
                                        </a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="transition-all duration-700 ease-out opacity-100 translate-y-0"
                                 style={{transitionDelay: '200ms'}}>
                                <div
                                    className="rounded-lg bg-card text-card-foreground shadow-sm h-full group relative overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl min-h-[340px] flex flex-col">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                    <div className="space-y-1.5 p-6 relative z-10 flex flex-col items-stretch">
                                        <div className="flex items-start justify-between mb-4">
                                            <div
                                                className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                                     className="lucide lucide-scan-qr-code h-6 w-6 text-primary">
                                                    <path d="M17 12v4a1 1 0 0 1-1 1h-4"/>
                                                    <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
                                                    <path d="M17 8V7"/>
                                                    <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
                                                    <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
                                                    <path d="M7 17h.01"/>
                                                    <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
                                                    <rect x={7} y={7} width={5} height={5} rx={1}/>
                                                </svg>
                                            </div>
                                            <div
                                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-green-500/10 text-green-700 dark:text-green-400">Mới
                                            </div>
                                        </div>
                                        <div className="font-semibold tracking-tight text-xl">VietQR Global VN Inbound
                                        </div>
                                        <div className="text-sm text-muted-foreground line-clamp-2">VietQR Global VN
                                            Inbound
                                        </div>
                                    </div>
                                    <div
                                        className="p-6 pt-0 relative z-10 space-y-4 flex-1 flex flex-col justify-start">
                                        <ul className="space-y-2">
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">Thông điệp tra cứu định dạng QR (QR Lookup).</div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">Thông điệp thanh toán.</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="items-center relative z-10 mt-auto p-4 pt-0 bg-background flex flex-col">
                                        <div className="flex items-center gap-2 w-full"><a
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full group/btn bg-primary/5 hover:bg-primary hover:text-white text-primary mt-4"
                                            href="/vi/product/introduce/vietqr-global">Tổng quan
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-arrow-right ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform">
                                                <path d="M5 12h14"/>
                                                <path d="m12 5 7 7-7 7"/>
                                            </svg>
                                        </a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="transition-all duration-700 ease-out opacity-100 translate-y-0"
                                 style={{transitionDelay: '300ms'}}>
                                <div
                                    className="rounded-lg bg-card text-card-foreground shadow-sm h-full group relative overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl min-h-[340px] flex flex-col">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                    <div className="space-y-1.5 p-6 relative z-10 flex flex-col items-stretch">
                                        <div className="flex items-start justify-between mb-4">
                                            <div
                                                className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                                     className="lucide lucide-scan-qr-code h-6 w-6 text-primary">
                                                    <path d="M17 12v4a1 1 0 0 1-1 1h-4"/>
                                                    <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
                                                    <path d="M17 8V7"/>
                                                    <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
                                                    <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
                                                    <path d="M7 17h.01"/>
                                                    <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
                                                    <rect x={7} y={7} width={5} height={5} rx={1}/>
                                                </svg>
                                            </div>
                                            <div
                                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-green-500/10 text-green-700 dark:text-green-400">Mới
                                            </div>
                                        </div>
                                        <div className="font-semibold tracking-tight text-xl">CPQR (VietQRMe)</div>
                                        <div className="text-sm text-muted-foreground line-clamp-2">CPQR (VietQRMe)
                                        </div>
                                    </div>
                                    <div
                                        className="p-6 pt-0 relative z-10 space-y-4 flex-1 flex flex-col justify-start">
                                        <ul className="space-y-2">
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">Tạo QR từ đa dạng nguồn tiền</div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">Hỗ trợ thanh toán nhanh và linh hoạt</div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">Trải nghiệm người dùng tối ưu</div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">Khả năng mở rộng và liên thông quốc tế</div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">An toàn và tuân thủ tiêu chuẩn</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="items-center relative z-10 mt-auto p-4 pt-0 bg-background flex flex-col">
                                        <div className="flex items-center gap-2 w-full"><a
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full group/btn bg-primary/5 hover:bg-primary hover:text-white text-primary mt-4"
                                            href="/vi/product/introduce/cpqr">Tổng quan
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-arrow-right ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform">
                                                <path d="M5 12h14"/>
                                                <path d="m12 5 7 7-7 7"/>
                                            </svg>
                                        </a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="transition-all duration-700 ease-out opacity-100 translate-y-0"
                                 style={{transitionDelay: '400ms'}}>
                                <div
                                    className="rounded-lg bg-card text-card-foreground shadow-sm h-full group relative overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl min-h-[340px] flex flex-col">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                    <div className="space-y-1.5 p-6 relative z-10 flex flex-col items-stretch">
                                        <div className="flex items-start justify-between mb-4">
                                            <div
                                                className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                                     className="lucide lucide-scan-qr-code h-6 w-6 text-primary">
                                                    <path d="M17 12v4a1 1 0 0 1-1 1h-4"/>
                                                    <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
                                                    <path d="M17 8V7"/>
                                                    <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
                                                    <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
                                                    <path d="M7 17h.01"/>
                                                    <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
                                                    <rect x={7} y={7} width={5} height={5} rx={1}/>
                                                </svg>
                                            </div>
                                            <div
                                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-green-500/10 text-green-700 dark:text-green-400">Mới
                                            </div>
                                        </div>
                                        <div className="font-semibold tracking-tight text-xl">CPQR Global</div>
                                        <div className="text-sm text-muted-foreground line-clamp-2">CPQR Global</div>
                                    </div>
                                    <div
                                        className="p-6 pt-0 relative z-10 space-y-4 flex-1 flex flex-col justify-start">
                                        <ul className="space-y-2">
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">Tạo QR từ đa dạng nguồn tiền</div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">Hỗ trợ thanh toán nhanh và linh hoạt</div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">Trải nghiệm người dùng tối ưu</div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">Khả năng mở rộng và liên thông quốc tế</div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">An toàn và tuân thủ tiêu chuẩn</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="items-center relative z-10 mt-auto p-4 pt-0 bg-background flex flex-col">
                                        <div className="flex items-center gap-2 w-full"><a
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full group/btn bg-primary/5 hover:bg-primary hover:text-white text-primary mt-4"
                                            href="/vi/product/introduce/cpqr-global">Tổng quan
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-arrow-right ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform">
                                                <path d="M5 12h14"/>
                                                <path d="m12 5 7 7-7 7"/>
                                            </svg>
                                        </a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="transition-all duration-700 ease-out opacity-100 translate-y-0"
                                 style={{transitionDelay: '500ms'}}>
                                <div
                                    className="rounded-lg bg-card text-card-foreground shadow-sm h-full group relative overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl min-h-[340px] flex flex-col">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                    <div className="space-y-1.5 p-6 relative z-10 flex flex-col items-stretch">
                                        <div className="flex items-start justify-between mb-4">
                                            <div
                                                className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                                     className="lucide lucide-scan-qr-code h-6 w-6 text-primary">
                                                    <path d="M17 12v4a1 1 0 0 1-1 1h-4"/>
                                                    <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
                                                    <path d="M17 8V7"/>
                                                    <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
                                                    <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
                                                    <path d="M7 17h.01"/>
                                                    <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
                                                    <rect x={7} y={7} width={5} height={5} rx={1}/>
                                                </svg>
                                            </div>
                                            <div
                                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-green-500/10 text-green-700 dark:text-green-400">Phổ
                                                biến
                                            </div>
                                        </div>
                                        <div className="font-semibold tracking-tight text-xl">Hệ thống tra soát online
                                            NAPAS
                                        </div>
                                        <div className="text-sm text-muted-foreground line-clamp-2">Hệ thống tra soát
                                            online NAPAS
                                        </div>
                                    </div>
                                    <div
                                        className="p-6 pt-0 relative z-10 space-y-4 flex-1 flex flex-col justify-start">
                                        <ul className="space-y-2">
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">1. GD Tra soát</div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">2. GD Hỗ trợ thu hồi</div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">3. GD Điều chỉnh nội dung</div>
                                            </li>
                                            <li className="relative text-sm text-muted-foreground flex items-start gap-2">
                                                <div
                                                    className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                                                <div className="ml-6">4. GD Thu hồi nợ</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="items-center relative z-10 mt-auto p-4 pt-0 bg-background flex flex-col">
                                        <div className="flex items-center gap-2 w-full"><a
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full group/btn bg-primary/5 hover:bg-primary hover:text-white text-primary mt-4"
                                            href="/vi/product/introduce/he-thong-tra-soat-online-napas">Tổng quan
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-arrow-right ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform">
                                                <path d="M5 12h14"/>
                                                <path d="m12 5 7 7-7 7"/>
                                            </svg>
                                        </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="transition-all duration-700 ease-out opacity-100 translate-y-0"
                             style={{transitionDelay: '0ms'}}>
                            <div className="space-y-4 mt-12 text-center"><a
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
                                href="/vi/product">Xem tất cả</a></div>
                        </div>
                    </div>
                </section>
            </div>
            <section id="getting-started" className="container px-4 md:px-6 mt-8"
                     style={{paddingLeft: '0px', paddingRight: '0px'}}>
                <div className="rounded-lg border text-card-foreground shadow-sm bg-primary/5 border-none">
                    <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4 py-8">
                        <div><h3 className="text-xl font-semibold mb-2">Sẵn sàng kết nối?</h3><p
                            className="text-muted-foreground">Tạo tài khoản và bắt đầu xây dựng với API của chúng tôi
                            ngay hôm nay.</p></div>
                        <div className="flex flex-row gap-3"><a
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
                            href="/vi/login">Đăng nhập</a><a
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
                            href="/vi/product">Đọc Tài liệu
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-external-link ml-2 h-4 w-4">
                                <path d="M15 3h6v6"/>
                                <path d="M10 14 21 3"/>
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            </svg>
                        </a></div>
                    </div>
                </div>
            </section>
        </div>
        {/*$*/}{/*/$*/}</div>

}

