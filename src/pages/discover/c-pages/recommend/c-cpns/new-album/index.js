import React, { memo } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd'
import { getNewAlbumsAction } from '../../store'

import ThemeHeaderRCM from '../../../../../../components/theme-header-rcm'
import ThemeCover from '../../../../../../components/theme-cover'
import { AlbumWrapper } from './style'

const NewAlbum = memo(() => {

    const { newAlbums } = useSelector(state => state.recommend)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewAlbumsAction())
    }, [dispatch])

    return (
        <AlbumWrapper>

            <ThemeHeaderRCM title="New-Album" />
            <div className='content'>
                <button className='arrow arrow-left sprite_02'></button>
                <div className='album'>
                    <Carousel >
                        {
                            [0, 1].map(page =>
                                <div key={page} className='page'>
                                    {
                                        newAlbums.slice(page*5).map(item =>
                                            <div key={item.id} >
                                                <ThemeCover info={item} />
                                            </div>
                                        )
                                    }
                                </div>
                            )

                        }
                    </Carousel>
                </div>

                <button className='arrow arrow-right sprite_02'></button>
            </div>

        </AlbumWrapper>
    )
})

export default NewAlbum