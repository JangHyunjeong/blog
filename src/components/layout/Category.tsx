'use client';

interface Category {
  label: string;
  value: string;
  isActive: boolean;
}

import { useEffect, useState } from 'react';

export default function Category() {
  const [blogCatgory, setBlogCategory] = useState<Category[]>([]);

  useEffect(() => {
    fetch('/api/category')
      .then((res) => res.json())
      .then((data) => setBlogCategory(data));
  }, []);

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
              `${category.isActive ? 'bg-sky-700 text-white' : ''}`,
            ].join(' ')}
            onClick={() => {
              setBlogCategory((prevCategories) =>
                prevCategories.map((cat, i) =>
                  i === index ? { ...cat, isActive: true } : { ...cat, isActive: false },
                ),
              );
            }}
          >
            {category.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
