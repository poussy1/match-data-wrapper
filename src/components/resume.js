import React from 'react'
import styled from 'styled-components'
// https://www.flaticon.com/packs/football/3
import chelseaLogo from '../assets/chelsea.png'
import liverpoolLogo from '../assets/liverpool.png'
const MatchTitle = styled.p`
    font-size:20px;
    font-weight:bold;
    text-align:center;
    width:600px;
` 
const Time = styled.div`
    font-size:14px;
    font-weight:bold;
` 
const Aqcuisation = styled.div`
    font-size:14px;
    font-weight:bold;
` 
const Score = styled.div`
    font-size:14px;
    font-weight:bold;
` 
const Col = styled.div`
    justify-content:space-between;
    width:200px;
    text-align:center;
    line-height:30px;
`
const Row = styled.div`
    display:flex;
    flex-dirextion:row;
    justify-content:space-between;
    margin-top:40px;
`
function Resume(){
    return (<div style={{marginTop:"50px"}}><MatchTitle>Chelsea vs Liverpool</MatchTitle>
        <Row>
            <Col>
                <img width="30" height="30" src={chelseaLogo} alt="Logo" /> 
                <Score>1</Score>
                <Aqcuisation>70%</Aqcuisation>
            </Col>
            <Col>
                <Time>15:30</Time>
            </Col>
            <Col>
                <img width="32" height="32" src={liverpoolLogo} alt="Logo" />
                <Score>0</Score> 
                <Aqcuisation>30% </Aqcuisation>
            </Col> 
        </Row>
        
    </div>)
}
export default Resume;
