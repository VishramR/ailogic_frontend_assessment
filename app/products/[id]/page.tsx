"use client"


import { product } from '@/data/product'
import { useAppdispatch } from '@/hooks/redux'
import { addToCart } from '@/lib/cartSlice'
import Link from 'next/link'
import { redirect, useParams } from 'next/navigation'
import React from 'react'

export default function ProductDetailsPage(){
  const params = useParams<{id:string}>()

  const dispatch = useAppdispatch()

  const id = Number(params.id)

  const pro = product.find(
    (item) => item.id === id
  )

  function handleAddToCart(){
    dispatch(addToCart(pro))
    redirect("/cart")
  }


  return (
    <div>
      <Link
      href="/products"
      >
      Back to products
      </Link>

      <div className='my-3'>
        <h1>{pro?.name}</h1>
        <p>{pro?.price}</p>
      </div>

      <button
      onClick={handleAddToCart}
      >Add to cart</button>
    </div>
  )
}