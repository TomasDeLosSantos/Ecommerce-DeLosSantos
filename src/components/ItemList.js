import { Box, Spinner } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import Item from "./Item";
// const items = [{id: 1, title: "titulo", price: 0, pictureUrl: "url"}, {id: 2, title: "titulo", price: 0, pictureUrl: "url"}, {id: 3, title: "titulo", price: 0, pictureUrl: "url"}];

const ItemList = ({category}) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems([]);
        const fetchData = async () => {
            return new Promise(() => setTimeout(() => {
                    fetch("../data.json").then(response => response.json()).then(res => {
                        if(category != undefined){
                            setItems((res.filter(g => g.category == category)));
                        } else{
                            setItems(res);
                        }
                    });
                }, 2000)
            );
        }
        fetchData().catch(console.error);
    }, [category]);

    return(
        <Box display={"flex"} flexWrap={"wrap"}>
            {items.length > 0 ? (items.map(game => <Item key={game.id} id={game.id} title={game.title} price={game.price} pictureUrl={game.pictureUrl}></Item>)) : <Spinner m={"2rem auto"} size={"lg"} thickness={"4px"} color={"teal"}></Spinner>}
        </Box>
    );

}

export default ItemList;