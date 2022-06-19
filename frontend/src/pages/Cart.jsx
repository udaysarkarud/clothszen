import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { mobile } from "../responsive";

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding:'10px'})}
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
    ${mobile({display:'none'})}
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:'column'})}
`;
const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:'column'})}
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
    margin-bottom: 20px;
`;
const ProductAmount =styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin:'5px 15px'})}
`;
const ProductPrice =styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom:'20px'})}
`;
const Hr = styled.hr`
    background-color: #E9D5DA;
    border: none;
    height: 1px;
`;
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const SummaryTitle = styled.h3`
    font-size: 30px;
    font-weight: 200;
    text-align: center;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-size: ${props=>props.type==='total'&&'24px'};
    font-weight: ${props=>props.type==='total'&&'500'};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    border: 2px solid #7858A6;
    color:#7858A6;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        background-color: #7858A6;
        color: white;
    }
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
                                    <ProductName><b>Product:</b>GET BEST LAPTOP FROM HP</ProductName>
                                    <ProductId><b>Id:</b> 678698765864</ProductId>
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
                        <Hr/>
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
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type='total'>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    );
};

export default Cart;