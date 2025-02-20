import { Card } from "@/components/ui/card";
import Image from "next/image";
// types
import type { Product } from "@/types";
import { Star } from "lucide-react";

export default function ProductInfoCard(props: Product) {
    const { title, image, price, rating, description } = props;

    return (
        <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="space-y-2 p-4">
                <h3 className="group-hover:text-primary line-clamp-2 font-medium">{title}</h3>
                <p className="line-clamp-2 text-sm text-gray-600">{description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">${price.toFixed(2)}</span>
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{rating.rate}</span>
                        <span className="text-xs text-gray-500">({rating.count})</span>
                    </div>
                </div>
            </div>
        </Card>
    );
}
