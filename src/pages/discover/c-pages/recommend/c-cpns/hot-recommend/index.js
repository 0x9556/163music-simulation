import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HotRecommendWrapper } from './style'
import { getHotRecommendAction } from '../../../../../discover/c-pages/recommend/store'
import ThemeHeaderRCM from '../../../../../../components/theme-header-rcm'
import ThemeCover from '../../../../../../components/theme-cover'

const HotRecommend = memo(() => {

    const { hotRecommend } = useSelector(state => state.recommend, shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHotRecommendAction())
    }, [dispatch])

    return (
        <HotRecommendWrapper>

            <ThemeHeaderRCM title="Hot-Recommend" keywords={["Mandopop", "Pop", "Rock", "Country", "Elec"]} />
            <div className='recommend-list' >
                {
                    hotRecommend.map(item =>
                        <div key={item.id}>
                            <ThemeCover info={item} />
                        </div>
                    )
                }
            </div>

        </HotRecommendWrapper>
    )
})

export default HotRecommend