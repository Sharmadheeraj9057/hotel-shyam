import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: 'Kofta',
      price: 250,
      description: "Soft, spicy koftas soaking in rich, creamy gravy.",
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format',
      isFavorite: false
    },
    {
      id: 2,
      name: 'Samosa',
      price: 180,
      description: "Crisky outside, spicy inside - perfect tea-time snack.",
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format',
      isFavorite: false
    },
    {
      id: 3,
      name: 'Rogan Josh',
      price: 280,
      description: 'Aromatic lamb curry from Kashmir',
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format',
      isFavorite: false
    }
  ]);

  const toggleFavorite = (id) => {
    setMenuItems(menuItems.map(item => 
      item.id === id ? {...item, isFavorite: !item.isFavorite} : item
    ));
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Hotel Shyam Special Menu</h1>
        <p className="tagline">Authentic flavors crafted with traditional recipes</p>
      </div>

      <div className="menu-grid">
        {menuItems.map(item => (
          <div key={item.id} className="menu-card">
            <div className="image-container">
              <img src={item.image} alt={item.name} className="food-image" />
              <button 
                className={`favorite-btn ${item.isFavorite ? 'active' : ''}`}
                onClick={() => toggleFavorite(item.id)}
              >
                {item.isFavorite ? '❤️' : '🤍'}
              </button>
            </div>
            <div className="card-body">
              <h3 className="dish-name">{item.name}</h3>
              <p className="dish-description">{item.description}</p>
              <div className="price-section">
                <span className="price">₹{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;