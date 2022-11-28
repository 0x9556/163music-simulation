import React, { memo } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import request from '../../services/axios'
import { discoverLinks } from '../../common/local-data'
import {
  DiscoverWrapper,
  TopMenu
} from './style'

const Discover = memo(() => {
  return (

    <DiscoverWrapper>
      <div className="top">

        <TopMenu className='wrap-v1'>
          <div className='item'>
            {
              discoverLinks.map(e =>
                <NavLink
                  to={`/discover/${e.link}`}
                  key={e.title}
                >
                  {e.title}
                </NavLink>)
            }
          </div>
        </TopMenu>
        
      </div>

      <Outlet/>
    </DiscoverWrapper>

  )
})

export const loader = async () => {
  const data = await request({
      url:"/banner"
  })
  
  console.log(data)
}

export default Discover