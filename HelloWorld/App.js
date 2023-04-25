/*
  Import bootstrap
*/
import Button from 'react-bootstrap/Button';

import { StatusBar } from 'expo-status-bar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StyleSheet, Text, View } from 'react-native';

/*
  Import componentes
*/
import Login from './componentes/Login';
import Home from './componentes/Home';


export default function App() {
  return (
    <BrowserRouter>
      <View style={styles.container}>
        <View>
          <Routes>
            <Route exact path="/" Component={Home}/>
          </Routes>
        </View>
      </View>
    </BrowserRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    fontSize: 28
  }
});
