import { StyleSheet } from 'react-native';
import Login from './src/screens/Login';
import zoom from './src/screens/zoom';
import Signup from './src/screens/Signup';
import Welcome from './src/screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './src/screens/Homepage';
import Verification from './src/screens/Verification';
import Home from './src/components/Home';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
          name="zoom"
          component={zoom}
          options={{headerShown: false}}
        />
      <Stack.Screen name="welcome" component={Welcome}
        options={
          {
            headerShown: false
          }
        }
      />
      
       <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        />
      <Stack.Screen name="login" component={Login}
        options={
          {
            headerShown: false
          }
        }
      />
      <Stack.Screen name="signup" component={Signup}
        options={
          {
            headerShown: false
          }
        }

      />
      <Stack.Screen name="homepage" component={Homepage}
        options={
          {
            headerShown: false
          }
        }
      
      />

      <Stack.Screen name="verification" component={Verification}
        options={
          {
            headerShown: false
          }
        }

      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
