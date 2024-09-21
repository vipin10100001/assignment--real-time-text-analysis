import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
  const [replace, setReplace] = useState('');
  const [highlightedText, setHighlightedText] = useState('');


  const handleTextChange = (e) => {
    setText(e.target.value);
    setHighlightedText(e.target.value); 
  };

 
  const countUniqueWords = () => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    return new Set(words).size;
  };


  const countCharacters = () => {
    return text.replace(/[^\w]/g, '').length;
  };


  const handleReplace = () => {
    if (!search || !replace) return;
    
    const regex = new RegExp(search, 'g');
    const updatedText = text.replaceAll(search, replace);
    

    const highlighted = text.replace(regex, (match) => `<span class="highlight">${replace}</span>`);
    
    setText(updatedText); 
    setHighlightedText(highlighted);
  };

  return (
    <div className="container">
      <h1 className="title">Real-Time Text Analysis</h1>

      <textarea
        className="textarea"
        value={text}
        onChange={handleTextChange}
        rows="10"
        placeholder="Type here..."
      ></textarea>

      <div className="stats">
        <p><strong>Unique Words:</strong> {countUniqueWords()}</p>
        <p><strong>Character Count (Excluding Spaces and Punctuation):</strong> {countCharacters()}</p>
      </div>

      <div className="replace-section">
        <input
          type="text"
          className="input-field"
          placeholder="Find"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Replace"
          value={replace}
          onChange={(e) => setReplace(e.target.value)}
        />
        <button className="replace-button" onClick={handleReplace}>
          Replace All
        </button>
      </div>

      <h2>Text with Replacements:</h2>
      <div
        className="highlighted-text"
        dangerouslySetInnerHTML={{ __html: highlightedText }}
      ></div>
    </div>
  );
};

export default App;
