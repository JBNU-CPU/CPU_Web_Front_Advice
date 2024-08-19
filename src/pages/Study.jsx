import styled from "styled-components";
import React, { useState, useEffect } from "react";
import logo from "../assets/CPU_logo.png";

const StyledDiv = styled.div`
    display : flex;
    align-items : center;
    flex-direction : column;
    .headerDiv{
        display : flex;
        justify-content : center;
        align-items : center;
        flex-direction : column;
        width : 100%;
        height : 200px;
        background-image: url(${logo});
        background-size: cover;
        background-position: center;
        
    }
    .headerDiv h1{
        margin : 10px;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
    }
    .headerDiv p{
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
    }
`;
const MainDiv = styled.div`
    display : flex;
    align-items : center;
    flex-direction : column;
    width : 100%;
    margin : 40px 0;
    h1{
        margin : 20px
    }
`
const ContentDiv = styled.div`
    display : flex;
    width : 80%;
    align-items : center;
    
    .contentLeft{
        display : flex;
        align-items:center;
        width : 70%;
        min-height : 50px;
        margin : 5px 0;
    }
    .contentRight{
        display : flex;
        align-items:center;
        width : 30%;
        min-height : 50px;
        margin : 5px 0;
    }
    p{
        font-size : 18px;
        font-weight : 300;
        color : white;
    }
    .items{
        display : flex;
        max-width : 90%;
        text-align : left;
        background-color : rgba(0,0,0,0);
        border: none;
        font-size : 18px;
        font-weight : normal;
        color : white;
        cursor : pointer;
    }

`
const LineB = styled.div`
    width : 90%;
    height : ${props => props.height || '0.5px'};
    background-color : rgba(255,255,255,0.3);
`

export default function Study(){

    return(
        <StyledDiv>
            <div className="headerDiv">
                <h1>CPU Study</h1>
                <p>기본스터디/자율스터디</p>
            </div>
            <MainDiv>
                <h1>기본 스터디</h1>
                <ContentDiv>
                    <div className="contentLeft">
                        <p style={{ fontWeight: 'normal' }}>제목</p>
                    </div>
                    <div className="contentRight">
                        <p style={{ fontWeight: 'normal' }}>스터디장</p>
                    </div>
                </ContentDiv>
                <LineB height='2px'/>
                <ContentDiv>
                    <div className="contentLeft">
                        <button className="items">
                            파이썬 스터디
                        </button>
                    </div>
                    <div className="contentRight">
                        <p>박도현</p>
                    </div>
                </ContentDiv>
                <LineB/>
                <ContentDiv>
                    <div className="contentLeft">
                        <button className="items">
                            C언어 스터디
                        </button>
                    </div>
                    <div className="contentRight">
                        <p>박도현</p>
                    </div>
                </ContentDiv>
                <LineB/>
            </MainDiv>
            <MainDiv>
                <h1>자율 스터디</h1>
                <ContentDiv>
                    <div className="contentLeft">
                        <p style={{ fontWeight: 'normal' }}>제목</p>
                    </div>
                    <div className="contentRight">
                        <p style={{ fontWeight: 'normal' }}>스터디장</p>
                    </div>
                </ContentDiv>
                <LineB height='2px'/>
                <ContentDiv>
                    <div className="contentLeft">
                        <button className="items">
                            Unity 게임 프로젝트
                        </button>
                    </div>
                    <div className="contentRight">
                        <p>박도현</p>
                    </div>
                </ContentDiv>
                <LineB/>
                <ContentDiv>
                    <div className="contentLeft">
                        <button className="items">
                            Unity 게임 프로젝트
                        </button>
                    </div>
                    <div className="contentRight">
                        <p>박도현</p>
                    </div>
                </ContentDiv>
                <LineB/>
                <ContentDiv>
                    <div className="contentLeft">
                        <button className="items">
                            Unity 게임 프로젝트
                        </button>
                    </div>
                    <div className="contentRight">
                        <p>박도현</p>
                    </div>
                </ContentDiv>
                <LineB/>
            </MainDiv>
        </StyledDiv>

    );
}