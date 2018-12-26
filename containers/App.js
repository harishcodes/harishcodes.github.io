import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import WorkPanel from './WorkPanel'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './css/slider-animations.css';
import './css/styles.css';
import {Label} from 'react-bootstrap';
import backgroundimg from './images/Black_Bgrnd.jpg'

const indexContent = 
	{
		title: 'HARISH RAM KUMAR BAL SUBRAMANIAN',
		description: 'Aka Harish',
		tagline: 'Programmer And Humble Software Engineer',
		button: 'Read More',
        image: backgroundimg
	}
const aboutContent = 
	{
		aboutMe: ['I am from India',
                    'I was born and brought up in chennai and an Engineering Graduate',
                    'I work at Infosys as Technology Lead',
                    'I lived in South Portland, Maine',
                    'I moved to Fort worth, Texas and i live there now',
                    'I love to code',
                    'I like to learn new things everyday',
                    'I am an adventure freak',
                    'I have a beautiful wife and a lovely son',
                    'I am a fast learner'],
		title: 'ABOUT ME',
		button: 'Discover',
        image: backgroundimg
	}
const resumeContent = 
	{
		title: 'My Resume',
		button: 'Resume',
        image: backgroundimg
	}

const divStyle = {
    height:'100%'
}

export default class App extends React.Component {
    
    render(){
        return (
	<div style={divStyle}>
                <Header />
		<Slider className="slider-wrapper">
				<div
					key={0}
					className="slider-content"
					style={{ background: `url('${indexContent.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{indexContent.title}</h1>
						<p>{indexContent.description}</p>
                        <p>{indexContent.tagline}</p>
					</div>
					
				</div>
                <div
					key={1}
					className="slider-content"
					style={{ background: `url('${indexContent.image}') no-repeat center center` }}
				>
					<div className="inner">
                        <h1> {aboutContent.title}</h1>
                        {aboutContent.aboutMe.map((item,index) => (
                            <h2 key={index}>{item}</h2>
                        ))}
					</div>
					
				</div>
                   
                <div
					key={2}
					className="slider-content"
					style={{ background: `url('${indexContent.image}') no-repeat center center` }}
				>
					<div className="inner">
                        <h1>SIDE PROJECTS/PERSONAL WORK</h1>
                        <p></p>
                        <WorkPanel/>
					</div>
                </div>
                <div
					key={3}
					className="slider-content"
					style={{ background: `url('${indexContent.image}') no-repeat center center` }}
				>
					<div className="inner">
                        <h1>SKILLS</h1>
                        <h3> 
                            <Label> Javascript  </Label>
                            <Label> Java  </Label>
                            <Label> React  </Label>
                            <Label> Redux  </Label>
                            <Label> Spring  </Label>                    
                        </h3>
                        <h3> 
                            <Label> Springboot  </Label>                        
                            <Label> DB2  </Label>
                            <Label> Oracle  </Label>
                            <Label> CHEF  </Label>
                        </h3>                    
                        <h3> 
                            <Label> Tableau  </Label>
                            <Label> Git  </Label>
                            <Label> DevOps/Jenkins  </Label>                    
                        </h3>                                        
					</div>
					
				</div>                     
					
				
		</Slider>
	</div>
        )
}
}


/*render() {
    return (App)
};*/

//export default App
