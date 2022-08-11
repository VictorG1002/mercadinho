import React from 'react'
import { Container, ProductTable, Total } from './style'
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete
} from 'react-icons/md'
import { connect, useSelector } from 'react-redux'
import { store } from '../../store'
import { removeToCart } from '../../store/modules/cart/reducer'
import { updateAmount } from '../../store/modules/cart/reducer'
// import { Container } from './styles';

function Cart() {
  const priceFormatter = price => {
    price = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  const cart = useSelector(store => store.cart)
  const products = cart.products.map(product => ({
    ...product,
    subtotal: product.price * product.amount
  }))

  const total = cart.products.reduce((total, product) => {
    return total + product.price * product.amount
  }, 0)

  const handleRemoveProduct = product => {
    store.dispatch(removeToCart(product))
  }

  const increment = product => {
    store.dispatch(updateAmount({ id: product.id, amount: product.amount + 1 }))
  }

  const decrement = product => {
    store.dispatch(updateAmount({ id: product.id, amount: product.amount - 1 }))
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>SubTotal</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {products.map(product => (
            <tr>
              <td>
                <img src={product.image} />
                <strong>{product.title}</strong>
                <span>{`R$${product.price}`}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      if (product.amount > 1) decrement(product)
                    }}
                  >
                    <MdRemoveCircleOutline size={20} color="#304d63" />
                  </button>
                  <input type="number" readyOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#304d63" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{`R$ ${product.subtotal}`}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleRemoveProduct(product)}
                >
                  <MdDelete size={20} color="#304d63" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pediddo</button>
        <Total>
          <span>Total</span>
          <strong>{`R$ ${total}`}</strong>
        </Total>
      </footer>
    </Container>
  )
}

export default Cart
