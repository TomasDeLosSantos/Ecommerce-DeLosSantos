import { Heading, Button, ButtonGroup, Input, InputGroup, InputLeftElement, Badge, Box } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const ItemCount = ({title, stock, initial, onAdd}) => {
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
                border={"solid 2px teal"} 
                borderRadius={"10px"} 
                padding={"0.5rem"}
                margin={"1rem"}>
                    
            <Heading size={"md"} color={"teal"} textAlign={"center"} mb={"0.5rem"}>{title}</Heading>
            <Badge size={"md"} colorScheme={"blue"} width={"-webkit-fit-content"} margin={"auto"}>{curStock} units left</Badge>

            <Box display={"flex"} alignContent={"center"} justifyContent={"space-between"} mt={"0.5rem"} mb={"0.5rem"}>

                <Button variant={"ghost"} color={"teal"} isDisabled={delDisabled} onClick={() => quant > 0 ? setQuant(quant - 1) : quant = 0}>
                    <FontAwesomeIcon icon={faMinus}/>
                </Button>

                <Heading margin={"auto"} size={"sm"} color={"teal"}>
                    {quant}
                </Heading>

                <Button variant={"ghost"} color={"teal"} isDisabled={addDisabled} onClick={() => quant < curStock ? setQuant(quant + 1) : quant = curStock}>
                    <FontAwesomeIcon icon={faPlus}/>
                </Button>

            </Box>
            <Button variant={"solid"} colorScheme={"teal"} width={"100%"} onClick={addToCart}>Add to cart</Button>
        </Box>
    );
}

export default ItemCount;

