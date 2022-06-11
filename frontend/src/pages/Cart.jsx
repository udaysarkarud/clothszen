import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 20px;
`;
const Title = styled.h1`
    text-wrap: 300px;
    text-align: center;
`;
const Top = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' ? '1px solid #7858A6' : '1px solid black'};
    background-color: ${props => props.type === 'filled' ? '#7858A6' : 'black'};
    color: white;
    &:hover{
        border: ${props => props.type === 'filled' ? '1px solid #7858A6' : '1px solid black'};
        background-color: white;
        color: ${props => props.type === 'filled' ? '#7858A6' : 'black'};
    }
`;
const TopTexts = styled.div`

`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ProductAmountContainer =styled.div`
    display: flex;
    align-items: center;
`;
const ProductAmount =styled.div`
    font-size: 24px;
    margin: 5px;
`;
const ProductPrice =styled.div``;
const Summary = styled.div`
    flex: 1;
`;
const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton type="filled">CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="notfilled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://via.placeholder.com/500/500"/>
                                <Details>
                                    <ProductName><b>Product:</b> BEST LAPTOP FROM HP</ProductName>
                                    <ProductId><b>Id:</b> 678698765468</ProductId>
                                    <ProductColor color='black' />
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>Summary</Summary>
                </Bottom>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    );
};

export default Cart;