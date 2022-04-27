
//import './App.css';
import { ChakraProvider, extendTheme, SliderFilledTrack } from '@chakra-ui/react';
import "./styles/reset.css"
import {NavBar} from "./components/NavBar"

const theme = extendTheme({
  fonts: {
    heading: "Archivo, sans-serif",
    body: "Archivo, sans-serif"
  }
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <NavBar/>
      </div>
    </ChakraProvider>
  );
}

export default App;
