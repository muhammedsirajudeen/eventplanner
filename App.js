import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importing screens defined by the user
import Homescreen from './Screens/Homescreen';
import Loginscreen from './Screens/Loginscreen';
import Signupscreen from './Screens/Signupscreen';

export default function App() {
  const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={Loginscreen}/>
        <Stack.Screen name="Signup" component={Signupscreen}/>
        <Stack.Screen name="Home" component={Homescreen}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
