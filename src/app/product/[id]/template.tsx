import { Suspense } from "react";
import ProductDetailSkeleton from "@/components/molecules/ProductDetailSkeleton";

export default function Template({ children }: { children: React.ReactNode }) {
    return <Suspense fallback={<ProductDetailSkeleton />}>{children}</Suspense>;
}
