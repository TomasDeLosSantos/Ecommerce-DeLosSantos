import { Heading, Button, Text, ButtonGroup, Input, InputGroup, InputLeftElement, Badge, Box } from '@chakra-ui/react'
import ItemCount from './ItemCount';

const ItemDetail = ({item = []}) => {
    return(
        <Box display={"flex"} justifyContent={"space-between"} alignContent={"center"} width={"100%"}>
            <img className='img' width={"50%"} src={item.pictureUrl}/>
            
            <Box    display={"flex"} 
                    flexDir={"column"} 
                    alignContent={"center"} 
                    justifyContent={"center"} 
                    borderRadius={"10px"} 
                    padding={"0.5rem"}
                    margin={"1rem auto"}
                    width={"40%"}>
                    

                <Heading size={"lg"} color={"teal"} textAlign={"center"} mb={"0.5rem"}>
                    {item.title + "  "}
                </Heading>

                <Text fontSize={"lg"} textAlign={"center"}>
                    {item.description}
                </Text>
                
                <ItemCount title={item.title} stock={item.stock} initial={item.stock > 0 ? 1 : 0} price={item.price}></ItemCount>
        </Box>
        </Box>
    );
}

export default ItemDetail;