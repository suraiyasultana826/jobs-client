import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Webdev from './Webdev';
import Digital from './Digital';
import Graphics from './Graphics';
const TabComponents = () => {
    return (
        <Tabs>
            <TabList >
                <Tab>web development</Tab>
                <Tab>digital marketing</Tab>
                <Tab> graphics design</Tab>
            </TabList>

            <TabPanel>
            <Webdev></Webdev>
            </TabPanel>
            <TabPanel>
                <Digital></Digital>
            </TabPanel>
            <TabPanel>
                <Graphics></Graphics>
            </TabPanel>
        </Tabs>
    );
};

export default TabComponents;