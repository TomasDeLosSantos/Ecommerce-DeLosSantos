import { Heading, Button, ButtonGroup, Input, InputGroup, InputLeftElement, Badge, Box } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Item = ({id, title, price, pictureUrl}) => {


    return(
        <Box    display={"flex"} 
                flexDir={"column"} 
                alignContent={"center"} 
                justifyContent={"center"} 
                borderRadius={"10px"} 
                padding={"0.5rem"}
                margin={"1rem"}
                width={"30%"}>
                    
            <img className='img' src={pictureUrl}/>

            <Box display={"flex"} alignContent={"center"} justifyContent={"space-between"} mt={"0.5rem"} mb={"0.5rem"}>

                <Heading size={"md"} color={"teal"} textAlign={"center"} mb={"0.5rem"}>
                    {title + "  "}
                    <Badge size={"md"} colorScheme={"blue"} width={"-webkit-fit-content"} margin={"auto"}>ID: {id}</Badge>
                </Heading>

                <Heading size={"md"} color={"teal"}>
                    {"$" + price}
                </Heading>


            </Box>
            <Button variant={"solid"} colorScheme={"teal"} width={"100%"}>Details</Button>
        </Box>
    );
}

export default Item;

