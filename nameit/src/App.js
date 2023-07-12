import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import SearchBox from './components/searchBox/SearchBox';
import ResultContainer from './components/resultsContainer/ResultContainer';
const name = require('@rstacruz/startup-name-generator');

function App() {
  const[headerExpanded, setHeaderExpanded] = useState(true);
  const[suggestedNames, setSuggestedNames] = useState([]);

  const handleInputChange = (inputText) => {
    setHeaderExpanded(!inputText)
    setSuggestedNames(inputText ? name(inputText) : [])
  }
  return (
    <div className="App">
        <Header headerExpanded={headerExpanded}/>
        <SearchBox onInputChange={handleInputChange}/>
        <ResultContainer suggestedNames={suggestedNames}/>
    </div>
  );
}

export default App;
