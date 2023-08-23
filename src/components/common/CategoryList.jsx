import { categories } from "../../data/data";

const CategoryList = () => {
  return (
    <div className="categories-list scrollbar-x">
      {categories.map((category, idx) => (
        <a
          href="#"
          className="category-item text text-base border-radius-6 flex no-wrap items-center active"
          key={idx}
        >
          {category}
        </a>
      ))}
    </div>
  );
};

export default CategoryList;
