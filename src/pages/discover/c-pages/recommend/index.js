import React from 'react'
import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import Ranking from './c-cpns/ranking'
import UserLogin from './c-cpns/user-login'
import HotAnchor from './c-cpns/hot-anchor'
import SettleSinger from './c-cpns/settle-singer'
import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'

const Reccomend = () => {
  return (
    <RecommendWrapper>
      <TopBanner />

      <Content className='wrap-v2'>

        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <Ranking />
        </RecommendLeft>

        <RecommendRight>
          <UserLogin />
          <HotAnchor />
          <SettleSinger />
        </RecommendRight>

      </Content>

    </RecommendWrapper>
  )
}

export default Reccomend