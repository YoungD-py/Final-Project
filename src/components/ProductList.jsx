import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';
import plants from '../data/plants';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // Group plants by category
  const groupedPlants = plants.reduce((acc, plant) => {
    if (!acc[plant.category]) acc[plant.category] = [];
    acc[plant.category].push(plant);
    return acc;
  }, {});

  return (
    <div className="product-list">
      {Object.keys(groupedPlants).map(category => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="product-grid">
            {groupedPlants[category].map(plant => {
              const isInCart = cartItems.some(item => item.id === plant.id);
              return (
                <div key={plant.id} className="product-card">
                  <img src={plant.imageUrl} alt={plant.name} className="product-image" />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button
                    onClick={() => dispatch(addItem(plant))}
                    disabled={isInCart}
                    className="add-to-cart-btn"
                  >
                    {isInCart ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
