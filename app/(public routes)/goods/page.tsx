import css from './GoodsPage.module.css';
export default function GoodsPage() {
  return (
    <div className={css.container}>
      <h1>Goods Page</h1>
      {/* Goods listing and other components would go here */}
    </div>
  );
}

// export default function GoodsPage({ searchParams }: { searchParams: any }) {
//   const categoryId = searchParams.category;

//   // виклик API з фільтром
//   const goods = await fetchGoods({ category: categoryId });

//   return <GoodsList goods={goods} />;
// }