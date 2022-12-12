import React from 'react'
import { Outlet } from 'react-router-dom'
import DiscoverHeader from '../../components/discover-header'
export default function Discover() {
    return (
        <>
            <DiscoverHeader />
            <Outlet />
        </>
    )
}
