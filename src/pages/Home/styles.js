import styled from 'styled-components'

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
    padding: 50px 123px 37px;

    header {
      display: flex;
      justify-content: space-between;

      h1 {
        font-size: 32px;
        font-weight: 400;
      }
    }
  }
`

export const ButtonAdd = styled.button`
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
