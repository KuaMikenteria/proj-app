import { useParams } from 'react-router-dom';
import './Dishes.css';

type Dish = {
  id: string;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  cookTime: string;
};

const dishes: Record<string, Dish> = {
  'bicol-express': {
    id: 'bicol-express',
    title: 'Bicol Express',
    description: 'Spicy pork stew in coconut milk with chili peppers',
    image: '/assets/images/dishes/bicol-express.jpg',
    ingredients: [
      '1 tbsp cooking oil',
      '1 onion, chopped',
      '8 cloves garlic, minced',
      '2 tbsp shrimp paste',
      '½ kg pork belly, sliced',
      '1 pack Knorr Ginataang Gulay + 1½ cups water',
      '6 green chilies, sliced'
    ],
    instructions: [
      'Heat oil and sauté onions, garlic, and shrimp paste',
      'Add pork and cook until lightly browned',
      'Pour in coconut milk mixture and bring to boil',
      'Simmer for 30 minutes until pork is tender',
      'Add chilies and cook for 5 more minutes',
      'Serve hot with steamed rice'
    ],
    prepTime: '15 mins',
    cookTime: '40 mins'
  },
  'kinalas': {
    id: 'kinalas',
    title: 'Kinalas',
    description: 'Bicolano noodle soup with tender beef and rich gravy',
    image: '/assets/images/dishes/kinalas.jpg',
    ingredients: [
      '1 kg beef shank',
      '1 onion, quartered',
      '2 tbsp salt',
      '1 tbsp peppercorns',
      '500g egg noodles',
      '½ cup flour',
      '1 tbsp fish sauce',
      'Hard-boiled eggs (garnish)'
    ],
    instructions: [
      'Boil beef shank for 1.5 hours until tender',
      'Strain broth and shred beef',
      'Make gravy by browning flour then adding broth',
      'Cook noodles in beef broth',
      'Assemble bowls with noodles, beef, and gravy',
      'Garnish with eggs and spring onions'
    ],
    prepTime: '20 mins',
    cookTime: '2 hours'
  }
};

export default function Dishes() {
  const { id } = useParams();
  const dish = id ? dishes[id] : null;

  if (!dish) {
    return <div className="error">Dish not found</div>;
  }

  return (
    <div className="dish-container">
      <img 
        src={dish.image} 
        alt={dish.title}
        className="dish-image"
      />
      <h1>{dish.title}</h1>
      <p className="description">{dish.description}</p>
      
      <div className="meta">
        <span>⏱ Prep: {dish.prepTime}</span>
        <span>🍳 Cook: {dish.cookTime}</span>
      </div>

      <h2>Ingredients</h2>
      <ul className="ingredients">
        {dish.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ol className="instructions">
        {dish.instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}