import React, { useEffect, useState } from 'react'
import { ProductList } from './style'
import { MdAddShoppingCart, MdApi } from 'react-icons/md'
import api from '../../services/api'

// import { Container } from './styles';

function Home() {
  const [products, setProducts] = useState([])

  const getResponse = async () => {
    const response = await api.get('products')
    setProducts(response.data)
  }

  useEffect(() => {
    getResponse()
  }, [])
  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src="https://saude.abril.com.br/wp-content/uploads/2021/04/alimentacao-fruta-feia-Betka82-Getty-Images.png" />
          <strong>{product.title}</strong>
          <span>{`R$ ${product.price}`}</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff" /> 3
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}

export default Home
