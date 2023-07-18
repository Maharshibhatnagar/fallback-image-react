import React, { useState, useEffect } from 'react';

const Card = ({ imageId, description }) => {
  const [imageUrl, setImageUrl] = useState('');
  
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`https://source.unsplash.com/${imageId}`);
        setImageUrl(response.url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };
    fetchImage();
  }, [imageId]);

  return (
    <div className="card">
      {imageUrl ? (
        <img src={imageUrl} alt={description} />
      ) : (
        <div className="loading">Loading...</div>
      )}
      <p>{description}</p>
    </div>
    
  );
};

export default Card;
