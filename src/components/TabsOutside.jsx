import { Nav, Tab } from "react-bootstrap"
import FirstTabsContent from "./lapalmaTabs/FirstTabsContent"
import SecondTabsContent from "./lapalmaTabs/SecondTabsContent"
import ThirdTabsContent from "./lapalmaTabs/ThirdTabsContent"
import FourthTabsContent from "./lapalmaTabs/FourthTabsContent"
import FifthTabsContent from "./lapalmaTabs/FifthTabsContent"


const TabsOutside = () => {
  return (
    <div className="tabs-com-sec">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                    <Nav.Link eventKey="first">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Relaxing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third">Romantic</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="fourth">Family</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="fifth">Nature</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <FirstTabsContent />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <SecondTabsContent />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <ThirdTabsContent />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                    <FourthTabsContent />
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                    <FifthTabsContent />
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
    </div>
  )
}

export default TabsOutside