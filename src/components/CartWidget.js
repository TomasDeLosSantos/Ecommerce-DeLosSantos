import { Heading, Button, ButtonGroup, Input, InputGroup, InputLeftElement, Badge, Box } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faGamepad, faComputerMouse, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return(
        <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
            <Button leftIcon={<FontAwesomeIcon icon={faCartShopping}/>} colorScheme="teal" variant={"solid"}>CART</Button>
            <Badge colorScheme={"blue"} textAlign={"center"} mt={"0.2rem"} width={"-webkit-fit-content"}>0 items</Badge>
        </Box>
    );
}

export default CartWidget;