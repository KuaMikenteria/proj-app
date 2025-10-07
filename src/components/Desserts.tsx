import { useNavigate } from 'react-router-dom';

const Desserts = () => {
  const navigate = useNavigate();
  const desserts = [
    { name: 'Shakoy', image: '/assets/desserts/shakoy.jpg', id: 'shakoy' },
    { name: 'Halo-halo', image: '/assets/desserts/halo-halo.jpg', id: 'halo-halo' },
    { name: 'Pili Nuts Candy', image: '/assets/desserts/pili-nuts-candy.jpg', id: 'pili-nuts-candy' },
    { name: 'Gunimis', image: '/assets/desserts/gunimis.jpg', id: 'gunimis' }
  ];

  return (
    <div className="content-wrapper">
      <div className="scroll-container">
        {desserts.map((dessert) => (
          <div key={dessert.id} style={{ textAlign: 'center' }}>
            <button 
              className="category-button"
              onClick={() => navigate(`/recipe/${dessert.id}`)}
            >
              <img src={dessert.image} alt={dessert.name} />
              <p className="item-name">{dessert.name}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desserts;