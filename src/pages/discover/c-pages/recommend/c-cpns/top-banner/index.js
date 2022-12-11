import React, { memo, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd'
import { getTopBannerAction } from '../../store'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'


const TopBanner = memo(() => {

    const { banners } = useSelector(state => state.recommend, shallowEqual)
    const dispatch = useDispatch()
    const [currentIndex, setCurrentIndex] = useState(0)
    const bannerRef = useRef()
    const bgImage = banners[currentIndex] && banners[currentIndex].imageUrl + "?imageView&blur=40x20"

    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])

    const bannerChange = (from, to) => {
        setCurrentIndex(to)
    }

    return (
        <BannerWrapper bgImage={bgImage}>
            <div className='banner wrap-v2'>
                <BannerLeft>
                    <Carousel effect="fade" autoplay={true} ref={bannerRef} beforeChange={bannerChange}>
                        {
                            banners.map(item =>
                                <div className='banner-item' key={item.encodeId}>
                                    <img className='image' src={item.imageUrl} alt={item.typeTitle} />
                                </div>
                            )
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className='btn left' onClick={() => { bannerRef.current.prev() }}></button>
                    <button className='btn right' onClick={() => { bannerRef.current.next() }}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})

export default TopBanner