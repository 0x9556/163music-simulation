import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'

export default function Player() {

  const { currentSong, lyricIndex } = useSelector(state => state.player, shallowEqual)
  const lyricContent = currentSong.lyric.contentArr

  return (
    <h2>{lyricContent[lyricIndex]}</h2>
  )
}
