import { notFound } from "next/navigation";
import ProductInfo from "@/components/organisms/ProductInfo";
import { API_URLS } from "@/configs/api_config";
// types
import type { Product } from "@/types";
import type { TalentPageProps } from "@/app/product/[id]/page";

async function getData(id: string) {
    try {
        const productResponse = await fetch(`${API_URLS.PRODUCTS}/${id}`, {
            next: { revalidate: 60 },
        });

        if (!productResponse.ok) {
            notFound();
        }

        const productData = (await productResponse.json()) as Product;

        return productData;
    } catch {
        notFound();
    }
}

export default async function TalentPage({ params }: TalentPageProps) {
    const { id } = await params;
    const product = await getData(id);

    return (
        <>
            <ProductInfo productInfo={product} />
        </>
    );
}
