// src/DraggableItem.js
import React from 'react';

const DraggableItem = ({ id, type, children }) => {
 const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', id);
 };

 return (
    type === 'image' ? (
      <img
        src="path/to/your/image.jpg" // Make sure to replace this with your actual image path
        alt="Draggable Image"
        draggable="true"
        onDragStart={handleDragStart}
        style={{
          width: '100px',
          height: '100px',
          cursor: 'move',
        }}
      />
    ) : (
      <div
        draggable="true"
        onDragStart={handleDragStart}
        style={{
          width: '100px',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'move',
          backgroundColor: '#ff0000',
          color: 'white',
        }}
      >
        {children}
      </div>
    )
 );
};

export default DraggableItem;
