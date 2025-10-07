import { useParams } from 'react-router-dom';
import './Desserts.css';

type Dessert = {
  id: string;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  cookTime: string;
};

const desserts: Record<string, Dessert> = {
  'shakoy': {
    id: 'shakoy',
    title: 'Shakoy',
    description: 'Twisted fried donuts with crispy golden exterior and soft interior',
    image: '/assets/images/desserts/shakoy.jpg',
    ingredients: [
      '3 cups all-purpose flour',
      '¼ cup white sugar',
      '½ tsp salt',
      '1 cup lukewarm milk',
      '1 beaten egg',
      '2 tbsp melted butter',
      '2 tsp instant yeast',
      '2-3 cups oil for frying',
      '½ cup sugar (coating)'
    ],
    instructions: [
      'Mix dry ingredients in a bowl',
      'Add wet ingredients to form dough',
      'Knead for 7-10 minutes until smooth',
      'Let rise for 1 hour until doubled',
      'Divide into 16 pieces and twist',
      'Fry in hot oil until golden brown',
      'Roll in sugar while warm'
    ],
    prepTime: '1 hour 30 mins',
    cookTime: '30 mins'
  },
  'halo-halo': {
    id: 'halo-halo',
    title: 'Halo-Halo',
    description: 'Iconic layered Filipino shaved ice dessert',
    image: '/assets/images/desserts/halo-halo.jpg',
    ingredients: [
      '1 cup shaved ice',
      '2 tbsp sweetened beans',
      '1 tbsp macapuno strings',
      '1 tbsp nata de coco',
      '1 scoop ube ice cream',
      '2 tbsp leche flan',
      '3 tbsp evaporated milk'
    ],
    instructions: [
      'Layer ingredients in tall glass',
      'Add shaved ice',
      'Top with ice cream and leche flan',
      'Drizzle with evaporated milk',
      'Mix before eating'
    ],
    prepTime: '15 mins',
    cookTime: '5 mins'
  }
};

export default function Desserts() {
  const { id } = useParams();
  const dessert = id ? desserts[id] : null;

  if (!dessert) {
    return <div className="error">Dessert not found</div>;
  }

  return (
    <div className="dessert-container">
      <img 
        src={dessert.image} 
        alt={dessert.title}
        className="dessert-image"
      />
      <h1>{dessert.title}</h1>
      <p className="description">{dessert.description}</p>
      
      <div className="meta">
        <span>⏱ Prep: {dessert.prepTime}</span>
        <span>🍳 Cook: {dessert.cookTime}</span>
      </div>

      <h2>Ingredients</h2>
      <ul className="ingredients">
        {dessert.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ol className="instructions">
        {dessert.instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}