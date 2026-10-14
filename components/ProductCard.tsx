import { useAppdispatch } from "@/hooks/redux"
import { addToCart } from "@/lib/cartSlice"
import { Product } from "@/types/types"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"



export function ProductCard({
    product
} :{
    product: Product
}){
    const dispatch = useAppdispatch()

     function handleAddToCart(product){
        dispatch(addToCart(product))
        redirect("/cart")
      }

    return(
        <>
        <div className="mb-3">
        {/* <Image
        src={product.image}
        alt={product.name}
        width={800}
        height={600}
        unoptimized
        /> */}

        <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>

        <div>
            <Link
            href={`/products/${product.id}`}
            >
            Details
            </Link>

            <button 
            onClick={() => handleAddToCart(product)}
            >Add to cart</button>
        </div>
        </div>
        </>
    )
}