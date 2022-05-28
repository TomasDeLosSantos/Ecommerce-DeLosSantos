import { Box, Heading, Button } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Context } from "./CartContext";
import CartItem from "./CartiItem";
const Cart = () => {
    const cart = useContext(Context);

    return(
        <Box className="checkout" maxWidth={"1320px"} margin={"auto"} padding={"1rem"}>
            <Box maxWidth={"1320px"} margin={"auto"} display={"flex"} justifyContent={"space-between"} alignContent={"center"} padding={"0.5rem"}>
                <Heading color={"teal"}>YOUR CART</Heading>
                <Heading color={"teal"}>
                    {"TOTAL: $" + cart.cart.reduce((a,b) => a + (b.item.price * b.quant), 0)}
                    <Button ml={"1rem"} variant={"solid"} colorScheme={"blue"} size={"lg"} isDisabled={cart.cart.length <= 0}>BUY</Button>
                </Heading>
                {/* <Button variant={"solid"} colorScheme={"blue"}>Buy Cart</Button> */}
                {/* <Box className="checkout" width={"100%"}>
                    <Heading>Items In Cart:</Heading>
                    <Heading>{cart.cart.reduce((a,b) => a + b.quant, 0)}</Heading>
                    <Heading>Total: {cart.cart.reduce((a,b) => a + (b.item.price * b.quant), 0)}</Heading>
                    <Button>BUY</Button>
                </Box> */}

            </Box>
            <Box display={"flex"} flexWrap={"wrap"}>
                {cart.cart.length > 0 
                    ? 
                    cart.cart.map(i => <CartItem key={i.item.id} game={i.item} quant={i.quant}></CartItem>) 
                    : 
                    <Button variant={"solid"} colorScheme={"blue"} margin={"auto"} size={"lg"}>Explore our catalog</Button>
                }
            </Box>
        </Box>
    );
}

export default Cart;