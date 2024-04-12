// src/Canvas.js
import React, { useEffect, useRef } from 'react';

const Canvas = () => {
 const canvasRef = useRef(null);

 useEffect(() => {
    const canvas = canvasRef.current;
    const handleDrop = (event) => {
      event.preventDefault();
      const id = event.dataTransfer.getData('text/plain');
      console.log(`Dropped element: ${id}`);
    };

    const handleDragOver = (event) => {
      event.preventDefault();
    };

    canvas.addEventListener('drop', handleDrop);
    canvas.addEventListener('dragover', handleDragOver);

    return () => {
      canvas.removeEventListener('drop', handleDrop);
      canvas.removeEventListener('dragover', handleDragOver);
    };
 }, []);

 return (
    <div
      ref={canvasRef}
      style={{
        width: '500px',
        height: '500px',
        border: '1px solid #000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      Drop here
    </div>
 );
};

export default Canvas;
