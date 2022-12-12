import React from 'react'
import { Link } from 'react-router-dom'
import { UserLoginWrapper } from './style'
const UserLogin = () => {
  return (
    <UserLoginWrapper className='sprite_02'>
      <div className='note'>
        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      </div>

      <Link className='btn sprite_02'>Login</Link>

    </UserLoginWrapper>
  )
}

export default UserLogin