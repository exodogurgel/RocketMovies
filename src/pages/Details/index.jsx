import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header'
import { Ratings } from '../../components/Ratings'
import { ButtonText } from '../../components/ButtonText'
import { Container, Content } from './styles'
import { FiClock, FiArrowLeft } from 'react-icons/fi';


export function Details() {
  return(
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText icon={FiArrowLeft} title="Voltar"/>
          <div className="info">
            <div className="title-rating">
              <h1>Interestellar</h1>
              <Ratings rating={4} />
            </div>
            <div className="author-date">
              <div className="author">
                <img src="https://github.com/exodogurgel.png" alt="Foto do usuário" />
                <p>Por Êxodo Gurgel</p>
              </div>
              <div className="date">
                <FiClock />
                <span>
                  23/05/22 às 08:00
                </span>
              </div>
            </div>
            <div className="tags">
              <Tag title="Ficção Cientifica"/>
              <Tag title="Drama"/>
              <Tag title="Familia"/>
            </div>
          </div>

        </Content>
      </main>
    </Container>
  )
}