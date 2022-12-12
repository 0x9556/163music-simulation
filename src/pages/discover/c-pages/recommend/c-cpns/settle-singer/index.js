import React, { memo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { formatImageSize } from '../../../../../../utils/format'
import { getSettleSingerAction } from '../../store'
import { SettleSingerWrapper } from './style'


const SettleSinger = memo(() => {

    const { settleSinger } = useSelector(state => state.recommend, shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSettleSingerAction({
            cat: 5001,
            limit: 5
        }))
    }, [dispatch])
    return (
        settleSinger &&
        <SettleSingerWrapper>
            <div className='top'>
                <h3>Settle Singer</h3>
                <div>{"more >"}</div>
            </div>
            <div className='list'>
                {
                    settleSinger.map(item =>
                        <Link className='item' key={item.id}>
                            <div className='head'>
                                <img src={formatImageSize(item.picUrl, 80)} alt="" />
                            </div>

                            <div className='info'>
                                <h4>
                                    {item.name}
                                </h4>
                            </div>
                        </Link>
                    )
                }
            </div>
        </SettleSingerWrapper>
    )
})

export default SettleSinger