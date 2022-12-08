import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import ThemeHeaderRCM from '../../../../../../components/theme-header-rcm'
import TopRanking from '../../../../../../components/top-ranking'
import { getToplistAction } from '../../../recommend/store'
import { RankingWrapper } from './style'

const UP = 19723756
const NEW = 3779629
const ORIGIN = 2884035


const Ranking = memo(() => {

    const toplist = useSelector(state => state.recommend.toplist, shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getToplistAction(UP))
        dispatch(getToplistAction(NEW))
        dispatch(getToplistAction(ORIGIN))
    }, [dispatch])

    return (
        <RankingWrapper>
            <ThemeHeaderRCM title="Ranking" />

            <div className='top'>
                <TopRanking info={toplist[UP]} />
                <TopRanking info={toplist[NEW]} />
                <TopRanking info={toplist[ORIGIN]} />
            </div>

        </RankingWrapper>
    )
})

export default Ranking