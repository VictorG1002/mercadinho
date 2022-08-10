import React from 'react'
import { Container, ProductTable, Total } from './style'
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete
} from 'react-icons/md'
import { connect } from 'react-redux'

// import { Container } from './styles';

function Cart({ cart }) {
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
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} />
                <strong>{product.title}</strong>
                <span>{`R$${product.price}`}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#304d63" />
                  </button>
                  <input type="number" readyOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#304d63" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$258,80</strong>
              </td>
              <td>
                <button type="button">
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
          <strong>R$1920,20</strong>
        </Total>
      </footer>
    </Container>
  )
}

const mapStateToProps = state => ({
  cart: state.cart.products
})

export default connect(mapStateToProps)(Cart)
