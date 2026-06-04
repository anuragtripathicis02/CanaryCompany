import { Nav, Tab } from "react-bootstrap"
import About from "./pdpdetailTabs/About"
import Details from "./pdpdetailTabs/Details"
import Calendar from "./pdpdetailTabs/Calendar"
import Location from "./pdpdetailTabs/Location"
import Around from "./pdpdetailTabs/Around"


const PdpdetailTabs = () => {
  return (
    
    <div className="tabs-com-sec">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                    <Nav.Link eventKey="first">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third">Calendar</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="fourth">Location</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="fifth">Around</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <About />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <Details />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <Calendar />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                    <Location />
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                    <Around />
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
    </div>
  )
}

export default PdpdetailTabs