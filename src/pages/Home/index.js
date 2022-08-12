import React, { useEffect, useState } from 'react'
import { ProductList } from './style'
import { MdAddShoppingCart, MdApi } from 'react-icons/md'
import api from '../../services/api'
import { addToCart } from '../../store/modules/cart/reducer'
import { store } from '../../store'
import { useSelector } from 'react-redux'

function Home() {
  const cart = useSelector(state => state.cart)
  const [products, setProducts] = useState([])

  const getResponse = async () => {
    const response = await api.get('products')
    setProducts(response.data)
  }
  const priceFormatter = price =>
    price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

  const handleAddProduct = product => {
    store.dispatch(addToCart(product))
  }

  useEffect(() => {
    getResponse()
  }, [])

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} />
          <strong>{product.title}</strong>
          <span>{priceFormatter(product.price)}</span>

          <button type="button" onClick={() => handleAddProduct(product)}>
            <div></div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}

export default Home
