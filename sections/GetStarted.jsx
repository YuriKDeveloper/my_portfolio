'use client';

import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './projectcard';
import 'bootstrap/dist/css/bootstrap.min.css';

const GetStarted = () => {
  const projects = [
    {
      title: 'ABC mais telecom',
      description: 'Locação de rádios',
      url: './p1.png',
      urlLink: 'https://abcmaistelecom.com.br',
    },
    {
      title: 'Valorise',
      description: 'Crescimento empresarial',
      url: './p2.png',
      urlLink: 'https://valorise.com.br',
    },
    {
      title: 'Max detox',
      description: 'Produtos para emagrecimento',
      url: './p3.png',
      urlLink: 'https://lojamaxdetox.com.br',
    },
    {
      title: 'Flua contabilidade',
      description: 'Contabilidade',
      url: './4.png',
      urlLink: 'https://fluacontabilidade.com.br',
    },
    {
      title: 'Move auto peças',
      description: 'Venda de produtos para carro',
      url: './5.png',
      urlLink: 'https://moveautopecas.com.br',
    },
    {
      title: 'Paix',
      description: 'Tecnologia',
      url: './6.png',
      urlLink: 'http://paix.eng.br',
    },
  ];

  const projects2 = [
    {
      title: 'Concurseiro fora da curva',
      description: 'Site de cursos',
      url: './7.png',
      urlLink: 'https://concurseiroforadacurva.com.br',
    },
    {
      title: 'Contabilidade Pelanda',
      description: 'Contabilidade',
      url: './8.png',
      urlLink: 'https://contabilidadepelanda.com.br',
    },
    {
      title: 'Oficina Qualitat',
      description: 'Design & Development',
      url: './9.png',
      urlLink: 'https://oficinaqualitat.com.br',
    },
    {
      title: 'Lugit',
      description: 'Loja de roupas',
      url: './10.png',
      urlLink: 'https://lugit.com.br',
    },
    {
      title: 'Meta ID Trade',
      description: 'Importação de produtos',
      url: './11.png',
      urlLink: 'https://metaidtrade.com.br',
    },
    {
      title: 'AFP Contabilidade',
      description: 'Contabilidade',
      url: './12.png',
      urlLink: 'https://afpcontabilidade.com.br',
    },
  ];

  const projects3 = [
    {
      title: 'Xjur',
      description: 'Software juridico',
      url: './13.png',
      urlLink: 'https://xjur.com.br',
    },
    {
      title: 'Br Brands',
      description: 'Importação de produtos',
      url: './14.png',
      urlLink: 'https://brbrandsangola.com.br',
    },
    {
      title: 'Previne Angola',
      description: 'Site de detetização',
      url: './15.png',
      urlLink: 'https://previneangola.com.br',
    },
    {
      title: 'Z&Z Store',
      description: 'Aluguel de vestidos',
      url: './16.png',
      urlLink: 'https://zezstore.com.br',
    },
    {
      title: 'ZapNaWeb',
      description: 'Software comunicação',
      url: './17.png',
      urlLink: 'https://zapnaweb.com.br',
    },
    {
      title: 'Myse API Faznota',
      description: 'WB api faznota',
      url: './18.png',
      urLink: 'https://www.myse.com.br/api-faznota.php',
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
                      <Nav.Link eventKey="first">Projetos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projetos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Projetos</Nav.Link>
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
