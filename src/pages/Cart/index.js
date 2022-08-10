import React from 'react'
import { Container, ProductTable, Total } from './style'
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete
} from 'react-icons/md'

// import { Container } from './styles';

function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>SubTotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://saude.abril.com.br/wp-content/uploads/2021/04/alimentacao-fruta-feia-Betka82-Getty-Images.png" />
              <strong>Fruta zarolha</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#304d63" />
                </button>
                <input type="number" readyOnly value={2} />
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

export default Cart
