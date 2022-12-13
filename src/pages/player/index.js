import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { showTargetSongInfoAction } from './store'
import { formatImageSize } from '../../utils/format'
import DiscoverHeader from '../../components/discover-header'
import { PlayerWrapper, PlayerLeft, PlayerRight, Content } from './style'

export default function Player() {

  const { currentSong, targetSong, lyricIndex } = useSelector(state => state.player, shallowEqual)
  const dispatch = useDispatch()
  const [params] = useSearchParams()
  const currentId = params.get("id")

  useEffect(() => {
    if (currentId !== currentSong.id) {
      dispatch(showTargetSongInfoAction(currentId))
    }
  }, [currentId, currentSong, dispatch])

  const albumPicUrl = formatImageSize(targetSong.album.picUrl, 130)
  const lyricContent = targetSong.lyric ? targetSong.lyric.contentArr : ""

  return (

    <PlayerWrapper >
      <DiscoverHeader />
      <Content className='wrap-v2'>

        <PlayerLeft >
          <div className='image_cover'>
            <img src={albumPicUrl} alt="" />
          </div>

          <div className='content'>
            <div className='top'>
              <div className='title'>
                <div></div>
                <div></div>
              </div>
              <span className='singer'></span>
              <span className='album'></span>
              <span className='btn'></span>
            </div>
            <div className='lyric'>

            </div>
          </div>

        </PlayerLeft>

        <PlayerRight></PlayerRight>

      </Content>
    </PlayerWrapper>
  )
}
