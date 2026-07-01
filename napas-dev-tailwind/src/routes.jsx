import {createBrowserRouter} from 'react-router'

import UserLayout from './layouts/user.layout.jsx'
import AdminLayout from './layouts/admin.layout.jsx'

import HomePage from './pages/user/home/home.page.jsx'
import ProductPage from './pages/user/product/product.page.jsx'
import NotFoundPage from './pages/other/not-found/not-found.page.jsx'
import LoginPage from "./pages/other/login/login.page.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout/>,
        errorElement: <NotFoundPage/>, // Bắt lỗi cho toàn bộ phân hệ User
        children: [
            {
                index: true, // Đường dẫn là "/"
                element: <HomePage/>,
            },
            {
                path: 'product', // Đường dẫn là "/profile"
                element: <ProductPage />,
            },
        ],
    },
    //--------------------------------------------------------
    {
        path: '/admin',
        element: <AdminLayout/>,
        errorElement: <NotFoundPage/>, // Bắt lỗi riêng cho phân hệ Admin (nếu muốn giao diện lỗi kiểu Admin)
        children: [
            // {
            //     path: 'dashboard', // Đường dẫn đầy đủ: "/admin/dashboard"
            //     element: <AdminDashboard />,
            // },
            // // Children sâu hơn: Cụm quản lý sản phẩm nằm trong admin
            // {
            //     path: 'products', // Đường dẫn: "/admin/products"
            //     children: [
            //         {
            //             index: true, // Khớp chính xác "/admin/products"
            //             element: <ProductList />,
            //         },
            //         {
            //             path: 'create', // Đường dẫn đầy đủ: "/admin/products/create"
            //             element: <ProductCreate />,
            //         },
            //     ],
            // },
        ],
    },
    //--------------------------------------------------------
    {
        path: '/login',
        element: <LoginPage/>,
        errorElement: <NotFoundPage/>
    }
]);