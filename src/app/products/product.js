"use client"

import Link from "next/link";

const Product = ({ product }) => {

    return (
        <div className="px-4 py-2 basis-[calc(25%-12px)]  bg-[#cee0e6] rounded-lg">
            <Link href={product.link} className="flex flex-col items-center gap-y-3 w-full">
                <h3 className="text-xl text-black">{product.name}</h3>
                <span className="pb- border-b-2 border-solid border-black text-lg text-black">{product.price}</span>
            </Link>
        </div>
    );
}

export default Product;