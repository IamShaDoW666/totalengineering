import AllProducts from "../../_components/all-products";
import { api, HydrateClient } from "@/trpc/server";
const ProductsPage = async () => {
  void api.product.getAll.prefetch();
  void api.category.getAll.prefetch();
  return (
    <HydrateClient>
      <main className="pt-24">
        <AllProducts />
      </main>
    </HydrateClient>
  );
};

export default ProductsPage;
