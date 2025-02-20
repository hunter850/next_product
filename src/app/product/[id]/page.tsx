import ProductInfoPage from "@/components/pages/ProductInfoPage";
import { Suspense } from "react";
import ProductDetailSkeleton from "@/components/molecules/ProductDetailSkeleton";

export interface TalentPageProps {
    params: Promise<{ id: string }>;
}

export default async function TalentPage({ params }: TalentPageProps) {
    return (
        <>
            <Suspense fallback={<ProductDetailSkeleton />}>
                <ProductInfoPage params={params} />
            </Suspense>
        </>
    );
}
