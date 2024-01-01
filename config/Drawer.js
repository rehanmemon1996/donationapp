import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screen/Home/Home';
import Login from '../screen/Login';
import DonationScreen from '../screen/DonationScreen';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

function Drawers() {
  return (
    <Drawer.Navigator  drawerContent={props =><DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="donation" component={DonationScreen} />

    </Drawer.Navigator>
  );
}
export default Drawers;
