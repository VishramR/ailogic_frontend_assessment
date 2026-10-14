"use client"


import { useAppdispatch, useAppSelector } from '@/hooks/redux'
import { clearCart, removeFromCart } from '@/lib/cartSlice'
import Link from 'next/link'
import React from 'react'

export default function CartPage() {

  const items = useAppSelector(
    (state)=> state.cart.items
  )

  const dispatch = useAppdispatch()

  const totalQuantity = items.reduce(
    (total, item) => total + item.quantity, 0
  )

  if(items.length === 0){
    return(
      <>
      <p>Cart is empty</p>
      <Link href="/products">Back to products</Link>
      </>
    )
  }


  return (
    <>
    <div>
      <h1>Your cart</h1>
      <Link href="/products">Back to products</Link>
      <p>Total items: {totalQuantity}</p>
    
    {items.map(({product, quantity}) => (
      <div key={product.id} className='my-3'>
          <h3>{product.name}</h3>
          <p>{product.price}</p>

          <div>
            <button
            onClick={() => dispatch(
              removeFromCart(product.id)
            )}
            >
              Remove
            </button>
            <button
            onClick={() => 
              dispatch(
                clearCart()
              )
            }
            >Clear</button>
          </div>
      </div>
    ))}
    </div>
    </>
  )
}

