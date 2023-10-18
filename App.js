import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importing screens defined by the user
import Homescreen from './Screens/Homescreen';
import Loginscreen from './Screens/Loginscreen';
import Signupscreen from './Screens/Signupscreen';

import UserContext from './Context';
export default function App() {
  const url="http://192.168.1.7:3000"
  const Stack=createNativeStackNavigator()
  return (
    <UserContext.Provider value={url}>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Signup" component={Signupscreen}/>
        <Stack.Screen name="Login" component={Loginscreen}/>

        <Stack.Screen name="Home" component={Homescreen}/>


      </Stack.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
  );
}
