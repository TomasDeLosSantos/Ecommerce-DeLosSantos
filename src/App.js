// UTILITIES;
import { ChakraProvider, extendTheme, SliderFilledTrack } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// STYLES
import "./styles/reset.css"
import "./styles/style.css"

// COMPONENTS
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

// VIEWS

const theme = extendTheme({
  fonts: {
    heading: "Archivo, sans-serif",
    body: "Archivo, sans-serif"
  }
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="all games."/>}/>
            <Route path='/game/:id' element={<ItemDetailContainer></ItemDetailContainer>}/>
            <Route path='/category/:category' element={<ItemListContainer></ItemListContainer>}/>
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
