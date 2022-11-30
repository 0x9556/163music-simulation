import React, { memo, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { discoverLinks } from '../../common/local-data'
import { DiscoverWrapper, TopMenu } from './style'
import { getTopBannerAction } from './store/discoverSlice'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'




const Discover = memo(() => {

  const { banners } = useSelector(state => state.discover,shallowEqual)
  const dispatch = useDispatch()
  

  useEffect(() => {

    dispatch(getTopBannerAction())

  }, [dispatch])

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

      <Outlet />
    </DiscoverWrapper>

  )
})

export const loader = async () => {


}

export default Discover