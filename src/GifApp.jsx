import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifApp = () => {
  const [categories, setCategories] = useState(['one piece']);

  const onAddNewCategory = (newCategory) => {
    let lowerCategories = categories.map((category) =>
      category.toLowerCase()
    );
    if (lowerCategories.includes(newCategory.toLowerCase())) return;
    setCategories([newCategory.toLowerCase(), ...categories]);
  };

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory
        onAddNewCategory={(value) => onAddNewCategory(value)}
      />

      {categories.map((category) => (
        <div key={category}>
          <GifGrid category={category} />
        </div>
      ))}
    </>
  );
};
