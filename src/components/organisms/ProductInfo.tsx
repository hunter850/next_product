import ProductInfoCard from "@/components/molecules/ProductInfoCard";
// types
import type { Product } from "@/components/organisms/ProductGrid";

interface VideoListProps {
    productInfo: Product;
}

export default function ProductInfo({ productInfo }: VideoListProps) {
    return (
        <div className="mt-8">
            <h2 className="mb-4 text-xl font-bold">商品詳細資訊</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <ProductInfoCard {...productInfo} />
            </div>
        </div>
    );
}
