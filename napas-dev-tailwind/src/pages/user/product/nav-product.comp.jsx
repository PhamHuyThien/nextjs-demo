const btn = [
    {
        type: null,
        title: 'Tất cả'
    },
    {
        type: 'dpp',
        title: 'Digital Payment Platform'
    },
    {
        type: 'open-banking',
        title: 'Open banking',
    },
    {
        type: 'standard-2.0',
        title: 'Tiêu chuẩn kỹ thuật 2.0',
    },
    {
        type: 'vietqr-global',
        title: 'VietQR Global',
    },
    {
        type: 'other',
        title: 'Khác',
    }
];
const classActive = 'bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 scale-105';
const classNotActive = 'text-foreground hover:bg-secondary hover:text-secondary-foreground';

export default function NavProduct({navType, setNavType}) {
    function btnOnClick(btnType) {
        setNavType(btnType);
    }

    return <div className="w-60 flex-1 overflow-y-auto max-lg:hidden">
        <aside
            className="w-full bg-card lg:border-r lg:border-border overflow-y-auto overflow-x-hidden sticky top-0 p-4 h-max">
            <nav className="space-y-2">
                {
                    btn.map((b, i) => <button
                        onClick={() => btnOnClick(b.type)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 group cursor-pointer ${navType === b.type ? classActive : classNotActive}`}
                        title={b.title}
                        key={i}>
                        <span className="text-sm font-medium truncate">{b.title}</span>
                    </button>)
                }
            </nav>
        </aside>
    </div>
}