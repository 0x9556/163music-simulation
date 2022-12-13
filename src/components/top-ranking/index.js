import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { formatImageSize } from '../../utils/format'
import { TopRankingWrapper } from './style'
import { playSongAction, addPlaylistAction } from '../../store/actionCreators'
import { useDispatch } from 'react-redux'


const TopRanking = memo((props) => {

    const { info } = props
    const dispatch = useDispatch()

    return (
        info &&
        <TopRankingWrapper>
            <div className='header'>
                <div className='image'>
                    <img src={formatImageSize(info.coverImgUrl, 100)} alt="" />
                    <Link className='image_cover' to={""}></Link>
                </div>

                <div className='info'>
                    <Link>{info.name}</Link>
                    <div>
                        <div className='btn play sprite_02'> </div>
                        <div className='btn favor sprite_02'></div>
                    </div>

                </div>
            </div>
            <div className='list'>
                {
                    info.tracks.map((item, index) =>
                        <div className='list-item' key={item.id}>
                            <div className='rank'>{index + 1} </div>
                            <div className='info'>
                                <Link className='name text-nowrap'>{item.name}</Link>
                                <div className='operate'>
                                    <button
                                        className='btn sprite_02 play'
                                        onClick={() => { dispatch(playSongAction(item.id)) }}
                                    ></button>
                                    <button
                                        className='btn sprite_icon2 addto'
                                        onClick={() => { dispatch(addPlaylistAction(item.id)) }}
                                    ></button>
                                    <button className='btn sprite_02 favor'></button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='footer'>
                <Link to={""}>{"More>"}</Link>
            </div>
        </TopRankingWrapper>

    )
})

export default TopRanking