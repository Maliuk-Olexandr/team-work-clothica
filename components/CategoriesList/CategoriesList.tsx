//CategoriesList.tsx;

import { fetchCategories } from '@/lib/api/serverApi';
import CategoryListClient from './CategoryListClient';

export default async function CategoriesList() {
  const { categories } = await fetchCategories({
    page: 1,
    perPage: 4,
  });

  return <CategoryListClient categories={categories} />;
}
