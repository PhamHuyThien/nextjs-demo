export default function UserFooterComponent() {
    return <footer className="border-t bg-background" id="footer">
        <div className="container py-8 md:py-12">
            <div className="flex items-center justify-start gap-3 text-left">
                <div className="flex-shrink-0"><a className="flex items-center gap-2" href="/"><img alt="Napas Logo"
                                                                                                    className="h-8 w-32 rounded-md"
                                                                                                    src="//developer.napas.com.vn/logo-napas.png"
                                                                                                    style={{objectFit: 'contain'}}/></a>
                </div>
                <div className="flex flex-col"><h2 className="text-2xl font-semibold">Công ty Cổ phần Thanh toán Quốc
                    gia Việt Nam - NAPAS</h2><p className="text-sm text-muted-foreground">National Payment Corporation
                    of Vietnam</p></div>
            </div>
            <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex flex-col"><h2 className="text-2xl font-semibold">Trụ sở chính</h2><p
                    className="text-sm text-muted-foreground leading-5 pt-1">Địa chỉ: Tầng 2, tầng 17 và tầng 18 tòa nhà
                    Pacific Place, 83B phố Lý Thường Kiệt, Cửa Nam, Hà Nội.</p><p
                    className="text-sm text-muted-foreground leading-5 pt-1">Tel: 024 3936 1818</p></div>
                <div className="flex flex-col"><h2 className="text-2xl font-semibold">VP đại diện miền Nam</h2><p
                    className="text-sm text-muted-foreground leading-5 pt-1">Địa chỉ: Lầu 9, Sài Gòn Tower, 29 Lê Duẩn,
                    Phường Sài Gòn, thành phố Hồ Chí Minh.</p><p
                    className="text-sm text-muted-foreground leading-5 pt-1">Tel: 0283 911 7155</p></div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-4 mr-5"><a
                        className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer"
                        aria-label="Facebook" href="https://www.facebook.com/NapasVietnam/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24"
                             fill="currentColor" aria-hidden="true">
                            <path
                                d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.03 5.66 21.13 10.44 21.98v-6.99H7.9v-2.92h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.84h2.74l-.44 2.92h-2.3v6.99C18.34 21.13 22 17.03 22 12.07z"/>
                        </svg>
                    </a><a className="text-muted-foreground hover:text-primary" target="_blank"
                           rel="noopener noreferrer" aria-label="YouTube"
                           href="https://www.youtube.com/channel/UCc5yR3KB47BSHkuNSzvl8dQ">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px"
                             viewBox="0 0 24 24" fill="currentColor" width={32} height={32}>
                            <g id="XMLID_184_">
                                <path
                                    d="M23.498,6.186c-0.276-1.039-1.089-1.858-2.122-2.136C19.505,3.546,12,3.546,12,3.546s-7.505,0-9.377,0.504   C1.591,4.328,0.778,5.146,0.502,6.186C0,8.07,0,12,0,12s0,3.93,0.502,5.814c0.276,1.039,1.089,1.858,2.122,2.136   C4.495,20.454,12,20.454,12,20.454s7.505,0,9.377-0.504c1.032-0.278,1.845-1.096,2.122-2.136C24,15.93,24,12,24,12   S24,8.07,23.498,6.186z M9.546,15.569V8.431L15.818,12L9.546,15.569z"/>
                            </g>
                        </svg>
                    </a></div>
                    <p className="text-xs text-muted-foreground leading-5 pt-1">© 2026 by Napas Corporation. All rights
                        reserved.</p></div>
            </div>
        </div>
    </footer>
}