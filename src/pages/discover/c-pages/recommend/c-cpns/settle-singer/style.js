import styled from 'styled-components'

export const SettleSingerWrapper = styled.div`
    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 23px;
        border-bottom: 1px solid #ccc;
        margin: 0 20px;
        margin-top: 15px;
        padding-top: 5px;
        h3{
            font-size: 12px;
        }
    }

    .list{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 6px 20px 14px 20px;
    }
    .item{
        display: flex;
        width: 210px;
        height: 62px;
        background-color: #fafafa;
        margin-top: 14px;

        .head{
            img{
                width: 62px;
                height: 62px;
            }
        }
        .info{
            width: 148px;
            height: 62px;
            padding-left: 14px;
            border: 1px solid #e9e9e9;
            border-left: none;
            h4{
                padding-top:25px;
                font-size: 14px;
            }
        }
    }
`