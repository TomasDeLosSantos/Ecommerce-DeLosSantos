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
                    {/* <Badge size={"md"} colorScheme={"blue"} width={"-webkit-fit-content"} margin={"auto"}>ID: {item.id}</Badge> */}
                </Heading>

                <Text fontSize={"lg"} textAlign={"center"}>
                    {item.description}
                </Text>


                


                <ItemCount title={""} stock={15} initial={0} price={item.price}></ItemCount>
            {/* <Box display={"flex"} alignContent={"center"} justifyContent={"space-between"} mt={"0.5rem"} mb={"0.5rem"}>



            </Box> */}
            {/* <Button variant={"solid"} colorScheme={"teal"} width={"100%"}>Details</Button> */}
        </Box>
        </Box>
    );
}

export default ItemDetail;