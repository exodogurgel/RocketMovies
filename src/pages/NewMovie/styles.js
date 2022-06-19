import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    .input-values {
      display: flex;
      gap: 40px;
    }

    .tags {
      width: 100%;
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 24px;
      flex-wrap: wrap;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      border-radius: 8px;
    }
  }
`

export const Form = styled.form`
  grid-area: content;
  padding: 40px 123px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  > header {
    h1 {
      margin-top: 24px;
      font-size: 36px;
      font-weight: 500;
    }
  }
`
