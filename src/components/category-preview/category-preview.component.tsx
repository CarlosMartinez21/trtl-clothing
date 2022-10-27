import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles.jsx";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";
import { CategoryItem } from "../../store/categories/category.types.js";
import { FC } from "react";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={`/shop/${title}`}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
