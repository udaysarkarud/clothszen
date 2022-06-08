import React from 'react';
import styled from 'styled-components';
import { Search,ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';

const Container = styled.div`
    height:60px;
`;
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
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
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{color:"gray",fontSize:"16px"}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>CLOTHSZEN</Logo></Center>
                <Right>
                    <MenuItems>REGISTER</MenuItems>
                    <MenuItems>SING IN</MenuItems>
                    <MenuItems>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartCheckoutOutlined />
                        </Badge>
                    </MenuItems>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;