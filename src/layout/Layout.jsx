import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'

const Layout = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
            <footer>Pie de pagina</footer>
        </>
    )
}

export default Layout