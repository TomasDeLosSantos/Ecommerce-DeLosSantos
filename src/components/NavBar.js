import { Heading, Button, ButtonGroup, Input, InputGroup, InputLeftElement, Badge, Box } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faGamepad, faComputerMouse, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons'
import "../styles/nav.css"
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        <header>
            <nav>
                {/* <h2 className="nav__logo">ECOMMERCE</h2> */}
                <Heading textAlign={"center"} letterSpacing={"0.3rem"} fontWeight={"700"} size={"lg"} color={"teal"}>goat.codes</Heading>
                <Box display={"flex"} flexDir={"column"} w={"40%"}>
                    <InputGroup>
                        <InputLeftElement 
                            pointerEvents={"none"} 
                            children={<FontAwesomeIcon icon={faMagnifyingGlass} color={"teal"} opacity={"0.5"}/>}
                        />
                        <Input 
                            variant={"filled"} 
                            placeholder={"Search for a game"}
                            focusBorderColor={"teal.500"}
                            _placeholder={{color: "teal", opacity: "0.7"}}
                        />
                    </InputGroup>

                    <ul className="nav__menu">
                        <li><Button mt={"0.5rem"} leftIcon={<FontAwesomeIcon icon={faGamepad}/>} colorScheme="teal" variant={"ghost"}>ALL</Button></li>
                        <li><Button mt={"0.5rem"} leftIcon={<FontAwesomeIcon icon={faComputerMouse}/>} colorScheme="teal" variant={"ghost"}>PC</Button></li>
                        <li><Button mt={"0.5rem"} leftIcon={<FontAwesomeIcon icon={faPlaystation}/>} colorScheme="teal" variant={"ghost"}>PS4</Button></li>
                        <li><Button mt={"0.5rem"} leftIcon={<FontAwesomeIcon icon={faXbox}/>} colorScheme="teal" variant={"ghost"}>XBOX</Button></li>
                    </ul>

                </Box>

                <CartWidget></CartWidget>
                
            </nav>
        </header>
    );
}

export default NavBar;
