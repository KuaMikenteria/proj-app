import { useNavigate } from 'react-router-dom';

const Dishes = () => {
  const navigate = useNavigate();
  const dishes = [
    { name: 'Bicol Express', image: '/assets/dishes/bicol-express.jpg', id: 'bicol-express' },
    { name: 'Kinalas', image: '/assets/dishes/kinalas.jpg', id: 'kinalas' },
    { name: 'Kandingga', image: '/assets/dishes/kandingga.jpg', id: 'kandingga' },
    { name: 'Pancit Bato', image: '/assets/dishes/pancit-bato.jpg', id: 'pancit-bato' },
    { name: 'Kinunot', image: '/assets/dishes/kinunot.jpg', id: 'kinunot' }
  ];

  return (
    <div className="content-wrapper">
      <div className="scroll-container">
        {dishes.map((dish) => (
          <div key={dish.id} style={{ textAlign: 'center' }}>
            <button 
              className="category-button"
              onClick={() => navigate(`/recipe/${dish.id}`)}
            >
              <img src={dish.image} alt={dish.name} />
              <p className="item-name">{dish.name}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dishes;