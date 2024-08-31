import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

let Wrapper = styled.div`
height: 100vh;
background-color: transparent;
text-align: center;
align-content: center;
`
let Body = styled.div`
background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpytxOfDckHLnbg5zZJsqtyfkTeaiSUayqmQ&s");
background-attachment: fixed;
background-size: cover;
`

let Title = styled.h1`
color: black;
text-align: center;
margin-top: 20px;
font-weight: bold;
font-size: 50px;
`
let Footer = styled.div`
position: fixed;
bottom: 0;
width: 100%;
background-color: lightgrey;
color: #444;
text-align: center;
`
let Header = styled.div`
position: absolute;
top: 0;
width: 100%;
background: wheat;
`

let Button = styled.button`
background-color: purple;
color: white;
border-radius: 5px;
padding: 10px 20px; 
`
let Footermain = styled.div`
margin: 30px 40px;

`

const About = () => {
    return (
        <>
            <Body>
                <Header>
                    <h1>Header</h1>
                </Header>
                <Title> About Us </Title>
                <Wrapper>
                    <Link to="/weather">TO WEATHER PAGE</Link>
                    <div>THIS IS ABOUT PAGE </div>
                    <Button>
                        <h1>CLICK ME</h1>
                    </Button>
                </Wrapper>

                <Footer>
                    <p>Copyright 2020</p>
                </Footer>
            </Body>
        </>
    )
}

export default About