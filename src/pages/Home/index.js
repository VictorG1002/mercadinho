import React, { useEffect, useState } from 'react'
import { ProductList } from './style'
import { MdAddShoppingCart, MdApi } from 'react-icons/md'
import api from '../../services/api'
import { addToCart } from '../../store/modules/cart/reducer'
import { store } from '../../store'

function Home() {
  const [products, setProducts] = useState([])

  const getResponse = async () => {
    const response = await api.get('products')
    setProducts(response.data)
  }

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
          <span>{`R$ ${product.price}`}</span>

          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}

export default Home
