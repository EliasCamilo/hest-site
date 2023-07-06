import './App.css';

/* logotipes */

import HestLogotipe from './assets/imgs/logotipe/hest-logotipe.svg';
import AgrocampoLogotipe from './assets/imgs/logotipe/agrocampo-logotipe.svg';
import OrruLogotipe from './assets/imgs/logotipe/orru-logotipe.svg';
import DJonesLogotipe from './assets/imgs/logotipe/djones-logotipe.svg';
import ValedoSolLogotipe from './assets/imgs/logotipe/vale-do-sol-logotipe.svg';
import DitinhoLogotipe from './assets/imgs/logotipe/ditinho-logotipe.svg';
import PolimedLogotipe from './assets/imgs/logotipe/polimed-logotipe.svg';
import SERPREVlogotipe from './assets/imgs/logotipe/SERPREV-logotipe.svg';
import MOCAPlogotipe from './assets/imgs/logotipe/mocap-logotipe.svg';
import CaféBotecoLogotipe from './assets/imgs/logotipe/cafe-boteco-logotipe.svg';

/* icons */

import InstagramIcons from './assets/imgs/icons/instagram.svg';
import WhatsappIcons from './assets/imgs/icons/whatsapp.svg';
import LinkedinIcon from './assets/imgs/icons/linkedin.svg';
import { X, Menu } from 'lucide-react';

/* images */

import PGRimage from './assets/imgs/sevices-imgs/PGR.png';
import PCMSOimage from './assets/imgs/sevices-imgs/PCMSO.png';
import LTCATimage from './assets/imgs/sevices-imgs/LTCAT.png';
import TreinamentodeNrsImage from './assets/imgs/sevices-imgs/Treinamento-de-Nrs.png';
import BrigadadeIncêndioImage from './assets/imgs/sevices-imgs/Brigada-de-incêndio.png';
import InspeçãoBombeirosImage from './assets/imgs/sevices-imgs/Inspeção-bombeiros.png';
import AVCBimage from './assets/imgs/sevices-imgs/AVCB.png';
import ProjetoCivilImage from './assets/imgs/sevices-imgs/Projeto-civil.png';

/* scripts */

