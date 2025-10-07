import { useParams } from 'react-router-dom';
import './Kakanin.css';

type Kakanin = {
  id: string;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  cookTime: string;
};

const kakaninRecipes: Record<string, Kakanin> = {
  'sinapot': {
    id: 'sinapot',
    title: 'Sinapot',
    description: 'Bicolano sticky banana fritters ("pinag dikit-dikit na saging") - a favorite mirienda (snack)',
    image: '/assets/images/kakanin/sinapot.jpg',
    ingredients: [
      '12 ripe saba bananas (cut diagonally)',
      '½ cup all-purpose flour',
      '1 cup ice water',
      '1 cup cooking oil',
      '½ cup sugar (for coating)',
      '1 tsp cinnamon (optional)'
    ],
    instructions: [
      'Mix flour and ice water to make a smooth batter',
      'Dip banana slices in the batter to coat completely',
      'Heat oil to 350°F (175°C) in a heavy pan',
      'Fry 4-5 slices at a time, gently pressing them together',
      'Cook for 3-4 minutes until golden brown',
      'Flip and fry the other side until equally golden',
      'Drain on paper towels',
      'Roll in sugar mixture while warm'
    ],
    prepTime: '15 mins',
    cookTime: '25 mins'
  },
  'binutong': {
    id: 'binutong',
    title: 'Binutong',
    description: 'Sticky rice cooked in banana leaves with coconut milk',
    image: '/assets/images/kakanin/binutong.jpg',
    ingredients: [
      '2 cups glutinous rice',
      '1 cup coconut milk',
      '1 tsp salt',
      'Banana leaves (for wrapping)',
      'Kitchen twine'
    ],
    instructions: [
      'Soak rice for 30 minutes, then drain',
      'Mix rice with coconut milk and salt',
      'Prepare banana leaf wrappers',
      'Scoop rice mixture onto leaves',
      'Fold and tie securely with twine',
      'Steam for 45-50 minutes',
      'Serve warm with ripe mangoes'
    ],
    prepTime: '40 mins',
    cookTime: '50 mins'
  }
};

export default function Kakanin() {
  const { id } = useParams();
  const kakanin = id ? kakaninRecipes[id] : null;

  if (!kakanin) {
    return <div className="error">Kakanin not found</div>;
  }

  return (
    <div className="kakanin-container">
      <img 
        src={kakanin.image} 
        alt={kakanin.title}
        className="kakanin-image"
      />
      <h1>{kakanin.title}</h1>
      <p className="description">{kakanin.description}</p>
      
      <div className="meta">
        <span>⏱ Prep: {kakanin.prepTime}</span>
        <span>🍳 Cook: {kakanin.cookTime}</span>
      </div>

      <h2>Ingredients</h2>
      <ul className="ingredients">
        {kakanin.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ol className="instructions">
        {kakanin.instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}