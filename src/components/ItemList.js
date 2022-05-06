import { Heading, Button, ButtonGroup, Input, InputGroup, InputLeftElement, Badge, Box } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import Item from "./Item";
// const items = [{id: 1, title: "titulo", price: 0, pictureUrl: "url"}, {id: 2, title: "titulo", price: 0, pictureUrl: "url"}, {id: 3, title: "titulo", price: 0, pictureUrl: "url"}];

const ItemList = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            return new Promise(() => setTimeout(() => {
                    const data = [
                        {id: 1, title: "Elden Ring", price: 7000, pictureUrl: require("../assets/EldenRing.jpg")}, 
                        {id: 2, title: "Minecraft", price: 2200, pictureUrl: require("../assets/Minecraft.jpg")}, 
                        {id: 3, title: "The Witcher 3", price: 800, pictureUrl: require("../assets/TheWitcher3.jpg")},
                        {id: 4, title: "Minecraft", price: 2200, pictureUrl: require("../assets/Minecraft.jpg")}, 
                        {id: 5, title: "The Witcher 3", price: 800, pictureUrl: require("../assets/TheWitcher3.jpg")},
                        {id: 6, title: "Elden Ring", price: 7000, pictureUrl: require("../assets/EldenRing.jpg")}
                    ];
                    setItems(data);
                }, 2000)
            );
        }

        fetchData().catch(console.error);;
    }, []);

    return(
        <Box display={"flex"} flexWrap={"wrap"}>
            {items.map(game => <Item key={game.id} id={game.id} title={game.title} price={game.price} pictureUrl={game.pictureUrl}></Item>)}
        </Box>
    );

}

export default ItemList;