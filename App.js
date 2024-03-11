import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importing screens defined by the user
import Homescreen from './Screens/Homescreen';
import Loginscreen from './Screens/Loginscreen';
import Signupscreen from './Screens/Signupscreen';
import Profilescreen from './Screens/Profilescreen';
import Eventscreen from './Screens/Eventscreen';
import Adminscreen from './Screens/Adminscreen';
import AdminDatascreen from './Screens/AdminDatascreen';
import AddMarkscreen from './Screens/AddMarkscreen';
import UserContext from './Context';
import AddEventscreen from './Screens/AddEventScreen';
import AddAttendaceScreen from './Screens/AddAttendanceScreen';
import AddNotice from './Screens/AddNotice';
import NoticeScreen from './Screens/NoticeScreen';
export default function App() {
  const url="http://192.168.1.6:3000"
  const Stack=createNativeStackNavigator()
  return (
    <UserContext.Provider value={url}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={Signupscreen}/>
        <Stack.Screen name="Login" component={Loginscreen}/>
        <Stack.Screen name="Home" component={Homescreen}/>
        <Stack.Screen name="Profile" component={Profilescreen}/>
        <Stack.Screen name="Event" component={Eventscreen}/>
        <Stack.Screen name="Admin" component={Adminscreen}/>
        <Stack.Screen name="AdminData" component={AdminDatascreen}/>
        <Stack.Screen name="AddEvent" component={AddEventscreen}/>
        <Stack.Screen name="AddMark" component={AddMarkscreen}/>
        <Stack.Screen name="AddAttendance" component={AddAttendaceScreen}/>
        <Stack.Screen name="AddNotice" component={AddNotice}/>
        <Stack.Screen name="Notice" component={NoticeScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
  );
}
