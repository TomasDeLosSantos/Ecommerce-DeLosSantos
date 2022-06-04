import { Box, Spinner } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import Item from "./Item";
import { collection, getDocs, getFirestore, orderBy, query, where } from "firebase/firestore" 
// const items = [{id: 1, title: "titulo", price: 0, pictureUrl: "url"}, {id: 2, title: "titulo", price: 0, pictureUrl: "url"}, {id: 3, title: "titulo", price: 0, pictureUrl: "url"}];

const ItemList = ({category}) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const gamesCollection = collection(db, "games");
        let g;
        category ? g = query(gamesCollection, orderBy("id"), where("category", "==", category)) : g = query(gamesCollection, orderBy("id"));
        
        getDocs(g).then((snapshot) => {
            if(snapshot.size === 0){
                console.log("no results");
            }
            setItems(snapshot.docs);
        });
        
    }, [category]);



    return(
        <Box display={"flex"} flexWrap={"wrap"}>
            {items.length > 0 ? (items.map(game => <Item key={game.data().id} id={game.id} title={game.data().title} price={game.data().price} pictureUrl={game.data().pictureUrl}></Item>)) : <Spinner m={"2rem auto"} size={"lg"} thickness={"4px"} color={"teal"}></Spinner>}
        </Box>
    );

}

export default ItemList;