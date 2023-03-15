'use client';

import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './projectcard';
import 'bootstrap/dist/css/bootstrap.min.css';

const GetStarted = () => {
  const projects = [
    {
      title: "ABC mais telecom",
      description: "Design & Development",
      url: './p1.png',
    },
    {
      title: "Valorise",
      description: "Design & Development",
      url: './p2.png',
    },
    {
      title: "Max detox",
      description: "Design & Development",
      url: './p3.png',
    },
    {
      title: "Flua contabilidade",
      description: "Design & Development",
      url: './4.png',
    },
    {
      title: "Move auto peças",
      description: "Design & Development",
      url: './5.png',
    },
    {
      title: "Paix",
      description: "Design & Development",
      url: './6.png',
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
              <div>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
