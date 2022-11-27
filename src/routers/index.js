import React from 'react'
import { createBrowserRouter } from "react-router-dom"

import Root from '../pages/root'
import My from '../pages/my'
import Discover from '../pages/discover'
import Friends from '../pages/friends'
import Download from '../pages/download'



export const config = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Discover />
            },
            {
                path: "discover",
                element: <Discover />,
            },
            {
                path: "my",
                element: <My />
            },
            {
                path: "friends",
                element: <Friends />
            },
            {
                path: "download",
                element: <Download />
            }
        ]
    }
]

const router = createBrowserRouter(config)



export default router

