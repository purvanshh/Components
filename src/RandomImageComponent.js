import React, { useState, useEffect } from 'react';

const RandomImageComponent = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://source.unsplash.com/random') // Replace with your preferred image API or source
      .then(response => setImageUrl(response.url))
      .catch(error => console.error('Error fetching random image:', error));
  }, []);

  return (
    <div>
      <h2>Random Image</h2>
      {imageUrl && <img src={imageUrl} alt="Random" style={{ maxWidth: '100%' }} />}
    </div>
  );
};

export default RandomImageComponent;
