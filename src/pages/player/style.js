import styled from 'styled-components';

export const PlayerWrapper = styled.div`

`

export const Content = styled.div`
  display: flex;
  background-color: #fff;
  
 
`

export const PlayerLeft = styled.div`
  display: flex;
  padding: 20px;
  width: 688px;
  border: 0px solid #d3d3d3;
  padding: 47px 30px 40px 39px;

  .image_cover{
    width: 198px;
    height: 198px;
    background-position: -144px -584px;

      img{
      width: 130px;
      height: 130px;
      margin: 34px;
    }
  }

  .content{
    display: flex;
    flex-direction: column;
  }

  .top{
    display: flex;
    flex-direction: column;
  }

  .lyric{

  }


`

export const PlayerRight = styled.div`
  width: 250px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  border-left: none;
`
