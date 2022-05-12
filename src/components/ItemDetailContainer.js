import { Heading, Button, ButtonGroup, Input, InputGroup, InputLeftElement, Badge, Box } from '@chakra-ui/react'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from "react";

const ItemDetailContainer = () =>{
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            return new Promise(() => setTimeout(() => {
                    const data = [
                        {id: 1, title: "Elden Ring", price: 7000, pictureUrl: require("../assets/EldenRing.jpg"), description: "Elden Ring is an open world Soul's game. FromSoftware's formula taken to the next level."}, 
                        {id: 2, title: "Minecraft", price: 2200, pictureUrl: require("../assets/Minecraft.jpg"), description: "The ultimate sandbox game. Explore, gather, craft, build and fight. Create your own adventure."}, 
                        {id: 3, title: "The Witcher 3", price: 800, pictureUrl: require("../assets/TheWitcher3.jpg")}
                    ];
                    setItems(data);
                }, 2000)
            );
        }

        fetchData().catch(console.error);;
    }, []);

    return(
        <Box maxWidth="1320px" margin={"auto"} display={"flex"} padding={"3rem"}>
            {items.length > 0 ? <ItemDetail item={items[1]}></ItemDetail> : null}
        </Box>
    );
}
export default ItemDetailContainer;