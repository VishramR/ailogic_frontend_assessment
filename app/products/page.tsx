"use client"

import React, { useMemo, useState } from 'react'

import {product} from "@/data/product"
import { ProductCard } from '@/components/ProductCard';
import { useAppdispatch } from '@/hooks/redux';
import { addToCart } from '@/lib/cartSlice';
import { redirect } from 'next/navigation';

type Product = {
    image: string;
    name: string;
    price: number;
}



const Product = () => {

    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("All") 
    const dispatch = useAppdispatch()
    // const [products, setProducts] = useState<Product[]>([])
    
    const filteredProducts = useMemo(() => {
      return product.filter((pro) => {
        const matchesSearch = pro.name.
        toLowerCase()
        .includes(search.toLowerCase())
        return matchesSearch
      })

      
    }, [search])

   
    return (
    <>
    <div>
      <h1>Products</h1>

      <div>
      <input type="text" placeholder='Search' 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      </div>

      <div className='mt-3'>
      {filteredProducts.map((product) => (
        <ProductCard
        key={product.id}
        product={product}
        />
      ))}
      </div>
    </div>
    </>
  )
}

export default Product