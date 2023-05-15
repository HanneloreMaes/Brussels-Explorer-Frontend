import React, { useEffect } from 'react';

import { Text } from "react-native";
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, []);

  return(
    <Text>Hellow</Text>
  )
};

export default App