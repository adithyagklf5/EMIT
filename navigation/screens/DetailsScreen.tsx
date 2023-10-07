import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color:Colors.white,
            fontFamily: 'Mokoto-Demo',
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: Colors.white,
            fontFamily: 'JetBrainsMono-Bold',
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: Colors.black,
    
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}> 
        <View
          style={{
            backgroundColor:Colors.black,
          }}>
          <Section title="">
           DETAILS
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    marginBottom:-200,
  },
  sectionTitle: {
    fontSize: 35,
    fontWeight: '600',
    marginLeft:130,
    marginTop:-65,
  },
  sectionDescription: {
    fontSize:12,
    fontWeight: '400',
    marginLeft:0,
    marginRight:-150,
    marginBottom:200,
    lineHeight:80,
    paddingBottom:10,
  },
  highlight: {
    fontWeight: '700',
  },
  AntDesignIcon:{
    marginLeft:330,
    marginTop:10,
  },
  search:{
    marginLeft:30,
    marginTop:-25,
  },
  up:{
    marginLeft:55,
    marginTop:-200,
    marginBottom:100,
    paddingBottom:90,
    paddingTop:-200,
  },
  imagestyle:{
    width:200,
    height:200,
    marginBottom:-10,
    marginTop:-100,
    marginLeft:-110,
  },
  imagestyle1:{
    width:200,
    height:210,
    marginBottom:-10,
    marginTop:30,
    marginLeft:300,
  },
  info:{
    fontFamily:'JetBrainsMono-Regular',
    fontSize:13,
    paddingLeft:10,
    paddingRight:10,
    marginBottom:80,
    color:'silver',
  },
  info1:{
    backgroundColor:'white',
    fontFamily:'JetBrainsMono-Bold',
    fontSize:16,
    paddingLeft:55,
    paddingRight:10,
    marginBottom:150,
    paddingTop:20,
    paddingBottom:25,
    marginLeft:40,
    marginRight:40,
    color:'black',
    borderRadius:30,
    marginTop:40,
  },
  imagestyle2:{
    width:200,
    height:200,
    marginBottom:70,
    marginTop:-70,
    marginLeft:92,
    borderRadius:18,
  },
  imagestyle3:{
    width:380,
    height:220,
    marginBottom:150,
    marginTop:10,
    marginLeft:7,
    borderRadius:0,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    marginBottom:100,
    marginLeft:50,
    marginRight:50,
    paddingBottom:80,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'JetBrainsMono-Bold',
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor: 'transparent',
  },
});

export default App;
