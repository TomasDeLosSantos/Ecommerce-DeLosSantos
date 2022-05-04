import { Heading, Button, ButtonGroup, Input, InputGroup, InputLeftElement, Badge, Box } from '@chakra-ui/react'
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) =>{
    const onAdd = (quant, title) => {
        alert(quant + " " + title + " added to cart");
    } 

    return (
        <Box maxWidth="1320px" margin={"auto"}>
            <Heading size={"2xl"} color={"teal"}>{greeting}</Heading>
            <Box display={"flex"}>
                <ItemCount title="Bioshock" stock={10} initial={1} onAdd={onAdd}></ItemCount>
                <ItemCount title="The Binding of Isaac" stock={3} initial={0} onAdd={onAdd}></ItemCount>
                <ItemCount title="Halo" stock={20} initial={10} onAdd={onAdd}></ItemCount>
                <ItemCount title="Mass Effect" stock={0} initial={0} onAdd={onAdd}></ItemCount>
            </Box>
        </Box>
    );
}
export default ItemListContainer;