function App() {
  return (
    <div className="App">

      {/* menu */}

      <div id='menu'>
        <nav>
          <a href="#about">SOBRE</a>
          <a href="#services">SERVIÇOS</a>
          <a href="#companies-container">COM QUEM JÁ TRABALHAMOS</a>
          <a href="#contact">CONTATO</a>
          <div>
            <a href="https://www.instagram.com/hestoficial/" target="_blank"><img src={InstagramIcons} alt="instagram-logo" width={20} /></a>
            <a href="https://wa.me/+5519996697456" target="_blank"><img src={WhatsappIcons} alt="whatsapp-logo" width={20} /></a>
            <a href="https://www.linkedin.com/company/hestoficial" target="_blank"><img src={LinkedinIcon} alt="linkedin-logo" width={20} /></a>
          </div>
          <X id="close-menu-icon" size={35}/>
        </nav>
      </div>

      <Menu id='hamburguer-menu-icon' size={35}/>

      {/* home */}

      <img id='home-logotipe' src={HestLogotipe} alt="hest-logotipe" style={{height: "6%", width: "auto"}} />
      <div id='home'></div>
      <div id='building-container'>
        <div id='left-building-part'>

        </div>
        <div id='right-building-part'>

        </div>
      </div>

      {/* about */}

      <div id='about'>
        <div id='about-companie'>
          <img src={HestLogotipe} alt="hest-logotipe" style={{height: "auto", width: "20%"}} />
          <p>A HEST é uma empresa fundada em 2021 por Fernando Hipólito, um dedicado técnico em segurança do trabalho, e sua filha, Talissa Hipólito, uma talentosa engenheira civil. Especializada em oferecer serviços de segurança do trabalho, a HEST visa garantir ambientes laborais seguros e saudáveis para outras empresas. Com um compromisso inabalável com a proteção dos trabalhadores, a HEST tornou-se referência em seu setor em um curto período de tempo. Seu trabalho conjunto combina conhecimentos técnicos e inovação, proporcionando soluções eficazes e personalizadas às necessidades de cada cliente.</p>
        </div>
        <div id='about-professionals'>
          <div id='professional-perfil'>
            <h3>Fernando Hipólito</h3>
            <p>Fernando Hipólito é um empreendedor e especialista em Segurança do Trabalho. Em 2020, iniciou seu curso técnico nessa área e, após concluir, dedicou-se a auxiliar empresas a se adequarem às normas vigentes. Com sua filha, fundou a empresa HEST, focada em proporcionar soluções em segurança para o ambiente de trabalho. Paralelamente, Fernando também dedicou seu tempo a serviços voluntários, sendo responsável pela Segurança do Trabalho na Congregação Cristã no Brasil, na região de Amparo. Seu comprometimento e conhecimento têm contribuído para criar ambientes mais seguros e protegidos para todos.</p>
          </div>
          <div id='professional-perfil' style={{ borderBottom: "none" }}>
            <h3>Talissa Hipólito</h3>
            <p>Talissa Hipólito é uma engenheira civil formada no final de 2021, apaixonada pela área de construção e segurança. Após concluir sua graduação, ela decidiu se especializar em Segurança do Trabalho, buscando aprimorar suas habilidades e conhecimentos. Realizou diversos cursos e uma pós-graduação na área, tornando-se uma profissional altamente qualificada e comprometida em garantir ambientes seguros para os trabalhadores. Sua dedicação e expertise fazem dela uma referência no setor de engenharia civil e segurança ocupacional.</p>
          </div>
        </div>
      </div>

      {/* services */}

      <div id='services'>
        <h2>Nossos Serviços</h2>
        <div>
          <div id='service-container'>
            <div><img src={PGRimage} alt="service-img" width={290} /></div>
            <h3>PGR</h3>
            <p>O Laudo de PGR é um documento que identifica os riscos em um ambiente de trabalho, elaborado por especialistas em segurança ocupacional. Ele propõe medidas para controlar esses riscos e garantir a conformidade com as normas regulamentadoras.</p>
          </div>
          <div id='service-container'>
            <div><img src={LTCATimage} alt="service-img" width={290} /></div>
            <h3>LTCAT</h3>
            <p>O LTCAT é um documento que avalia os riscos ambientais no trabalho, identificando agentes prejudiciais à saúde dos funcionários. Ele é utilizado para determinar a insalubridade ou periculosidade e implementar medidas de segurança.</p>
          </div>
          <div id='service-container'>
            <div><img src={PCMSOimage} alt="service-img" width={290} /></div>
            <h3>PCMSO</h3>
            <p>PCMSO é o Programa de Controle Médico de Saúde Ocupacional, uma obrigação legal para empresas que visa à saúde dos trabalhadores por meio de exames médicos, avaliações clínicas e medidas preventivas no ambiente de trabalho.</p>
          </div>
          <div id='service-container'>
            <div><img src={TreinamentodeNrsImage} alt="service-img" width={290} /></div>
            <h3>Treinamento de Nrs</h3>
            <p>Os treinamentos de NR garantem a segurança dos trabalhadores, prevenindo acidentes e doenças. Eles promovem a conscientização e o cumprimento da legislação, resultando em ambientes de trabalho mais seguros e produtivos.</p>
          </div>
          <div id='service-container'>
            <div><img src={BrigadadeIncêndioImage} alt="service-img" width={290} /></div>
            <h3>Formação de Brigada de Incêndio</h3>
            <p>As Brigadas de Incêndio são essenciais para prevenir incêndios, agindo de forma rápida e eficiente para proteger vidas e propriedades. Além disso, promovem a conscientização sobre medidas de segurança.</p>
          </div>
          <div id='service-container'>
            <div><img src={InspeçãoBombeirosImage} alt="service-img" width={290} /></div>
            <h3>Projeto para Vistoria dos Bombeiros</h3>
            <p>A vistoria dos bombeiros em uma empresa é essencial para garantir a segurança dos ocupantes. O projeto avalia as condições de prevenção e combate a incêndios, identificando e corrigindo riscos para proteger vidas e patrimônio.</p>
          </div>
          <div id='service-container'>
            <div><img src={AVCBimage} alt="service-img" width={290} /></div>
            <h3>AVCB</h3>
            <p>AVCB é um laudo emitido pelos Bombeiros que certifica a conformidade de uma edificação às normas de segurança contra incêndios. É obtido após vistoria técnica que verifica equipamentos e medidas de prevenção e combate a incêndios, sendo essencial para garantir a segurança e regularidade de estabelecimentos.</p>
          </div>
          <div id='service-container'>
            <div><img src={ProjetoCivilImage} alt="service-img" width={290} /></div>
            <h3>Projeto Civil em Geral</h3>
            <p>Um bom projeto civil é essencial para garantir a segurança e a funcionalidade de estruturas e edificações. Ele permite uma análise precisa de cargas, materiais e técnicas construtivas, resultando em construções duradouras e eficientes. Além disso, um projeto bem elaborado evita retrabalhos, reduz custos e contribui para a preservação ambiental.</p>
          </div>
        </div>
      </div>

      {/* companies we've worked with */}

      <div id='companies-container'>
        <h2>Principais empresas com quem já trabalhamos</h2>
        <div id='companies-logotipes'>
          <img src={AgrocampoLogotipe} alt="agrocampo-logotipe" style={{height: "auto", width: "14%"}} />
          <img src={OrruLogotipe} alt="orru-logotipe" style={{height: "auto", width: "14%"}} />
          <img src={DJonesLogotipe} alt="djones-logotipe" style={{height: "auto", width: "14%"}} />
          <img src={ValedoSolLogotipe} alt="vale-do-sol-logotipe" style={{height: "auto", width: "14%"}} />
          <img src={DitinhoLogotipe} alt="logotipe" style={{height: "auto", width: "14%"}} />
          <img src={PolimedLogotipe} alt="logotipe" style={{height: "auto", width: "14%"}} />
          <img src={SERPREVlogotipe} alt="logotipe" style={{height: "auto", width: "14%"}} />
          <img src={CaféBotecoLogotipe} alt="logotipe" style={{height: "auto", width: "14%"}} />
          <img src="" alt="logotipe" style={{height: "auto", width: "14%"}} />
          <img src="" alt="logotipe" style={{height: "auto", width: "14%"}} />
        </div>
      </div>

      {/* contact */}

      <div id='contact'>
        <h2>Fale Conosco</h2>
        <div>
          <div>
            <img src={WhatsappIcons} alt="whatsapp-icon" height={50} />
            <h3>Whatssap:</h3>
            <a href="https://wa.me/+5519996697456" target="_blank">Fernando Hipólito:<br />(19) 9 9669-7456</a>
            <a href="https://wa.me/+5519971538859" target="_blank">Talissa Hipólito:<br />(19) 9 7153-8859</a>
          </div>
          <div>
            <img src={InstagramIcons} alt="instagram-icon" height={50} />
            <h3>Instagram</h3>
            <a href="https://www.instagram.com/hestoficial/" target="_blank" style={{transform: "translateY(5vh)"}}>@hestoficial</a>
          </div>
          <div>
            <img src={LinkedinIcon} alt="linkedin-icon" height={50} />
            <h3>Linkedin</h3>
            <a href="https://www.linkedin.com/company/hestoficial" target="_blank" style={{transform: "translateY(5vh)"}}>/hestoficial</a>
          </div>
        </div>
      </div>

      {/* footer */}

      <footer>
        <nav>
          <a href="#about">Sobre</a>
          <a href="#services">Serviços</a>
          <a href="#companies-container">Com quem já trabalhamos</a>
          <a href="#contact">Contato</a>
          <div>
            <a href="https://www.instagram.com/hestoficial/" target="_blank"><img src={InstagramIcons} alt="instagram-logo" width={20} /></a>
            <a href="https://wa.me/+5519996697456" target="_blank"><img src={WhatsappIcons} alt="whatsapp-logo" width={20} /></a>
            <a href="https://www.linkedin.com/company/hestoficial" target="_blank"><img src={LinkedinIcon} alt="linkedin-logo" width={20} /></a>
          </div>
        </nav>
        <section>
          <span>© HAST. Hipolito Assessoria em Segurança do Trabalho - 43.866.032/0001-87 - Rua Adelaide Blotta Marques, 47, Residencial das Posses - 13930-000 - Serra Negra, SP</span>
          <div>Desenvolvido por <a href=""><img src={MOCAPlogotipe} alt="mocap-logotipe" height={20} /></a></div>
        </section>
      </footer>

    </div>
  );
}

export default App;
