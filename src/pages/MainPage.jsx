import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const items = [
    { id: 1, name: "Item 20", date: new Date('2023-07-20') },
    { id: 2, name: "Item 22", date: new Date('2023-07-22') },
    { id: 3, name: "Item 21", date: new Date('2023-07-21') },
    { id: 4, name: "Item 23", date: new Date('2023-07-23') }
];
const StyledDiv = styled.div`
    display: flex;
    flex-direction : column;
    overflow-y: auto;
`;
const StyledWrap = styled.div`
    display: flex;
    margin : 5% 5% 0 5%;
`
const StyledLR = styled.div`
    flex : 1;
    display: flex;
    flex-direction : column;
    margin : 10px;
    align-items : ${(props)=>props.align || 'flex-start'};
    img{
        height : 250px;
        width : 400px;
        border: 1px solid black;;
        margin : 10px;
        object-fit: cover;
        border-radius:30px;
    }
    hr{
    width : 90%;
    border : 0.5px solid #486284;
    margin : 10px 0;

    }
`
const StyledP = styled.p`
    color: #486284;
    font-size: ${(props)=>props.size || '18px'};
    color : ${(props)=> props.color || '#486284'};
    font-weight : ${(props)=>props.weight || 'normal'};
    margin : ${(props) => props.margin || '0'};
`
const StyledList = styled.div`
    display : flex;
    flex-direction : column;
    width : 100%;
    button{
        margin : 5px;
        width : 85%;
        height : 40px;
        text-align: left;
        font-size: 18px;
        color: #486284;
        background : none;
        border : none;
        cursor : pointer;
    }
`
const StyledBottom = styled.div`
    display : flex;
    background : #EFF2F6;
    width : 100%;
    flex-direction : row;
`


function MainPage() {
    //메인페이지 이미지(데이터베이스에서 가져오나요?)
    const [imgSrc, setImgSrc]=useState('./logo192.png');

    const sortedItems = [...items].sort((a, b) => b.date - a.date).slice(0, 3);

    return (
        <>
        <StyledDiv>
            <StyledWrap>
                <StyledLR>
                    <StyledP size = "25px" weight = "bold">전북대학교 중앙동아리</StyledP>
                    <StyledP color = "grey">JBNU Conductive Personal computer User Club</StyledP>
                    <StyledP size = "60px" weight = "bold" margin = "10px 0">CPU</StyledP>
                    <StyledP>소개글</StyledP>
                </StyledLR>
                <StyledLR align = "center">
                    <img src={imgSrc} alt="Logo"></img>
                </StyledLR>
            </StyledWrap>
            
            <StyledWrap>
                <StyledLR>
                    <StyledP size = "22px" margin = "0 5px">공지사항</StyledP>
                    <hr/>
                    <StyledList>
                        {sortedItems.length > 0 ? (
                            sortedItems.map(item => (
                                <button key={item.id}>[공지] {item.name}</button>
                            ))
                        ) : (
                            <StyledP>공지사항이 없습니다.</StyledP>
                        )}
                    </StyledList>
                    <hr/>

                </StyledLR>
                <StyledLR>
                    <StyledP size = "22px" margin = "0 5px">게시판</StyledP>
                    <hr/>
                    <StyledList>
                        {sortedItems.length > 0 ? (
                            sortedItems.map(item => (
                                <button key={item.id}>{item.name}</button>
                            ))
                        ) : (
                            <StyledP>게시글이 없습니다.</StyledP>
                        )}
                    </StyledList>
                    <hr/>
                </StyledLR>
            </StyledWrap>
            <StyledWrap>
                <StyledBottom>
                <img src={imgSrc} alt="Logo"></img>
                <img src={imgSrc} alt="Logo"></img>
                <img src={imgSrc} alt="Logo"></img>
                </StyledBottom>
            </StyledWrap>
            
            
        </StyledDiv>
        </>
    );
  }
  
  export default MainPage;
  