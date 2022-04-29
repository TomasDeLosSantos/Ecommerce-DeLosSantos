import { Heading, Button, ButtonGroup, Input, InputGroup, InputLeftElement, Badge, Box } from '@chakra-ui/react'
const ItemListContainer = ({greeting}) =>{
    return (
        <Box maxWidth="1320px" margin={"auto"}>
            <Heading size={"2xl"} color={"teal"}>{greeting}</Heading>
        </Box>
    );
}
export default ItemListContainer;