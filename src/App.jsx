
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import StoryList from './components/Story/StoryList';
import Post from './components/Post/Post';

function App() {
  const storiesData = [
    { username: 'rickchan', imgSrc: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' },
    { username: 'morty', imgSrc: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' },
  ];

  return (
    <Container style={{
      backgroundColor: 'black',
      color: 'rgb(245, 245, 245)',
    }} fluid>
      <Row style={{
        height: '100%',
      }}>
        <Col style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Row>
            <img height={100} src='https://www.pngkey.com/png/full/28-287308_instagram-logo-text-white.png' alt='logo' />
            <div>
              <div>Home</div>
              <div>Search</div>
              <div>Explore</div>
              <div>Reels</div>
              <div>Messages</div>
              <div>Notifications</div>
              <div>Create</div>
              <div>Profile</div>
            </div>
          </Row>
          <Row>
            <div>
              More
            </div>
          </Row>
        </Col>
        <Col xs={10}>
        <Row >
          <Col style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <Row>
              <StoryList stories={storiesData} />
            </Row>
            <Row>
              <Post 
                username="discover_monkeys" 
                time="2d" 
                mediaSrc="https://www.rollingstone.com/wp-content/uploads/2023/10/RAM_704b69.jpg?w=1581&h=1054&crop=1" 
                initialLikes={252457} 
                caption="Dancing Show" 
              />
            </Row>
            <Row>
            <Post 
                username="discover_monkeys" 
                time="2d" 
                mediaSrc="https://i.guim.co.uk/img/media/b563ac5db4b4a4e1197c586bbca3edebca9173cd/0_12_3307_1985/master/3307.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=61a26bf43da26e4ca97e932e5ee113f7" 
                initialLikes={252457} 
                caption="Dancing Show" 
              />
            </Row>
            <Row>
            <Post 
                username="discover_monkeys" 
                time="2d" 
                mediaSrc="https://pyxis.nymag.com/v1/imgs/3b7/ca7/5fd3353737d602a5a1caa3fce92cb33b39-rick-morty.jpg" 
                initialLikes={252457} 
                caption="Dancing Show" 
              />
            </Row>
            <Row>
            <Post 
                username="discover_monkeys" 
                time="2d" 
                mediaSrc="https://pyxis.nymag.com/v1/imgs/cd8/804/e0f612fa12d17e68e3d68ccf55f93cac4f-06-rick-morty.2x.h473.w710.jpg" 
                initialLikes={252457} 
                caption="Dancing Show" 
              />
            </Row>
          </Col>
        </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default App
