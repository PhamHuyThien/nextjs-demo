import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {router} from "./routes.jsx";
import {RouterProvider} from "react-router";
import AppContext from "./contexts/app.context.jsx";
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppContext>
            <RouterProvider router={router}/>
        </AppContext>
    </StrictMode>,
)
