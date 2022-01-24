import * as React from 'react';
import {useState, useEffect} from 'react';

/* Navigation, Splashscreen */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EventRegister} from 'react-native-event-listeners';
import SplashScreen from 'react-native-splash-screen';

/* To toggle between dark mode and light mode */
import themeContext from './theme/ThemeContext';
import theme from './theme/Theme';

/* Import app screens */
import Home from './components/Home';
import Details from './components/Details';
import Order from './components/Order';

const Stack = createNativeStackNavigator();

const App = () => {
  {
    /* Closes the splash screen as soon as the app loads */
  }
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [mode, setMode] = useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener('changeTheme', data => {
      setMode(data);
      console.log(data);
    });
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });

  return (
    /* Stack Navigator */
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Order"
            component={Order}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
};

export default App;
