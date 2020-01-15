import React from "react";
import ReactDOM from "react-dom";
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Dropdown from './components/dropdown';
import Button from './components/button';
import Social from './components/socials'
import Project from './components/project'
import Deck from './components/deck'

//Context
import ThemeProvider, {ThemeStateContext} from './providers/theme-provider';

//Images
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import placeholder from './images/placeholder.jpg'




import "./styles/styles.scss";

function App() {
  return (
    <ThemeProvider>
      <Router>
      <div className="App container">
        <div className='left col-2'>
          <div className='dropdowns'>
          <Dropdown values={[`Light Mode`, `Dark Mode`]}/>
          <Dropdown values={[`English`, `Spanish`]}/>
          <Social className='social' href='https://github.com/Martinbalke' src={github} alt='Link to the authors github'/>
          <Social className='social' href='https://www.linkedin.com/in/martinbalke/' src={linkedin} alt='Link to the authors linked in'/>

          </div>
          <div className='hero'>
            <h1 className='hero__header'>Martin Balke Software Developer</h1>
          </div>
        </div>
        <ThemeStateContext.Consumer>
          {state => (  
          <div className='right col-2' style={state} >
          <Route exact path="/">
            <Deck className='about'>
              <h2>ABOUT ME </h2>
              <h4 className='about__text'>I love solving problems and for the past eight years, that's what I’ve been doing inside the restaurant industry. During my time in that industry I got the chance to work at and lead some of the best restaurants in the world. Each one presented unique challenges to overcome in fun and clever ways. But all of the problems and solutions in restaurants are limited to the confines of that night or that restaurant, after the service is over and the doors are closed it didn’t matter how creative a solution the team I was leading had come up with to overcome a problem was, it was time for a fresh start the next morning. So I started looking for a place where I could put my skills to use in a lasting and impactful way. The place that I found was software development. In software I have a real place to utilize my skill set for good and have my love for problem solving leave a meaningful impact on the world.</h4>
              <Button className='btn-primary' value='Projects' link='/projects' />
            </Deck>
          </Route>
          <Route path="/projects">
            <Deck className='about'>
            <div className='container'>
              <div className='col-3'>
              <Project className='project' url='https://imflix.herokuapp.com/' src={placeholder} alt='Placeholder image' linkText='Imflix' text='Imflix is a Netflix and IMDB search aggregator. Allowing a user to see both systems ratings and save favorite shows to watch later'/>
              </div>
              <div className='col-3'>
              <Project className='project' url='https://imflix.herokuapp.com/' src={placeholder} alt='Placeholder image' linkText='Imflix' text='Imflix is a Netflix and IMDB search aggregator. Allowing a user to see both systems ratings and save favorite shows to watch later'/>
              </div>
              <div className='col-3'>
              <Project className='project' url='https://imflix.herokuapp.com/' src={placeholder} alt='Placeholder image' linkText='Imflix' text='Imflix is a Netflix and IMDB search aggregator. Allowing a user to see both systems ratings and save favorite shows to watch later'/>
              </div>
            </div>
              <Button className='btn-primary' value='About Me' link='/' />
            </Deck> 
          </Route>
         </div> 
          )}
        </ThemeStateContext.Consumer>
        </div>
    </Router>
  </ThemeProvider>  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
