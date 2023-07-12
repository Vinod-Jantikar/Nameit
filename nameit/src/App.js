import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import SearchBox from './components/searchBox/SearchBox';

function App() {

  const[headerExpanded, setHeaderExpanded] = useState(true)

  const handleInputChange = (inputText) => {
    console.log("input text", inputText)
    setHeaderExpanded(!inputText)
  }
  return (
    <div className="App">
      <div>
        <Header headerExpanded={headerExpanded}/>
      </div>
      <div>
        <SearchBox onInputChange={handleInputChange}/>
      </div>
    </div>
  );
}

export default App;
