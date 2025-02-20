import ProductCard from "@/components/molecules/ProductCard";
import { API_URLS } from "@/configs/api_config";
// types
import type { Product } from "@/types";

async function getTalents() {
    const response = await fetch(API_URLS.PRODUCTS, {
        next: { revalidate: 60 }, // 每分鐘重新驗證數據
    });
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    const data: Product[] = await response.json();

    return data;
}

export default async function ProductGrid() {
    const products = await getTalents();

    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
}
