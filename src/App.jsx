import React from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, Card } from 'react-bootstrap';
import './App.css';
import logo from './assets/Group.svg';
import ellipse from './assets/Ellipse 24.svg';
import menus from './assets/Menus.svg';
import navigation from './assets/Navigation.svg';
import exit from './assets/Exit.svg';
import marks from './assets/marks.svg';
import schedule from './assets/schedule.svg';
import settings from './assets/settings.svg';
import files from './assets/files.svg';
import dashboard from './assets/dashboard.svg';
import chat from './assets/chat.svg';

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Логотип" width="43" height="43" />
          </Navbar.Brand>
          <img src={navigation} alt="Поиск" width="469.5" height="71" />
          <img src={menus} alt="Меню" width="169" height="29" />
        </Container>
      </Navbar>
      <Container fluid className="flex-grow-1 d-flex">
        <Row className="flex-grow-1 w-100">
          <Col xs={12} md={3} lg={2} className="bg-light border-end d-none d-md-block">
            <Nav className="flex-column mt-3 h-100">
              <Nav.Link href="#dashboard" className="text-dark">
                <img src={dashboard} alt="Дэшборд" width="35" height="35" className="me-2" />
              </Nav.Link>
              <Nav.Link href="#schedule" className="text-dark">
                <img src={schedule} alt="Расписание" width="35" height="35" className="me-2" />
              </Nav.Link>
              <Nav.Link href="#chat" className="text-dark">
                <img src={chat} alt="Чат" width="35" height="35" className="me-2" />
              </Nav.Link>
              <Nav.Link href="#settings" className="text-dark">
                <img src={settings} alt="Настройки" width="35" height="35" className="me-2" />
              </Nav.Link>
              <Nav.Link href="#documents" className="text-dark">
                <img src={files} alt="Документы" width="35" height="35" className="me-2" />
              </Nav.Link>
              <Nav.Link href="#marks" className="text-dark">
                <img src={marks} alt="Документы" width="35" height="35" className="me-2" />
              </Nav.Link>
              <Nav.Link href="#home" className="text-dark">
                <img src={exit} alt="Домой" width="35" height="35" className="me-2" />
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} md={9} lg={10} className="p-4">
            <Row className="g-4 h-100">
              <Col xs={12} sm={6} md={4}>
                <Card className="h-100 scrollable-content">
                  <Card.Body>
                    <Card.Title>Ближайшие активности</Card.Title>
                    <Card.Text>Здесь будет список активностей.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Работы в проверке</Card.Title>
                    <Card.Text>Здесь будет список работ.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Мои оценки</Card.Title>
                    <Card.Text>Здесь будут ваши оценки.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Посещаемость</Card.Title>
                    <Card.Text>Здесь будет график посещаемости.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
