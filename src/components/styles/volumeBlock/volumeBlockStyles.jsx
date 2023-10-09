import styled from "styled-components";

export const VolumeBlock = styled.div`
width: auto;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0 92px 0 0;
`
export const VolumeContent = styled.div`
padding-left: max(1920px, 5%);
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
`

export const VolumeImg = styled.div`
width: 13px;
height: 18px;
margin-right: 17px;
`

export const VolumeSvg = styled.svg`
width: 13px;
height: 18px;
fill: transparent;
`

export const VolumeProgressLine = styled.div`
width: 109px;
height:18px;
margin-bottom: 10px;
`
export const VolumeProgressLineInput = styled.input`
width: 109px;
height:2px;
background: #797979;
`