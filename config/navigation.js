import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';
import Home from '../screen/Home/Home';
import MainHome from '../screen/Home/MainHome';
import SplashScreen from '../screen/SplashScreen';
import DonationScreen from '../screen/DonationScreen';

let Naviagations = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MainHome"
            component={MainHome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Donation"
            component={DonationScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default Naviagations;
