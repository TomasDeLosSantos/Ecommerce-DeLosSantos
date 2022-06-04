import { Heading, Box } from '@chakra-ui/react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) =>{
    let category = useParams().category;
    if(greeting === undefined){
        greeting = category + " games";
    }
    return (
        <Box maxWidth="1320px" margin={"auto"}>
            <Heading size={"2xl"} color={"teal"}>{greeting}</Heading>
            <ItemList category={category}></ItemList>
        </Box>
    );
}
export default ItemListContainer;