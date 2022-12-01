import React from 'react'
import { createBrowserRouter } from "react-router-dom"

import Root from '../pages/root'
import My from '../pages/my'
import Discover from '../pages/discover'
import Friends from '../pages/friends'
import Download from '../pages/download'
import Toplist from '../pages/discover/c-pages/toplist'
import Playlist from '../pages/discover/c-pages/playlist'
import Djradio from '../pages/discover/c-pages/djradio'
import Artist from '../pages/discover/c-pages/artist'
import Album from '../pages/discover/c-pages/album'
import Reccomend from '../pages/discover/c-pages/recommend'




export const config = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Discover />,

            },
            {
                path: "discover",
                element: <Discover />,

                children: [
                    {
                        index: true,
                        element: <Reccomend />
                    },
                    {
                        path: "toplist",
                        element: <Toplist />
                    },
                    {
                        path: "playlist",
                        element: <Playlist />
                    },
                    {
                        path: "djradio",
                        element: <Djradio />
                    },
                    {
                        path: "artist",
                        element: <Artist />
                    },
                    {
                        path: "toplist",
                        element: <Toplist />
                    },
                    {
                        path: "album",
                        element: <Album />
                    },


                ]
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

