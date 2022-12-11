import React, { memo, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Slider } from 'antd'
import { changeSequence, switchSongAction, changeLyricIndex } from '../../store/actionCreators'
import { formatImageSize, formatTime, getPlaySongUrl } from '../../utils/format'
import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'


const PlayerBar = memo(() => {
    const { currentSong, sequence, playList, lyricIndex } = useSelector(state => state.player, shallowEqual)
    const dispatch = useDispatch()
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isPlaying, setPlayingStatus] = useState(false)
    const [isChangeing, setChangingStatus] = useState(false)
    const { id, name, artist, pic, duration, lyric } = currentSong
    const sliderRef = useRef()
    const audioRef = useRef()
    useEffect(() => {
        if (id) {
            audioRef.current.src = getPlaySongUrl(id)
            // playMusic()
        }
    }, [dispatch, id])

    const playMusic = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play()
        setPlayingStatus(!isPlaying)
    }
    const swichMusic = (tag) => {
        if (playList.length !== 0) {
            if (sequence !== 2)
                dispatch(switchSongAction(tag))
        }
    }
    const timeUpdate = e => {
        if (!isChangeing) {
            setCurrentTime(e.target.currentTime * 1000)
            setProgress(100 * currentTime / duration)
        }
        const timeArr = lyric.timeArr
        const currentLyricIndex = timeArr.findIndex(time => time > currentTime) - 1
        if (currentLyricIndex !== lyricIndex)
            dispatch(changeLyricIndex(currentLyricIndex))
    }

    const handleEnded = e => {
        if (sequence === 2) {
            audioRef.current.currentTime = 0
            audioRef.current.play()
        }
        swichMusic(1)
    }
    const sliderChange = value => {
        const currentTime = (value / 100) * (duration / 1000)
        setChangingStatus(true)
        setCurrentTime(currentTime * 1000)
        setProgress(value)
    }
    const sliderAfterChange = value => {
        const currentTime = (value / 100) * (duration / 1000)
        audioRef.current.currentTime = currentTime  //delay
        setCurrentTime(currentTime * 1000)
        setChangingStatus(false)
    }
    return (
        <PlaybarWrapper className='sprite_playbar'>
            <div className='content wrap-v2'>
                <Control isPlaying={isPlaying}>
                    <button
                        className='sprite_playbar prev'
                        onClick={() => { swichMusic(-1) }}
                    ></button>
                    <button
                        className='sprite_playbar play'
                        onClick={playMusic}
                    ></button>
                    <button
                        className='sprite_playbar next'
                        onClick={() => { swichMusic(1) }}
                    ></button>
                </Control>
                <PlayInfo>
                    <Link className='image' to={`song/${id}`}>
                        <img src={formatImageSize(pic, 34)} alt="" />
                    </Link>
                    <div className='info'>
                        <div className='song'>
                            <span>{name}</span>
                            <span className='singer-name'>{artist}</span>
                        </div>
                        <div className='progress'>
                            <Slider
                                defaultValue={0}
                                ref={sliderRef}
                                value={progress}
                                onAfterChange={sliderAfterChange}
                                onChange={sliderChange}
                            />
                            <div className='time'>
                                <span className='now-time'>{formatTime(currentTime)}</span>
                                <span className='divider'>/</span>
                                <span className='total-time'>{formatTime(duration)}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator sequence={sequence}>
                    <span className="left">
                        <button className="sprite_playbar btn favor"></button>
                        <button className="sprite_playbar btn share"></button>
                    </span>
                    <span className="right sprite_playbar">
                        <button className="sprite_playbar btn volume"></button>
                        <button className="sprite_playbar btn loop" onClick={() => dispatch(changeSequence())}></button>
                        <button className="sprite_playbar btn playlist"></button>
                    </span>
                </Operator>
            </div>
            <audio
                ref={audioRef}
                onTimeUpdate={timeUpdate}
                onEnded={handleEnded}
            />
        </PlaybarWrapper>
    )
})

export default PlayerBar