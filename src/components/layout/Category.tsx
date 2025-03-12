'use client';

interface Category {
  label: string;
  value: string;
  isActive: boolean;
}

import { useEffect, useState } from 'react';

interface CategoryProps {
  onCategoryChange: (category: string) => void;
}

export default function Category({ onCategoryChange }: CategoryProps) {
  const [blogCatgory, setBlogCategory] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('/api/category')
      .then((res) => res.json())
      .then((data) => setBlogCategory(data));
  }, []);

  const handleCategoryClick = (categoryValue: string) => {
    setSelectedCategory(categoryValue);
    onCategoryChange(categoryValue);
  };

  return (
    <ul className="category flex gap-2 mb-12">
      {blogCatgory.map((category, index) => (
        <li key={index}>
          <button
            type="button"
            value={category.value}
            className={[
              'border-gray-300',
              'border',
              'px-4',
              'h-10',
              'rounded-md',
              `${selectedCategory === category.value ? 'bg-sky-700 text-white' : ''}`,
            ].join(' ')}
            onClick={() => {
              handleCategoryClick(category.value);
            }}
          >
            {category.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
