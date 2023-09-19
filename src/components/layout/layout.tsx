import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import {GlobalToast, Header} from "@/components";
import {useMeQuery} from "@/services/auth/auth.tsx";





export const Layout = () => {
    const { data } = useMeQuery()

    return (
        <>
            <Header data={data} />
            <GlobalToast />
            <Outlet />
        </>
    )
}
