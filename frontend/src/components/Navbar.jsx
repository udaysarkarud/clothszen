import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Container = styled.div`
    height:60px;
    ${mobile({ height: '50px' })}
`;
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: '10px 0px' })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none' })}
`;
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;
const Input = styled.input`
    border: none;
    ${mobile({ width: '50px' })}
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: '18px' })}
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: 'center' })}
`;
const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Search style={{ color: "gray", fontSize: "16px" }} />
                    </SearchContainer>
                </Left>
                <Center><Logo>CLOTHSZEN</Logo></Center>
                <Right>
                    <MenuItems>REGISTER</MenuItems>
                    <MenuItems>SING IN</MenuItems>
                    <Link to={'/cart'}>
                        <MenuItems>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartCheckoutOutlined />
                            </Badge>
                        </MenuItems>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;