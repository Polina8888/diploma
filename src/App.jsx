import React from 'react';
import { Container, Row, Col, Navbar, Nav, Card } from 'react-bootstrap';
import './App.css';
import pattern from './assets/pattern1.svg';
import search from "./assets/Search.svg";
import bell from './assets/Bell.svg';
import envelope from './assets/Envelope.svg';
import question from './assets/QuestionCircle.svg';
import ellipse from './assets/Ellipse 24.svg';
import group from './assets/Group.svg';
import exit from './assets/Exit.svg';
import marks from './assets/marks.svg';
import schedule from './assets/schedule.svg';
import settings from './assets/settings.svg';
import files from './assets/files.svg';
import dashboard from './assets/dashboard.svg';
import chat from './assets/chat.svg';

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100" style={{
      backgroundImage: `url(${pattern})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <Navbar expand="lg" className="mb-5">
        <Container fluid className='position-fixed d-flex justify-content-end' style={{
          top: '0px',
          zIndex: '1',
        }}>
          <div
            className="position-fixed start-50 translate-middle-x d-flex align-items-center justify-content-center"
            style={{
              width: "470px",
              height: "71px",
              flexShrink: 0,
            }}
          >
            {/* SVG-обертка */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="470"
              height="71"
              viewBox="0 0 470 71"
              fill="none"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "0",
              }}
            >
              <path
                d="M0 0H469.5C469.5 0 450.283 6.5 450.283 17C450.283 23.4554 450.283 42.384 450.283 56.0089C450.283 64.2931 443.567 71 435.283 71H35.7447C27.4604 71 20.7447 64.2943 20.7447 56.0101C20.7447 42.6047 20.7447 24.0225 20.7447 17C20.7447 5.5 0 0 0 0Z"
                fill="#00AAFF"
              />
            </svg>

            <form
              className="position-relative"
              style={{
                width: "388.049px",
                height: "42.6px",
                flexShrink: 0,
                zIndex: "1",
              }}
            >
              <input
                type="search"
                className="form-control ps-5"
                placeholder="Поиск"
                style={{
                  borderRadius: "5px",
                  height: "100%",
                  width: "100%",
                  paddingLeft: "40px",
                  border: "none",
                }}
              />
              <img
                src={search}
                alt="Search"
                className="position-absolute"
                style={{
                  width: "20px",
                  height: "20px",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              />
            </form>
          </div>
          <nav
            style={{
              top: '0px',
              marginTop: '30px',
              marginRight: '63px',
              display: 'flex',
              width: '169px',
              height: '29px',
              alignItems: 'center',
              gap: '32px',
              flexShrink: 0
            }}
          >
            <a href="#envelope">
              <img
                src={envelope}
                alt="envelope"
                style={{
                  width: '35px',
                  height: '35px',
                  flexShrink: 0
                }}
              />
            </a>

            <a href="#bell">
              <img
                src={bell}
                alt="bell"
                style={{
                  width: '35px',
                  height: '35px',
                  flexShrink: 0
                }}
              />
            </a>

            <a href="#question">
              <img
                src={question}
                alt="question"
                style={{
                  width: '35px',
                  height: '35px',
                  flexShrink: 0
                }}
              />
            </a>
          </nav>
          <img
            src={ellipse}
            alt='ellepsis'
            style={{
              width: '60px',
              height: '60px',
              marginTop: '18px',
              marginRight: '27px',
              flexShrink: 0,
            }}
          />
        </Container>
      </Navbar>
      <nav
        className="d-flex flex-column justufy-content-center align-items-center h-100 text-center"
        style={{
          width: '100px',
          position: 'fixed',
          top: '0px',
          left: '0px',
          zIndex: '1',
          paddingTop: '30px',
          background: 'white',
          boxShadow: '6px 3px 10px 0px rgba(0, 0, 0, 0.09)',
        }}
      >
        <a href="#" className="mb-auto nav-link">
          <img
            src={group}
            alt="Group"
            style={{
              display: "block",
              width: "35px",
              height: "35px",
              flexShrink: 0,
            }}
          />
        </a>

        <a href="#" className="nav-link">
          <img
            src={dashboard}
            alt="Dashboard"
            style={{
              display: "block",
              width: "35px",
              height: "35px",
              flexShrink: 0,
              marginBottom: "40px",
            }}
          />
        </a>

        <a href="#" className="nav-link">
          <img
            src={schedule}
            alt="Schedule"
            style={{
              display: "block",
              width: "35px",
              height: "35px",
              flexShrink: 0,
              marginBottom: "40px",
            }}
          />
        </a>

        <a href="#" className="nav-link">
          <img
            src={chat}
            alt="Chat"
            style={{
              display: "block",
              width: "35px",
              height: "35px",
              flexShrink: 0,
              marginBottom: "40px",
            }}
          />
        </a>

        <a href="#" className="nav-link">
          <img
            src={settings}
            alt="Settings"
            style={{
              display: "block",
              width: "35px",
              height: "35px",
              flexShrink: 0,
              marginBottom: "40px",
            }}
          />
        </a>

        <a href="#" className="nav-link">
          <img
            src={files}
            alt="Files"
            style={{
              display: "block",
              width: "35px",
              height: "35px",
              flexShrink: 0,
              marginBottom: "40px",
            }}
          />
        </a>

        <a href="#" className="nav-link">
          <img
            src={marks}
            alt="Marks"
            style={{
              display: "block",
              width: "35px",
              height: "35px",
              flexShrink: 0,
              margin: "0 auto",
            }}
          />
        </a>

        <a href="#" className="mt-auto nav-link">
          <img
            src={exit}
            alt="Exit"
            style={{
              display: "block",
              width: "35px",
              height: "35px",
              flexShrink: 0,
              marginBottom: "89px",
            }}
          />
        </a>
      </nav>
      <div className='container-fluid d-flex justify-content-center' style={{
        marginTop: '121px',
        marginBottom: '80px',
        gap: '95px'
      }}>
        <Card style={{
          width: '415px',
          height: '385px',
          flexShrink: '0',
          borderRadius: '10px',
          background: 'var(--, #FFF)',
          boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.25)',
        }}>
          <Card.Body>
            <Card.Title className="fw-bold">Ближайшие активности</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card style={{
          width: '415px',
          height: '272px',
          flexShrink: '0',
          borderRadius: '10px',
          background: 'var(--, #FFF)',
          boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.25)',
        }}>
          <Card.Body>
            <Card.Title className="fw-bold">Работы в проверке</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card style={{
          width: '415px',
          height: '272px',
          flexShrink: '0',
          borderRadius: '10px',
          background: 'var(--, #FFF)',
          boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.25)',
        }}>
          <Card.Body>
            <Card.Title className="fw-bold">Мои оценки</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='container-fluid d-flex justify-content-center' style={{ gap: '95px' }}>
        <Card style={{
          width: '923px',
          height: '313px',
          flexShrink: '0',
          borderRadius: '10px',
          background: 'var(--, #FFF)',
          boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.25)',
        }}>
          <Card.Body>
            <Card.Title className="fw-bold">Посещаемость</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card style={{
          width: '407px',
          height: '313px',
          flexShrink: '0',
          borderRadius: '10px',
          background: 'var(--, #FFF)',
          boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.25)',
        }}>
          <Card.Body>
            <Card.Title className="fw-bold">Твоя статистика</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
      {/* <Container fluid className="flex-grow-1 d-flex" >
        <Row className="flex-grow-1 w-100">
          <Col xs={12} md={9} lg={10} className="p-4 ms-auto">
            <Row className="g-5">
              <Col xs={12} md={4}>
                <Card style={{
                  width: '415px',
                  height: '385px',
                  }}>
                  <Card.Body>
                    <Card.Title className="fw-bold">Ближайшие активности</Card.Title>
                    <Card.Text>Здесь будет список активностей.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card style={{
                  width: '415px',
                  height: '272px',
                }}>
                  <Card.Body>
                    <Card.Title className="fw-bold">Работы в проверке</Card.Title>
                    <Card.Text>Здесь будет список работ.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card style={{
                  width: '415px',
                  height: '272px',
                }}>
                  <Card.Body>
                    <Card.Title className="fw-bold">Мои оценки</Card.Title>
                    <Card.Text>Здесь будут ваши оценки.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card style={{
                  width: '923px',
                  height: '313px',
                }}>
                  <Card.Body>
                    <Card.Title className="fw-bold">Посещаемость</Card.Title>
                    <Card.Text>Здесь будет график посещаемости.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card className="h-100 scrollable-content" style={{
                  width: '407px',
                  height: '313px',
                  flexShrink: '0',
                  borderRadius: '10px',
                  background: 'var(--, #FFF)',
                  boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.25)',
                }}>
                  <Card.Body>
                    <Card.Title className="fw-bold">Твоя статистика</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container> */}
    </div >
  );
}

export default App;
