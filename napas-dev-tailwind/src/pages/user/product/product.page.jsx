import {useEffect, useState} from "react";
import ProductCard from "./product-card.comp.jsx";
import NavProduct from "./nav-product.comp.jsx";

const productData = [
    {
        type: 'dpp',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                   className="lucide lucide-credit-card h-6 w-6 text-primary">
            <rect width={20} height={14} x={2} y={5} rx={2}/>
            <line x1={2} x2={22} y1={10} y2={10}/>
        </svg>,
        news: 'Mới',
        title: 'Digital Payment Platform',
        description: 'Thanh toán, chuyển khoản, giao dịch, an toàn, thời gian thực.',
        lines: `Thanh toán bằng thẻ/tài khoản
Thanh toán/nạp tiền bằng token thẻ/token tài khoản
Thanh toán bằng mã VietQRPay
Thanh toán bằng ứng dụng của Ngân hàng/Trung gian thanh toán
Thanh toán bằng ApplePay
Giải pháp xác thực 3DS`.split('\n'),
        totalApis: 44,
        link: '/product/dpp'
    },
    {
        type: 'dpp',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                   className="lucide lucide-scan-qr-code h-6 w-6 text-primary">
            <path d="M17 12v4a1 1 0 0 1-1 1h-4"/>
            <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
            <path d="M17 8V7"/>
            <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
            <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
            <path d="M7 17h.01"/>
            <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
            <rect x={7} y={7} width={5} height={5} rx={1}/>
        </svg>,
        news: 'Mới',
        title: 'CPQR (VietQRMe)',
        description: 'CPQR (Consumer Presented QR) là dịch vụ thanh toán bằng mã QR trong đó khách...',
        lines: `Tạo QR từ đa dạng nguồn tiền
Hỗ trợ thanh toán nhanh và linh hoạt
Trải nghiệm người dùng tối ưu
Khả năng mở rộng và liên thông quốc tế
An toàn và tuân thủ tiêu chuẩn`.split('\n'),
        totalApis: 12,
        link: '/product/cpqr'
    },
    {
        type: 'dpp',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height={24} viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="{2}" strokeLinecap="round" strokeLinejoin="round"
                   className="lucide lucide-scan-qr-code h-6 w-6 text-primary">
            <path d="M17 12v4a1 1 0 0 1-1 1h-4"/>
            <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
            <path d="M17 8V7"/>
            <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
            <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
            <path d="M7 17h.01"/>
            <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
            <rect x="7" y={7} width={5} height="5" rx="1"/>
        </svg>
        ,
        news: 'Mới',
        title: 'CPQR Global',
        description: 'CPQR (Consumer Presented QR) là dịch vụ thanh toán bằng mã QR trong đó khách',
        lines: `Tạo QR từ đa dạng nguồn tiền
Hỗ trợ thanh toán nhanh và linh hoạt
Trải nghiệm người dùng tối ưu
Khả năng mở rộng và liên thông quốc tế
An toàn và tuân thủ tiêu chuẩn`.split('\n'),
        totalApis: 12,
        link: '/product/cpqr-global'
    },
]

export default function ProductPage() {

    const [type, setType] = useState(null);
    const [list, setList] = useState(productData);
    const [listSearch, setListSearch] = useState(productData);

    useEffect(() => {
        setList(productData.filter(p => p.type === type || !type));
        setListSearch(productData.filter(p => p.type === type || !type));
    }, [type]);

    function onSearch(txt) {
        if (!txt) {
            return setList(listSearch);
        }
        txt = txt.toLowerCase();
        const find = list.filter(p =>
            p.title.toLowerCase().indexOf(txt) !== -1
            || p.description.toLowerCase().indexOf(txt) !== -1
            || p.lines.filter(l => l.toLowerCase().indexOf(txt) !== -1).length);
        setList(find);
    }

    return <div className="flex-1 container max-lg:max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <main className="w-full bg-background">
            <div className="flex overflow-hidden flex-col lg:flex-row">
                <div className="w-60 lg:border-r lg:border-border flex flex-col bg-sidebar max-lg:w-full max-xs:h-max">
                    <div className="p-4 lg:border-b lg:border-border max-lg:flex max-lg:gap-2">
                        <button
                            className="lg:hidden px-3 py-2 rounded-lg text-foreground hover:bg-muted border border-border transition-colors flex items-center"
                            aria-label="Toggle Table of Contents">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-menu h-4 w-4">
                                <line x1={4} x2={20} y1={12} y2={12}/>
                                <line x1={4} x2={20} y1={6} y2={6}/>
                                <line x1={4} x2={20} y1={18} y2={18}/>
                            </svg>
                        </button>
                        <div className="relative max-lg:w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground">
                                <circle cx={11} cy={11} r={8}/>
                                <path d="m21 21-4.3-4.3"/>
                            </svg>
                            <input placeholder="Tìm kiếm sản phẩm..."
                                   className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-sm"
                                   type="text" onKeyUp={(e) => onSearch(e.target.value)}/></div>
                    </div>
                    <NavProduct navType={type} setNavType={setType}/>
                </div>
                <div className="p-4 h-max">
                    <div className="w-full">
                        <div className={"grid gap-4 md:grid-cols-2 lg:grid-cols-2"}>
                            {list.map((l, i) => (<ProductCard {...l} key={i}></ProductCard>))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
        {/*$*/}{/*/$*/}</div>

}