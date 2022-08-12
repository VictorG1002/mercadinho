import React from 'react'
import { Link } from 'react-router-dom'
import { Bar, Cart, Container } from './style'
import { MdOutlineShoppingCart, MdShoppingBasket } from 'react-icons/md'
import { useSelector } from 'react-redux'

// import { Container } from './styles';

function Header() {
  const cart = useSelector(store => store.cart)
  const Amount = cart.products.length

  return (
    <Container>
      <Link to="/">
        <h1>Mercadinho PontaVerde</h1>
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{Amount} itens</span>
        </div>
        <MdOutlineShoppingCart size={36} color="#4b9a90" />
      </Cart>
    </Container>
  )
}

export default Header
