'use client';

import { useEffect, useState } from 'react';

interface Category {
  label: string;
  value: string;
  isActive: boolean;
}

interface CategoryProps {
  onCategoryChange: (category: string) => void;
}

export default function Category({ onCategoryChange }: CategoryProps) {
  const [blogCategory, setBlogCategory] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('/api/category')
      .then((res) => res.json())
      .then((data) => {
        setBlogCategory(data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleCategoryClick = (categoryValue: string) => {
    setSelectedCategory(categoryValue);
    onCategoryChange(categoryValue);
  };

  if (blogCategory.length === 0) {
    return null; // blogCategory가 비어 있을 때 빈 값을 반환
  }

  return (
    <ul className="category flex gap-2 mb-12">
      {blogCategory.map((category, index) => (
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
            onClick={() => handleCategoryClick(category.value)}
          >
            {category.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
