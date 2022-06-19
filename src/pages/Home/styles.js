import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';

  > section {
    grid-area: content;
    padding: 50px 123px 0;

    overflow: auto;

    header {
      display: flex;
      justify-content: space-between;

      h1 {
        font-size: 32px;
        font-weight: 400;
      }
    }

    > main {
      width: 100%;
      height: 470px;
      margin-top: 37px;
      overflow-y: auto;

      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }
`

export const ButtonAdd = styled(Link)`
  font-size: 16px;
  padding: 13px 32px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.GRAY_500};

  display: flex;
  align-items: center;
  gap: 8px;

  > svg {
    font-size: 20px;
  }
`
