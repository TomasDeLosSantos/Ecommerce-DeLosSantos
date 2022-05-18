import { Heading, Button, Input, InputGroup, InputLeftElement, Box } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faGamepad, faComputerMouse } from '@fortawesome/free-solid-svg-icons'
import { faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons'
import "../styles/nav.css"
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return(
        <header>
            <nav>
                <NavLink to={"/"}>
                    <Heading textAlign={"center"} letterSpacing={"0.3rem"} fontWeight={"700"} size={"lg"} color={"teal"}>goat.codes</Heading>
                </NavLink>
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
                        <li>
                            <NavLink className={"navlink"} activeclassname={"active"} to={"/"}>
                                <Button mt={"0.5rem"} leftIcon={<FontAwesomeIcon icon={faGamepad}/>} colorScheme="teal" variant={"ghost"}>ALL</Button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"navlink"} activeclassname={"active"} to={"/category/pc"}>
                                <Button mt={"0.5rem"} leftIcon={<FontAwesomeIcon icon={faComputerMouse}/>} colorScheme="teal" variant={"ghost"}>PC</Button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"navlink"} activeclassname={"active"} to={"/category/ps4"}>
                                <Button mt={"0.5rem"} leftIcon={<FontAwesomeIcon icon={faPlaystation}/>} colorScheme="teal" variant={"ghost"}>PS4</Button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"navlink"} activeclassname={"active"} to={"/category/xbox"}>
                                <Button mt={"0.5rem"} leftIcon={<FontAwesomeIcon icon={faXbox}/>} colorScheme="teal" variant={"ghost"}>XBOX</Button>
                            </NavLink>
                        </li>
                    </ul>

                </Box>

                <CartWidget></CartWidget>
                
            </nav>
        </header>
    );
}

export default NavBar;
