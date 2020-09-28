import React from 'react';
import fotoa from './img/icono.ico'
import fotob from './img/dev-fer-01.jpg'
import fotoc from './img/dev-fer-02.jpg'
import foto1 from './img/portfolio-01.jpg'
import foto2 from './img/portfolio-02.jpg'
import foto3 from './img/portfolio-03.jpg'
import foto4 from './img/portfolio-04.jpg'
import foto5 from './img/portfolio-05.jpg'
import foto6 from './img/portfolio-06.jpg'
import foto7 from './img/portfolio-07.jpg'
import foto8 from './img/portfolio-08.jpg'
import foto9 from './img/portfolio-09.jpg'
import foto10 from './img/portfolio-10.jpg'
import Hamburguesa from "./Hamburguesa"

function App(props) {    
  return (
    <div>
        <header id="home0">              
            <Hamburguesa />     
            <div className="logo">
                <img src={fotoa} alt="" />
            </div> 
        </header>
      
      {/* Introduction */}
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Ferran Martinov</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">front-end dev</p>
            <img src={fotob} className="intro__img" alt="Ferran Martinov smiling" />
        </section>

        {/* My services */}
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>Design + Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                
                <div className="service">
                    <h3>E-Commerce</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                
                <div className="service">
                    <h3>WordPress</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            
            <a href="#work" className="btn">My Work</a>
        </section>        
        
        {/* About me */}
        <section className="about-me" id="about">
           <h2 className="section__title section__title--about">Who I am</h2>
           <p className="section__subtitle section__subtitle--about">Analyst developer based out of Barcelona</p>
           
           <div className="about-me__body">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
           
           <img src={fotoc} alt="FM at work" className="about-me__img"/>
        </section>
        
        {/* My Work */}
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div className="portfolio">
                {/* Portfolio item 01 */}
                <a href="#top" className="portfolio__item">
                    <img src={foto1} alt="portfolio-01" className="portfolio__img"/>
                </a>
                
                {/* Portfolio item 02 */}
                <a href="#top" className="portfolio__item">
                    <img src={foto2} alt="portfolio-02" className="portfolio__img"/>
                </a>
                
                {/* Portfolio item 03 */}
                <a href="#top" className="portfolio__item">
                    <img src={foto3} alt="portfolio-03" className="portfolio__img"/>
                </a>
                
                {/* Portfolio item 04 */}
                <a href="#top" className="portfolio__item">
                    <img src={foto4} alt="portfolio-04" className="portfolio__img"/>
                </a>
                
                {/* Portfolio item 05 */}
                <a href="#top" className="portfolio__item">
                    <img src={foto5} alt="portfolio-05" className="portfolio__img"/>
                </a>
                
                {/* Portfolio item 06 */}
                <a href="#top" className="portfolio__item">
                    <img src={foto6} alt="portfolio-06" className="portfolio__img"/>
                </a>
                
                {/* Portfolio item 07 */}
                <a href="#top" className="portfolio__item">
                    <img src={foto7} alt="portfolio-07" className="portfolio__img"/>
                </a>
                
                {/* Portfolio item 08 */}
                <a href="#top" className="portfolio__item">
                    <img src={foto8} alt="portfolio-08" className="portfolio__img"/>
                </a>
                
                {/* Portfolio item 09 */}
                <a href="#top" className="portfolio__item">
                    <img src={foto9} alt="portfolio-09" className="portfolio__img"/>
                </a>
                
                {/* Portfolio item 10 */}
                <a href="#top" className="portfolio__item">
                    <img src={foto10} alt="portfolio-10" className="portfolio__img"/>
                </a>
            </div>
        </section>
        
        
        {/* Footer */}
        <footer className="footer">
            {/* replace with your own email address */}
            <a href="mailto:blablabla@ferranmartinov.com" className="footer__link">blablabla@ferranmartinov.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://codepen.io">
                        <i className="fab fa-codepen"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="http://dribbble.com">
                        <i className="fab fa-dribbble"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://twitter.com">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </footer>    
    </div>
  );
}

export default App;
