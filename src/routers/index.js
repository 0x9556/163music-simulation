import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import Root from '../pages/root'
import Home from '../pages/home'
import Discover from '../pages/discover'
import Reccomend from '../pages/discover/c-pages/recommend'
import Toplist from '../pages/discover/c-pages/toplist'
import Playlist from '../pages/discover/c-pages/playlist'
import Djradio from '../pages/discover/c-pages/djradio'
import Artist from '../pages/discover/c-pages/artist'
import Album from '../pages/discover/c-pages/album'
import My from '../pages/my'
import Friends from '../pages/friends'
import Download from '../pages/download'
import Player from '../pages/player'


export const config = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
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
            },
            {
                path: "song/",
                element: <Player />
            }
        ]
    }
]

const router = createBrowserRouter(config)


export default router

