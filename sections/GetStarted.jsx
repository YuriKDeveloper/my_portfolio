'use client';

import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './projectcard';
import 'bootstrap/dist/css/bootstrap.min.css';

const GetStarted = () => {
  const projects = [
    {
      title: 'ABC mais telecom',
      description: 'Design & Development',
      url: './p1.png',
      urlLink: 'https://abcmaistelecom.com.br',
    },
    {
      title: 'Valorise',
      description: 'Design & Development',
      url: './p2.png',
    },
    {
      title: 'Max detox',
      description: 'Design & Development',
      url: './p3.png',
    },
    {
      title: 'Flua contabilidade',
      description: 'Design & Development',
      url: './4.png',
    },
    {
      title: 'Move auto peças',
      description: 'Design & Development',
      url: './5.png',
    },
    {
      title: 'Paix',
      description: 'Design & Development',
      url: './6.png',
    },
  ];

  const projects2 = [
    {
      title: 'Concurseiro fora da curva',
      description: 'Design & Development',
      url: './7.png',
    },
    {
      title: 'Contabilidade Pelanda',
      description: 'Design & Development',
      url: './8.png',
    },
    {
      title: 'Oficina Qualitat',
      description: 'Design & Development',
      url: './9.png',
    },
    {
      title: 'Lugit',
      description: 'Design & Development',
      url: './10.png',
    },
    {
      title: 'Meta ID Trade',
      description: 'Design & Development',
      url: './11.png',
    },
    {
      title: 'AFP Contabilidade',
      description: 'Design & Development',
      url: './12.png',
    },
  ];

  const projects3 = [
    {
      title: 'ABC mais telecom',
      description: 'Design & Development',
      url: './13.png',
    },
    {
      title: 'Valorise',
      description: 'Design & Development',
      url: './14.png',
    },
    {
      title: 'Max detox',
      description: 'Design & Development',
      url: './15.png',
    },
    {
      title: 'Flua contabilidade',
      description: 'Design & Development',
      url: './16.png',
    },
    {
      title: 'Move auto peças',
      description: 'Design & Development',
      url: './17.png',
    },
    {
      title: 'Paix',
      description: 'Design & Development',
      url: './18.png',
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projetos</h2>
              <p>Alguns dos projetos que desenvolvi durante minha carreira espero que apreciem.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetStarted;
