import React, { useState } from "react";
import content from "../../../data/content.json";

const { categories, titleCategory } = content.jobs;

const CategoryFilter: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const toggleCategory = (id: number) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((cat) => cat !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="font-bold mb-2">{titleCategory}</h3>
      <ul className="space-y-1">
        {categories.map((category) => (
          <li key={category.id}>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-purple-500"
                checked={selectedCategories.includes(category.id)}
                onChange={() => toggleCategory(category.id)}
              />
              <span>{category.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
