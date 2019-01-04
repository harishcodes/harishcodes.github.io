import React from 'react'
import styles from './css/styles.css'
import {PanelGroup,Panel,Table} from 'react-bootstrap'


const PanelStyle = {
    backgroundColor:'black',
    color:'white'
}

const PanelHeadingStyle = {
    backgroundColor:'grey',
    color:'white',
    textAlign:'left'
}

const aStyle = {
  color: 'greenyellow',
  textDecoration: 'none',
  textTransform: 'uppercase'
}

export default function WorkPanel(){

    return (

    <PanelGroup accordion id="accordionWork">
  <Panel eventKey="1"  style={PanelStyle}>
    <Panel.Heading style ={PanelHeadingStyle}>
      <Panel.Title toggle>Letschat!! - React + Redux App</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
        <p> This App was built using React and Redux. Uses Pusher chatkit to create chat rooms.
        </p>
        <p> </p>
        <p> </p>
        <p> Link to the App : <a style= {aStyle} href="https://harishcodes.github.io/letschat" target="_blank"> Fuel Finder</a></p>
    </Panel.Body>
  </Panel>
  <Panel eventKey="2"  style={PanelStyle}>
    <Panel.Heading style ={PanelHeadingStyle}>
      <Panel.Title toggle>FuelFinder - React + Redux App</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
        <p> This App was built using React and Redux. It uses a third party link to fetch the fuel prices based on US zip code. It also inuilts finding the fuel for the current location. This uses google maps API to show the locations in the map.
        </p>
        <p> </p>
        <p> </p>
        <p> Link to the App : <a style= {aStyle} href="https://harishcodes.github.io/fuelfinder" target="_blank"> Fuel Finder</a></p>
    </Panel.Body>
  </Panel>
  <Panel eventKey="3"  style={PanelStyle}>
    <Panel.Heading style ={PanelHeadingStyle}>
      <Panel.Title toggle>Smart Automate</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
        <p> This App was built using React. In order to avoid opening frequent links and apps in your machine, this tool builts a bat file with all the favourite apps and you can use that bat file to open everything at once. I built this when i ran out of ideas ;)
        </p>
        <p> </p>
        <p> </p>
        <p> Link to the App : <a style= {aStyle} href="https://harishcodes.github.io/smartautomate" target="_blank"> Smart Automate</a></p>
    </Panel.Body>
  </Panel>
  <Panel eventKey="4" style={PanelStyle}>
    <Panel.Heading style ={PanelHeadingStyle}>
      <Panel.Title toggle>Coupon Reminder</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
        <p> This is just an inprogress App. Right now, only the UI page for login and signup is built. WIP
        </p>
        <p> </p>
        <p> </p>
        <p> Link to the App : <a style= {aStyle} href="https://harishcodes.github.io/couponreminder" target="_blank"> Coupon Reminder</a></p>
    </Panel.Body>
  </Panel>
<Panel eventKey="5" style={PanelStyle}>
    <Panel.Heading style ={PanelHeadingStyle}>
      <Panel.Title toggle>More..</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
        <p> Much more in Pipeline
        </p>
        <p> </p>
        <p> </p>
    </Panel.Body>
  </Panel>
</PanelGroup>


    )

}
