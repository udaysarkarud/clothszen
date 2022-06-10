import { Send } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title=styled.h2`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Description=styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer=styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;
const Input=styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;
const Button=styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`;
const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nisi.</Description>
            <InputContainer>
                <Input placeholder="Your Email"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    );
};

export default NewsLetter;