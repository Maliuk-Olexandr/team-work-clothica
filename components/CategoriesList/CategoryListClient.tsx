//CategoriesList/CategoryListClient.tsx
'use client';

import Image from 'next/image';
import css from './CategoriesList.module.css';
import { Category } from '@/types/category';
import { useRouter } from 'next/navigation';

export default function CategoryListClient({
  categories,
}: {
  categories: Category[];
}) {
  const router = useRouter();

  const enriched = categories.map(cat => ({
    ...cat,
    image: `/categories/${cat._id}.webp`,
  }));

  const handleClick = (id: string) => {
    router.push(`/goods?category=${id}`);
  };

  return (
    <ul>
      {enriched.map(category => (
        <li
          key={category._id}
          className={css.itemCategoriesList}
          onClick={() => handleClick(category._id)}
          role="button"
          style={{ cursor: 'pointer' }}>
          <Image
            src={category.image}
            alt={category.name}
            width={416}
            height={277}
            className={css.image}
          />
          <h3 className={css.titleCategoriesList}>{category.name}</h3>
        </li>
      ))}
    </ul>
  );
}
