import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
// types
import type { Product } from "@/types";

export interface Temp {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export default function ProductCard({ id, title, price, image, description }: Product) {
    return (
        <Link href={`/product/${id}`} className="h-full">
            <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative aspect-square">
                    <Image
                        src={image}
                        alt={description}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    />
                    {/* Live 標籤暫時隱藏，等 API 完成後再啟用
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
            Live
          </div>
          */}
                </div>
                <div className="flex flex-1 flex-col p-3">
                    <h3 className="line-clamp-2 font-medium">{title}</h3>
                    <p className="text-muted-foreground mt-1 line-clamp-1 text-sm">{price}</p>
                </div>
            </Card>
        </Link>
    );
}
