import React, { memo } from 'react'

import {
    HeaderWrapper,
    HeaderWrapperLeft,
    HeaderWrapperRight
} from './style'
import { headerLinks } from '../../common/local-data'
import { NavLink, Outlet } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
const AppHeader = memo(() => {
    return (
        <>
            <HeaderWrapper>
                <div className='content wrap-v1'>

                    <HeaderWrapperLeft>
                        <a className="logo sprite_01" href="/">网易云音乐</a>
                        <div className='select-list'>
                            {
                                headerLinks.map(e => {
                                    return (
                                        <div key={e.title} className="select-item">
                                            <NavLink to={e.link}>
                                                {e.title}
                                                <i className='sprite_01 icon'></i>
                                            </NavLink>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </HeaderWrapperLeft>

                    <HeaderWrapperRight>
                        <Input placeholder='music/video/podcast' prefix={<SearchOutlined />} className="search" />
                        <div >Login</div>
                    </HeaderWrapperRight>

                </div>

                <div className='divider'></div>

            </HeaderWrapper>


            <div>
                <Outlet />
            </div>
        </>


    )
})

export default AppHeader