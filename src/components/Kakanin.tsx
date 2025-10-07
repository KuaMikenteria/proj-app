import { useNavigate } from 'react-router-dom';

const Kakanin = () => {
  const navigate = useNavigate();
  const kakaninItems = [
    { name: 'Sinapot', image: '/assets/kakanin/sinapot.jpg', id: 'sinapot' },
    { name: 'Tabog-tabog', image: '/assets/kakanin/tabog-tabog.jpg', id: 'tabog-tabog' },
    { name: 'Binutong', image: '/assets/kakanin/binutong.jpg', id: 'binutong' },
    { name: 'Puto Bukayo', image: '/assets/kakanin/puto-bukayo.jpg', id: 'puto-bukayo' },
    { name: 'Linubak', image: '/assets/kakanin/linubak.jpg', id: 'linubak' }
  ];

  return (
    <div className="content-wrapper">
      <div className="scroll-container">
        {kakaninItems.map((item) => (
          <div key={item.id} className="kakanin-item">
            <button 
              className="category-button"
              onClick={() => navigate(`/recipe/${item.id}`)}
            >
              <img src={item.image} alt={item.name} />
              <p className="item-name">{item.name}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kakanin;