import { Heading, Button, ButtonGroup, Input, InputGroup, InputLeftElement, Badge, Box } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const ItemCount = ({title, stock, initial, onAdd, price}) => {
    const [quant, setQuant] = useState(initial);
    const [curStock, setStock] = useState(stock);
    let delDisabled, addDisabled;

    quant == 0 ? delDisabled = true : delDisabled = false;
    quant == curStock ? addDisabled = true : addDisabled = false;

    const addToCart = () =>{
        onAdd(quant, title);
        setStock(curStock - quant);
        setQuant(0);
    }


    return(
        <Box    display={"flex"} 
                flexDir={"column"} 
                alignContent={"center"} 
                justifyContent={"center"} 
                borderRadius={"10px"} 
                padding={"0.5rem"}
                margin={"1rem"}>
                    
            {/* <Heading size={"md"} color={"teal"} textAlign={"center"} mb={"0.5rem"}>{title}</Heading> */}

            <Box display={"flex"} alignContent={"start"} justifyContent={"space-between"}> 
                <Badge size={"md"} colorScheme={"blue"} width={"-webkit-fit-content"} margin={"auto 0px"}>{curStock} units left</Badge>
                <Heading textAlign={"center"} size={"lg"} color={"teal"}>
                    {"$" + price} 
                </Heading>
            </Box>

            <Box display={"flex"} alignContent={"center"} justifyContent={"center"} margin={"0.5rem auto"}>

                <Button variant={"ghost"} color={"teal"} margin={"auto 2rem"} isDisabled={delDisabled} onClick={() => quant > 0 ? setQuant(quant - 1) : quant = 0}>
                    <FontAwesomeIcon icon={faMinus}/>
                </Button>

                <Heading margin={"auto"} size={"sm"} color={"teal"} >
                    {quant}
                </Heading>

                <Button variant={"ghost"} color={"teal"} margin={"auto 2rem"} isDisabled={addDisabled} onClick={() => quant < curStock ? setQuant(quant + 1) : quant = curStock}>
                    <FontAwesomeIcon icon={faPlus}/>
                </Button>

            </Box>
            <Button variant={"solid"} colorScheme={"teal"} width={"100%"} onClick={addToCart}>Add to cart</Button>
        </Box>
    );
}

export default ItemCount;

