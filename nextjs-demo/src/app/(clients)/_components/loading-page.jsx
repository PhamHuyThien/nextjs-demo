export default function LoadingPage() {
    return <div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm select-none pointer-events-auto">
        <div
            className="bg-base-100 p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-4 border border-base-300">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <p className="text-sm font-semibold text-base-content animate-pulse">
                Vui lòng đợi trong giây lát...
            </p>
        </div>
    </div>;
}