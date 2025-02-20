import { Suspense } from "react";
import MainLayout from "@/components/templates/MainLayout";
import ProductGrid from "@/components/organisms/ProductGrid";
import CardSkeleton from "@/components/molecules/CardSkeleton";

function LoadingGrid() {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Array.from({ length: 15 }).map((_, index) => (
                <CardSkeleton key={index} />
            ))}
        </div>
    );
}

export default async function Home() {
    return (
        <MainLayout>
            <main className="container mx-auto px-4 pt-4">
                <Suspense fallback={<LoadingGrid />}>
                    <ProductGrid />
                </Suspense>
            </main>
        </MainLayout>
    );
}
