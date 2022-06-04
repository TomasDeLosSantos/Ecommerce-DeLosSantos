import { Box, Spinner } from '@chakra-ui/react'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from "firebase/firestore" 

const ItemDetailContainer = () => {
    // const [items, setItems] = useState([]);
    const [item, setItem] = useState({});
    let id = useParams().id;

    useEffect(() => {
        /* FETCH LOCAL DATA */
        // fetch("../data.json").then(response => response.json()).then(res => {
        //     setItems(res);
        // });
        const db = getFirestore();
        const gamesCollection = collection(db, "games");
        let g = query(gamesCollection, where("id", "==", parseInt(id)), limit(1));

        getDocs(g).then((snapshot) => {
            if(snapshot) snapshot.docs.map(i => i.data().id == id ? setItem(i.data()) : null);
        })

    }, []);

    return (
        <Box maxWidth="1320px" margin={"auto"} display={"flex"} padding={"3rem"}>
            {item.hasOwnProperty("id") ? <ItemDetail item={item}></ItemDetail> : <Spinner m={"2rem auto"} size={"lg"} thickness={"4px"} color={"teal"}></Spinner>}
        </Box>
    );
}
export default ItemDetailContainer;