//import './App.css';
import { ChakraProvider, extendTheme, SliderFilledTrack } from '@chakra-ui/react';
import "./styles/reset.css"
import "./styles/style.css"
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';

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
        <ItemListContainer greeting="Welcome."/>
      </div>
    </ChakraProvider>
  );
}

export default App;
