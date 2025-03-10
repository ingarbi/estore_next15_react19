import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

export const metadata = {
  title: "Главная",
};

const HomePage = () => {
  return (
    <ProductList
      data={sampleData.products}
      title="Новые поступления"
      limit={4}
    />
  );
};

export default HomePage;
