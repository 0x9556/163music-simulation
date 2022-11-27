import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
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
                <NavLink to={`/discover/${e.link}`}>
                  {e.title}
                </NavLink>)
            }
          </div>
        </TopMenu>
        
      </div>
    </DiscoverWrapper>

  )
})

export default Discover