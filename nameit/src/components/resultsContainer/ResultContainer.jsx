import React from 'react';
import './ResultContainer.css'
import NameCard from '../nameCard/NameCard';

const ResultContainer = ({suggestedNames}) => {

  const suggestNamesJSX = suggestedNames.map((suggestedName) => <NameCard suggestedName={suggestedName}/>)
  return (
    <div className='results-container'>
        {suggestNamesJSX}
    </div>
  )
}

export default ResultContainer
