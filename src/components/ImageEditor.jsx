// src/components/ImageEditor.jsx
import React, { useState, useRef } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

const ImageEditor = () => {
  const [image, setImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const imageRef = useRef(null);

  // Load image using use-image hook
  const [img] = useImage(imageSrc);

  // Handle file upload and set the image to state
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
      setUploadedImage(file);
    }
  };

  // Handle rotation of the image
  const rotateImage = () => {
    if (imageRef.current) {
      imageRef.current.rotation(imageRef.current.rotation() + 90); // Rotate 90 degrees
    }
  };

  // Handle resizing of the image
  const resizeImage = () => {
    if (imageRef.current) {
      imageRef.current.scaleX(imageRef.current.scaleX() * 1.2);
      imageRef.current.scaleY(imageRef.current.scaleY() * 1.2);
    }
  };

  // Handle applying a grayscale filter
  const applyGrayscale = () => {
    if (imageRef.current) {
      imageRef.current.cache();
      imageRef.current.filters([Konva.Filters.Grayscale]);
      imageRef.current.applyFilters();
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Image Editor</h1>
      <input type="file" onChange={handleFileUpload} />
      <br />
      <Stage width={800} height={600}>
        <Layer>
          {img && (
            <Image
              ref={imageRef}
              image={img}
              x={100}
              y={100}
              width={img.width}
              height={img.height}
            />
          )}
        </Layer>
      </Stage>
      <br />
      <button onClick={rotateImage}>Rotate</button>
      <button onClick={resizeImage}>Resize</button>
      <button onClick={applyGrayscale}>Grayscale</button>
    </div>
  );
};

export default ImageEditor;
