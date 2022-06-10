import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>CLOTHSZEN</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet non, hic incidunt repellat nemo obcaecati corporis in eius illum magnam quas beatae distinctio dignissimos totam consequuntur dolores animi enim! Blanditiis.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px",color:"#7858A6"}}/> Lorem ipsum dolor sit amet.</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px",color:"#7858A6"}}/> +1 556 887 8749</ContactItem>
                <ContactItem><Email style={{marginRight:"10px",color:"#7858A6"}}/> contact@clothszen.shop</ContactItem>
                <Payment src='https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png'/>
            </Right>
        </Container>
    );
};

export default Footer;