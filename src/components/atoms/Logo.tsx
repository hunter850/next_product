import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex cursor-pointer items-center gap-2">
                <h1 className="text-2xl font-bold">
                    <span className="text-primary">Fake</span>Cart
                </h1>
            </div>
        </Link>
    );
}
