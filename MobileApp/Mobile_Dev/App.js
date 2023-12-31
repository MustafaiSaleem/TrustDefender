import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ShakeFeature from './features/ShakeFeature';
import Header from './components/Header';
import RandomQuote from './components/RandomQuote';
import Greeting from './components/Greeting';
import Carousel from './components/Carousel';
import Options from './components/Border';
import BottomNavigation from './components/BottomBar';
import LoginUI from './components/LoginUI'
import LoginDetailUI from './components/LoginDetail'
import SignupUI from './components/SignUp'
import MapFeature from './features/MapFeature';

export default function App() {
  return (
    <>
      {/* <ShakeFeature/> */}
      <SafeAreaView style={styles.container}>
{/* 
        <Header/>

       <Greeting/> */}

        {/* <RandomQuote/> */}

        {/* <Carousel/>

        <Options/>

        <BottomNavigation/> */}

        {/* <LoginUI/> */}

        {/* <LoginDetailUI/> */}

        {/* <SignupUI/> */}

        <MapFeature/>
        
        <StatusBar style="auto" />

      </SafeAreaView>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1 ,
    backgroundColor: '#F1F1F1', //F4F4F4
  },
});
