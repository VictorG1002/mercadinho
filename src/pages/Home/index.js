import React from 'react'
import { ProductList } from './style'
import { MdAddShoppingCart } from 'react-icons/md'

// import { Container } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://saude.abril.com.br/wp-content/uploads/2021/04/alimentacao-fruta-feia-Betka82-Getty-Images.png" />
        <strong>Fruta zarolha</strong>
        <span>15,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://saude.abril.com.br/wp-content/uploads/2021/04/alimentacao-fruta-feia-Betka82-Getty-Images.png" />
        <strong>Fruta zarolha</strong>
        <span>15,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://saude.abril.com.br/wp-content/uploads/2021/04/alimentacao-fruta-feia-Betka82-Getty-Images.png" />
        <strong>Fruta zarolha</strong>
        <span>15,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://saude.abril.com.br/wp-content/uploads/2021/04/alimentacao-fruta-feia-Betka82-Getty-Images.png" />
        <strong>Fruta zarolha</strong>
        <span>15,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://saude.abril.com.br/wp-content/uploads/2021/04/alimentacao-fruta-feia-Betka82-Getty-Images.png" />
        <strong>Fruta zarolha</strong>
        <span>15,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://saude.abril.com.br/wp-content/uploads/2021/04/alimentacao-fruta-feia-Betka82-Getty-Images.png" />
        <strong>Fruta zarolha</strong>
        <span>15,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  )
}

export default Home
