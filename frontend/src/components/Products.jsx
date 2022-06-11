import styled from "styled-components";
import { productsItems } from "../fakeData";
import Product from "./Product";
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
    return (
        <Container>
            {
                productsItems.map(item=>(
                    <Product item={item} key={item.id}/>
                ))
            }
        </Container>
    );
};

export default Products;