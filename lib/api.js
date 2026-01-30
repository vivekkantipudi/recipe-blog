// lib/api.js

// 1. Define your data directly here
const MOCK_RECIPES = [
  {
    sys: { id: '1', createdAt: '2023-01-01' },
    fields: {
      slug: 'classic-spanish-paella',
      title: 'Classic Spanish Paella',
      description: 'A traditional seafood dish from Valencia that brings people together.',
      ingredients: ['Rice', 'Saffron', 'Shrimp', 'Chicken', 'Peas'],
      instructions: '1. Fry the chicken until golden. 2. Add the rice and saffron. 3. Pour in the broth and simmer. 4. Top with shrimp and cook until pink.',
      category: 'Dinner',
      featured: true,
      image: { 
        fields: { 
          file: { 
            url: '//placehold.co/600x400/orange/white?text=Paella', 
            details: { image: { width: 600, height: 400 } } 
          } 
        } 
      }
    }
  },
  {
    sys: { id: '4', createdAt: '2023-01-04' },
    fields: {
      slug: 'spicy-chicken-curry',
      title: 'Spicy Chicken Curry',
      description: 'A rich and aromatic curry with tender chicken and fresh spices.',
      ingredients: ['Chicken Breast', 'Coconut Milk', 'Curry Powder', 'Onion', 'Garlic', 'Ginger'],
      instructions: '1. Sauté onion, garlic, and ginger. 2. Add chicken and brown. 3. Stir in curry powder. 4. Pour in coconut milk and simmer until cooked.',
      category: 'Dinner',
      featured: true,
      image: { 
        fields: { 
          file: { 
            url: '//placehold.co/600x400/yellow/black?text=Chicken+Curry', 
            details: { image: { width: 600, height: 400 } } 
          } 
        } 
      }
    }
  },
  {
    sys: { id: '2', createdAt: '2023-01-02' },
    fields: {
      slug: 'french-croissant',
      title: 'Buttery French Croissant',
      description: 'Flaky, buttery, and delicious authentic French pastry.',
      ingredients: ['Flour', 'Butter', 'Yeast', 'Milk', 'Sugar'],
      instructions: '1. Mix the dough and let it rise. 2. Fold in the butter layers carefully. 3. Shape into crescents. 4. Bake at 200°C until golden brown.',
      category: 'Breakfast',
      featured: true,
      image: { 
        fields: { 
          file: { 
            url: '//placehold.co/600x400/brown/white?text=Croissant', 
            details: { image: { width: 600, height: 400 } } 
          } 
        } 
      }
    }
  },
  {
    sys: { id: '3', createdAt: '2023-01-03' },
    fields: {
      slug: 'vegan-avocado-toast',
      title: 'Zesty Avocado Toast',
      description: 'A quick and healthy breakfast with a kick of lime.',
      ingredients: ['Sourdough Bread', 'Avocado', 'Lime', 'Chili Flakes', 'Salt'],
      instructions: '1. Toast the bread. 2. Mash the avocado with lime juice. 3. Spread on toast. 4. Sprinkle with chili flakes.',
      category: 'Breakfast',
      featured: false,
      image: { 
        fields: { 
          file: { 
            url: '//placehold.co/600x400/green/white?text=Avocado+Toast', 
            details: { image: { width: 600, height: 400 } } 
          } 
        } 
      }
    }
  }
];

// 2. These functions now just return the array above
export async function getAllRecipes(locale = 'en') {
  // In a real app, you would filter by locale here
  return MOCK_RECIPES;
}

export async function getRecipeBySlug(slug, locale = 'en') {
  return MOCK_RECIPES.find(r => r.fields.slug === slug);
}