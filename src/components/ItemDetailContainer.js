import { Box, Spinner } from '@chakra-ui/react'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    let id = useParams().id;

    useEffect(() => {
        fetch("../data.json").then(response => response.json()).then(res => {
            setItems(res);
        });

    }, []);

    return (
        <Box maxWidth="1320px" margin={"auto"} display={"flex"} padding={"3rem"}>
            {items.length > 0 ? <ItemDetail item={items[items.findIndex(g => g.id == id)]}></ItemDetail> : <Spinner m={"2rem auto"} size={"lg"} thickness={"4px"} color={"teal"}></Spinner>}
        </Box>
    );
}
export default ItemDetailContainer;