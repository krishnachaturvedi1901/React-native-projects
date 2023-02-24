import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from './Screens/Account';
import FirstScreen from './Screens/FirstScreen';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Todo from './Screens/Todo';

export default function App() {
  const Stack=createNativeStackNavigator()

  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName='FirstScreen' >
      <Stack.Screen name='FirstScreen' component={FirstScreen} options={{ headerShown:false }}  />
      <Stack.Screen name='Login' component={Login} options={{ title: 'Login',  headerBackVisible:false , headerTitleAlign:'center' }}  />
      <Stack.Screen name='Signup' component={Signup} options={{ title: 'Signup',headerTitleAlign:'center' }}  />
      <Stack.Screen name='Todo' component={Todo}  />
      <Stack.Screen name='Account' component={Account}  />
     </Stack.Navigator>
    </NavigationContainer> 
  );
}
