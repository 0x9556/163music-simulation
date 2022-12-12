import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useHref, useMatch, useParams, useResolvedPath,useSearchParams } from 'react-router-dom'

export default function Player() {

  const { currentSong, lyricIndex } = useSelector(state => state.player, shallowEqual)
  const lyricContent = currentSong.lyric.contentArr
  const [id,setid] =  useSearchParams()
  console.log(id)
  return (
    lyricContent &&
    <h2>{lyricContent[lyricIndex]}</h2>
  )
}
