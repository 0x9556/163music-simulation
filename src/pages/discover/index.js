import React, { memo, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { discoverLinks } from '../../common/local-data'
import { DiscoverWrapper, TopMenu } from './style'
import { getData } from './discoverSlice'
import { useDispatch, useSelector } from 'react-redux'




const Discover = memo(() => {

  const { banner } = useSelector(state => state.discover)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
    setTimeout(() => {
      console.log(banner)
    }, 5000);

  }, [])

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