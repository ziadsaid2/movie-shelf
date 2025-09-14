import Carousel from 'react-bootstrap/Carousel';
import './carasoul.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DarkVariantExample() {
  return (
    <>
      <Container>
        <Row>
          <Col>  <Carousel className="carousel-container">
            <Carousel.Item>
              <img
                className="carousel-item"
                src="https://twinfinite.net/wp-content/uploads/2023/11/why-did-mikasa-kill-eren-attack-on-titan.jpg?w=1200"
                alt="first slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-item"
                src="https://th.bing.com/th/id/R.17fb76bfed80acd0e60c70044065fa98?rik=ZXvvSJaymQNuFw&riu=http%3a%2f%2fassets.rpgsite.net%2fimages%2fimages%2f000%2f048%2f307%2foriginal%2fAttackOnTitan_08.jpg&ehk=UBaSZBOnlQfX98thkHsngHbanVg2ynn1huMu9Xo0cME%3d&risl=&pid=ImgRaw&r=0"
                alt="second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-item"
                src="https://www.giantfreakinrobot.com/wp-content/uploads/2023/07/attackontitanrumbling.png"
                alt="third slide"
              />
            </Carousel.Item>
          </Carousel></Col>
          <Col>  <Carousel data-bs-theme="dark" className="carousel-container">
            <Carousel.Item>
              <img
                className="carousel-item"
                src="https://tse4.mm.bing.net/th/id/OIP.HnmoOdQsbdhVVDuoO0EG_wHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="first slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-item"
                src="https://th.bing.com/th/id/R.f706a27070d658ffbd14fb3b79009a23?rik=E8%2bNzqeeia8sEw&pid=ImgRaw&r=0"
                alt="second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-item"
                src="https://tse2.mm.bing.net/th/id/OIP.Re8BgS2yfhkdI2xcOOVE9AHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="third slide"
              />
            </Carousel.Item>
          </Carousel></Col>
          <Col>  <Carousel data-bs-theme="dark" className="carousel-container">
            <Carousel.Item>
              <img
                className="carousel-item"
                src="https://tse3.mm.bing.net/th/id/OIP.lNOc0Ym-hxJtw5nxcTXUDAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="first slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-item"
                src="https://th.bing.com/th/id/R.de043db0f5f2484e777e7dfa497f3b97?rik=VgobCW64g%2fb2lw&riu=http%3a%2f%2fimages.fanpop.com%2fimages%2fimage_uploads%2fprison-break-wallpaper2-prison-break-660494_1024_768.jpg&ehk=aPgsyUooTfD6thM3SL8IpMhrZDErOMfx1Y02Bpc3RxE%3d&risl=&pid=ImgRaw&r=0"
                alt="second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-item"
                src="https://th.bing.com/th/id/R.a557f4bdac3e5d5fe2c9f84df1693d97?rik=6zFoldBnyDv1hw&pid=ImgRaw&r=0"
                alt="third slide"
              />
            </Carousel.Item>
          </Carousel></Col>
        </Row>
      </Container>
    </>
  );
}

export default DarkVariantExample;