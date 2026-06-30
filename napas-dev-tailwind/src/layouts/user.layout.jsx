import {Outlet} from 'react-router'
import UserHeaderComponent from "../components/user/header.comp.jsx";
import UserFooterComponent from "../components/user/footer.comp.jsx";

export default function UserLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            <UserHeaderComponent/>
            <main className="flex-1 container max-lg:max-w-7xl mx-auto px-6 lg:px-8 py-8">
                <Outlet />
            </main>
            <UserFooterComponent/>
        </div>
    )
}