import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import * as THREE from 'three';

const App = () => {
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
  const [replace, setReplace] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  const canvasRef = useRef(null);

  
  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

 
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x0077ff, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 15;

   
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      material.color.setHSL(Math.sin(sphere.rotation.y) * 0.5 + 0.5, 1, 0.5); 
      renderer.render(scene, camera);
    };

    animate();
    
  
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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
      <canvas ref={canvasRef} className="threejs-canvas"></canvas>

      <div className="content">
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
    </div>
  );
};

export default App;
