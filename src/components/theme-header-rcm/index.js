import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { HeaderWrapper } from './style'


const ThemeHeaderRCM = memo((props) => {

    const { title, keywords } = props
    return (
        <HeaderWrapper className='sprite_02'>
            <div className='left'>
                <h3 className='title'>{title}</h3>
                {
                    props.keywords &&
                    <div className='keyword'>
                        {

                            keywords.map(item =>
                                <div className='item' key={item}>
                                    <Link >{item}</Link>
                                    <span className='divider'>|</span>
                                </div>
                            )
                        }
                    </div>
                }
            </div>
            <div className='right'>
                <Link>More</Link>
                <i className='icon sprite_02'></i>
            </div>
        </HeaderWrapper>
    )
})

export default ThemeHeaderRCM