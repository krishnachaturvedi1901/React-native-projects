import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from './Screens/Account';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Todo from './Screens/Todo';

export default function App() {
  const Stack=createNativeStackNavigator()

  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName='Login' >
      <Stack.Screen name='Login' component={Login} options={{ title: 'Login' }}  />
      <Stack.Screen name='Signup' component={Signup}  />
      <Stack.Screen name='Todo' component={Todo}  />
      <Stack.Screen name='Account' component={Account}  />
     </Stack.Navigator>
    </NavigationContainer> 
  );
}
