import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { showTargetSongInfoAction, changeTargetSong } from './store'
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
    } else {
      dispatch(changeTargetSong(currentSong))
    }

  }, [currentId, currentSong, dispatch])

  const lyricContent = targetSong.lyric ? targetSong.lyric.contentArr : ""

  return (

    <PlayerWrapper >
      <DiscoverHeader />
      <Content className='wrap-v2'>
        <PlayerLeft>

        </PlayerLeft>
        <PlayerRight></PlayerRight>
      </Content>
    </PlayerWrapper>
  )
}
