import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function HomePage() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageGrid, setImageGrid] = useState<string[]>([]); // Replace with your logic to fetch and display images
  const [focused, setFocused] = useState(false);

  const handleGenerateVideo = () => {
    setLoading(true);

    // Placeholder: Simulate a delay (replace with actual logic)
    setTimeout(() => {
      setLoading(false);
      setImageGrid(['logo.jpeg', 'logo.jpeg', 'logo.jpeg']); // Replace with actual image URLs
    }, 2000);
  };

  const styles: { [key: string]: React.CSSProperties } = {
    mainContainer: {
      backgroundColor: '#F2E8CF',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      maxWidth: '200px',
    },
    titleContainer: {
      flex: '1', // Takes the remaining space to push the title to the right
      display: 'flex',
      justifyContent: 'left',
      marginLeft: '450px',
    },
    title: {
      color: '##000000', // Blue color
      fontSize: '2rem',
      fontWeight: 'bold',
      fontFamily: 'Algerian, sans-serif', // Use Algerian or a fallback sans-serif font
      letterSpacing: '2px', // Adjust the letter spacing
      textTransform: 'uppercase', // Uppercase text
      textAlign: 'center',
      marginBottom: '20px', // Add some spacing below the title
    },
    contentContainer: {
      padding: '20px',
      textAlign: 'center', // Center-align the content
    },

    input: {
      width: '80%',
      padding: '12px',
      marginRight: '10px',
      marginLeft: '10px', // Add left margin for spacing
      border: '2px solid #3498db',
      borderRadius: '4px',
      fontSize: '1.2rem',
      outline: 'none',
      transition: 'border-color 0.3s, width 0.3s', // Add transition for smooth effect
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },

    inputFocus: {
      width: '100%', // Expand the width on focus
      border: '2px solid #000000', // Change border color on focus
    },

    generateButton: {
      padding: '12px',
      backgroundColor: '#E6AF2E',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1.2rem',
      transition: 'background-color 0.3s',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },

    loading: {
      fontSize: '1.2rem',
      color: '#888',
      marginTop: '1rem',
    },
    imageGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '1rem',
      marginTop: '1.5rem',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s',
    },
    imageHover: {
      transform: 'scale(1.1)',
    },
  };

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div style={styles.mainContainer}>
        <div>
          <Link to="/">
            <img src="./Logo_no_bg.png" alt="Logo" style={styles.logo} />
          </Link>
        </div>
        <div style={styles.titleContainer}>
          <div style={styles.title}>Text to Video Generator</div>
          {/* Add other navigation links if needed */}
        </div>
      </div>

      <div style={styles.contentContainer}>
        <div style={{ display: 'flex' }}>
          <input
            type="text"
            placeholder="Type your prompt here"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{ ...styles.input, ...(focused ? styles.inputFocus : {}) }}
          />
          <button onClick={handleGenerateVideo} style={styles.generateButton}>
            Generate Video
          </button>
        </div>

        {loading && <div style={styles.loading}>Loading...</div>}

        <div style={styles.imageGrid}>
          {imageGrid.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              style={styles.image}
              // Add hover effect if needed
              // className={styles.imageHover}
            />
          ))}
        </div>
      </div>
    </>
  );
}
