import { Outlet } from "react-router"
import Head from "../components/Nav/Head"
const Layout = () => {
    return (
        <>
            <Head/>
            <main className="">
                <Outlet/>
            </main>
        </>
    )
}

export default Layout