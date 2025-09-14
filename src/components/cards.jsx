import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function cards() {
    return (
        <Container >
            <Row className='Container d-flex justify-content-center'>
                <Col> <Card style={{ width: '18rem' }}>
                    <Card.Img style={{ height: '300px', objectFit: 'cover' }} variant="top" src="https://tse4.mm.bing.net/th/id/OIP.tBoVcbpcGokmaHRIj2VdfgHaLH?w=960&h=1440&rs=1&pid=ImgDetMain&o=7&rm=3" />
                    <Card.Body>
                        <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className='text-center'>Attack on Titan</Card.Title>
                        <Card.Text style={{ fontSize: '1rem', fontWeight: 'normal', height: '200px', overflow: 'hidden' }}>
                            In a world where humanity lives inside walled cities to escape giant Titans that eat humans, Eren Yeager and his friends join the fight to uncover the Titans' origins and reclaim their freedom. It's an intense anime with epic battles and deep mysteries.
                        </Card.Text>
                    </Card.Body>
                </Card></Col>
                <Col> <Card style={{ width: '18rem' }}>
                    <Card.Img style={{ height: '300px', objectFit: 'cover' }} variant="top" src="https://th.bing.com/th/id/R.fa6199280ffbbd0352af90d3ca549ce6?rik=VAW2HGGHsHhJLw&riu=http%3a%2f%2ffr.web.img5.acsta.net%2fpictures%2f19%2f06%2f18%2f12%2f11%2f3956503.jpg&ehk=Q3YzE8DgsXOotmqIF00vZilbvzFmImuvCqGNJ2Ra9C4%3d&risl=&pid=ImgRaw&r=0" />
                    <Card.Body>
                        <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className='text-center'>Breaking Bad</Card.Title>
                        <Card.Text style={{ fontSize: '.94rem', fontWeight: 'normal', height: '200px', overflow: 'hidden' }}>
                            Walter White, a chemistry teacher, teams up with former student Jesse Pinkman to cook and sell high-purity methamphetamine after Walt's cancer diagnosis. It’s a gripping crime drama about his descent into a drug kingpin, balancing family life and moral decay.
                        </Card.Text>
                    </Card.Body>
                </Card></Col>
                <Col> <Card style={{ width: '18rem' }}>
                    <Card.Img style={{ height: '300px', objectFit: 'cover' }} variant="top" src="https://tse3.mm.bing.net/th/id/OIP.NSXNqDE3Hl976kGrkfSsFAHaKj?rs=1&pid=ImgDetMain&o=7&rm=3" />
                    <Card.Body>
                        <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className='text-center'>Prison Break</Card.Title>
                        <Card.Text style={{ fontSize: '.93rem', fontWeight: 'normal', height: '200px', overflow: 'hidden', fontFamily: '"Intel One Mono", monospace !important' }}>
                            Michael Scofield, a genius engineer, deliberately gets imprisoned to break out his wrongly convicted brother, Lincoln, from death row. Using an elaborate plan tattooed on his body, Michael navigates dangerous prison life and conspiracies in this thrilling, fast-paced series.
                        </Card.Text>
                    </Card.Body>
                </Card></Col>
            </Row>
        </Container>
    );
}

export default cards;