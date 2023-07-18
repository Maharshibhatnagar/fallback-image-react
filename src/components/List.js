import React from 'react';
import Card from './Card';

const List = ({ items }) => {
  return (
    <div className="card-list">
      {items.map((item) => (
        <Card key={item.id} imageUrl={item.imageUrl} description={item.description} />
      ))}
    </div>
  );
};

export default List;
