import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ), url("https://wallpapercave.com/wp/wp9764093.jpg") center;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper=styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`;
const Title=styled.h2`
    font-size: 24px;
    font-weight: 200;
`;
const Form=styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input=styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement=styled.span`
    font-size: 15px;
    margin: 20px 0px;
`;
const Button=styled.button`
    width: 40%;
    border: 1px solid white;
    padding: 15px 20px;
    background-color: #7858A6;
    color: white;
    cursor: pointer;
    &:hover{
        border: 1px solid #7858A6;
        background-color: white;
        color: #7858A6;

    }
`;
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE NEW ACCOUNT</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe culpa laborum nisi.</Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;