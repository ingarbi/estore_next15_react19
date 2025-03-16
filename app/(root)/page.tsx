import ProductList from "@/components/shared/product/product-list";

import { getLatestProducts } from "@/lib/actions/product.actions";

export const metadata = {
  title: "Главная",
};

const HomePage = async () => {
  const latestProducts = await getLatestProducts()
  return (
    <ProductList
      data={latestProducts}
      title="Новые поступления"
      limit={4}
    />
  );
};

export default HomePage;
