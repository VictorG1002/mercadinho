import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  background: #fff;
  display: flex;
  padding: 30px;
  box-shadow: 2px 5px 5px RGBA(0, 0, 0, 0.24);
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #304d63;
  }
`

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: rigt;
    margin-right: 10px;

    strong {
      display: block;
      color: #304d63;
    }

    span {
      font-size: 12px;
      color: #898;
    }
  }
`
