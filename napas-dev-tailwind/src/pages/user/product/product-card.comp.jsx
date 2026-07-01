import {Link} from "react-router";
import {useEffect} from "react";

export default function ProductCard({
                                        icon = null,
                                        news = 'Mới',
                                        title,
                                        description,
                                        lines = [],
                                        totalApis = 0,
                                        link = "/"
                                    }) {

    return <div className="transition-all duration-700 ease-out opacity-100 translate-y-0"
                style={{transitionDelay: '0ms'}}>
        <div
            className="rounded-lg bg-card text-card-foreground shadow-sm h-full group relative overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl min-h-[380px] flex flex-col">
            <div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            <div className="space-y-1.5 p-6 relative z-10 flex flex-col items-stretch">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        {icon}
                    </div>
                    <div
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-green-500/10 text-green-700 dark:text-green-400">{news}
                    </div>
                </div>
                <div className="font-semibold tracking-tight text-xl">{title}</div>
                <div className="text-sm text-muted-foreground line-clamp-2">{description}
                </div>
            </div>
            <div className="p-6 pt-0 relative z-10 space-y-4 flex-1 flex flex-col justify-start">
                <ul className="space-y-2">
                    {lines.map((d, i) => <li className="relative text-sm text-muted-foreground flex items-start gap-2" key={i}>
                        <div className="absolute h-1.5 w-1.5 mt-1.5 rounded-full bg-primary/40"/>
                        <div className="ml-6">{d}</div>
                    </li>)}
                </ul>
            </div>
            <div className="items-center relative z-10 mt-auto p-4 pt-0 bg-background flex flex-col">
                <div className="flex items-center gap-2 w-full">
                    <div className="flex-1">
                        <div
                            className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-blue-500/10 text-primary dark:text-blue-400 py-2 px-4 mt-4">
                            <span className="mr-0.5">{totalApis}</span><span> APIs</span></div>
                    </div>
                    <Link
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 flex-1 w-full group/btn bg-primary/5 hover:bg-primary hover:text-white text-primary mt-4"
                        to={link}>Tổng quan
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-arrow-right h-4 w-4 group-hover/btn:translate-x-1 transition-transform">
                            <path d="M5 12h14"/>
                            <path d="m12 5 7 7-7 7"/>
                        </svg>
                    </Link></div>
            </div>
        </div>
    </div>
}