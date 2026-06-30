import { createContext, useContext, useState } from "react";
import { X, CheckCircle, AlertTriangle, CircleAlert } from "lucide-react";

const ToastContext = createContext();

const styles = {
    success: {
        className: "border-green-500 bg-green-500 text-white",
        icon: <CheckCircle className="w-5 h-5" />
    },
    error: {
        className: "border-red-500 bg-red-500 text-white",
        icon: <CircleAlert className="w-5 h-5" />
    },
    warning: {
        className: "border-yellow-500 bg-yellow-500 text-black",
        icon: <AlertTriangle className="w-5 h-5" />
    }
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const showToast = ({
                           title,
                           description,
                           type = "success",
                           duration = 3000
                       }) => {
        const id = Date.now();

        setToasts((prev) => [...prev, { id, title, description, type }]);

        setTimeout(() => {
            removeToast(id);
        }, duration);
    };

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}

            <ol className="fixed top-0 right-0 z-[100] flex max-h-screen w-full flex-col p-4 md:max-w-[420px] gap-3">
                {toasts.map((toast) => {
                    const style = styles[toast.type];

                    return (
                        <li
                            key={toast.id}
                            className={`relative flex w-full items-center justify-between rounded-md border p-4 shadow-lg animate-in slide-in-from-top-full ${style.className}`}
                        >
                            <div className="flex gap-3 items-start">
                                {style.icon}

                                <div>
                                    <div className="text-sm font-semibold">
                                        {toast.title}
                                    </div>
                                    <div className="text-sm opacity-90">
                                        {toast.description}
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => removeToast(toast.id)}
                                className="absolute right-2 top-2 p-1 opacity-70 hover:opacity-100"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </li>
                    );
                })}
            </ol>
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);