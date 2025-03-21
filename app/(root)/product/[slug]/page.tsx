import ProductPrice from "@/components/shared/product/product-price";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getSingleProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";

const ProductDetailPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  const product = await getSingleProductBySlug(slug);
  if (!product) return notFound();

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Images */}
          <div className="col-span-2">{/* ImagesComponent */}</div>

          {/* Product Details */}
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className="h3-bold"> {product.name}</h1>
              <p>
                {" "}
                {product.rating} ({product.numReviews} отзывов)
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <ProductPrice
                  value={Number(product.price)}
                  className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
                />
              </div>
            </div>

            <div className="mt-10">
              <p className="font-semibold">Описание</p>
              <p>{product.description}</p>
            </div>
          </div>

          <div>
            <div>
              <Card>
                <CardContent className="p-4">
                  <div className="mb-2 flex  justify-between">
                    <div>Цена</div>
                    <div>
                      <ProductPrice value={Number(product.price)} />
                    </div>
                  </div>
                  <div className="mb-2 flex  justify-between">
                    <div>Статус</div>
                    <div>
                      {product.stock > 0 ? (
                        <Badge variant={"outline"}> В наличии</Badge>
                      ) : (
                        <Badge variant={"destructive"}> Нет в наличии</Badge>
                      )}
                    </div>
                  </div>
                  {product.stock > 0 && (<Button className="w-full">Добавить в корзину</Button>) }
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
