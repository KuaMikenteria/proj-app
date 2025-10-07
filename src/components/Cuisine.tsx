import { useNavigate } from 'react-router-dom';

const Cuisine = () => {
  const navigate = useNavigate();
  const categories = [
    { name: 'Dishes', image: '/assets/dishes.jpg', path: '/dishes' },
    { name: 'Desserts', image: '/assets/desserts.jpg', path: '/desserts' },
    { name: 'Kakanin', image: '/assets/kakanin.jpg', path: '/kakanin' }
  ];

  return (
    <div className="content-wrapper">
      <div className="scroll-container">
        {categories.map((category) => (
          <div key={category.name} style={{ textAlign: 'center' }}>
            <button 
              className="category-button"
              onClick={() => navigate(category.path)}
            >
              <img src={category.image} alt={category.name} />
              <p className="item-name">{category.name}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cuisine;