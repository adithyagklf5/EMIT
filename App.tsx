import  React,{useRef} from 'react';
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
  Animated,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import { ButtonGroup, withTheme } from '@rneui/themed';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {MagicSheetPortal} from 'react-native-magic-sheet';
import { Dimensions,FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';
import RNFadedScrollView from 'rn-faded-scrollview';
import { BackgroundImage } from '@rneui/base';
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
        <AntDesignIcon
           style={styles.AntDesignIcon}
           name="search1"
           size={25}
           color="white"
          />
          <AntDesignIcon 
           style={styles.search}
           name="menufold"
           size={25}
           color="white"
          />
          <Section title="EMIT">
          </Section>
      <ScrollView fadingEdgeLength={60}
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle} 
        decelerationRate={'normal'}
        alwaysBounceVertical
        > 
        <View
          style={{
            backgroundColor:Colors.black,
          }}>
          <Image 
          style={styles.imagestyle1}
          source={require("./assets/circle.png")}
          />
          <Image 
          style={styles.imagestyle}
          source={require("./assets/circle.png")}
          />
          <Image 
          style={styles.imageStyle}
          source={require("./assets/iss1.jpeg")}
          />
          <Section title="">
            EARTH SURFACE MINERAL DUST SOURCE INVESTIGATION
          </Section>
          <Text
          style={styles.info1}>
            SWIPE UP TO LEARN MORE!
          </Text>
          <AntDesignIcon
           style={styles.up}
           name="caretcircleoup"
           size={26}
           color="black"
          />
          <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={'fast'}
          contentInsetAdjustmentBehavior="automatic"  
        >
         <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#cc9900','#663300', 'grey']} style={styles.linearGradient}>
         <Text style={styles.info4}>
          GET YOUR FACTS RIGHT!
         </Text>
          <Image
          style={styles.cards}
          source={require("./assets/cards.png")}
          />
         </LinearGradient>
         <LinearGradient start={{x: 1, y: 0}} end={{x: 1, y: 1}} colors={['blue','violet', 'grey']} style={styles.linearGradient}>
         <Image
         style={styles.cards}
         source={require("./assets/cards.png")}
         />
         </LinearGradient>
          <Image 
          style={styles.cards}
          source={require("./assets/cards.png")}
          />
          </ScrollView>
     <Image 
       style={styles.imagestyle2}
       source={require("./assets/emit1.png")}
       />
       <Text
       style={styles.info}>
       Mineral dust blown into the air is an important part of the Earth system.  Wind blows dust into the atmosphere from desert regions around the world, and can carry dust across oceans. Dark minerals that absorb sunlight can warm the Earth, while light-colored minerals can cool the Earth. By accurately mapping the composition of areas that produce mineral dust, EMIT will advance our understanding of dust’s effects throughout the Earth system and to human populations now and in the future.


      </Text>
      <Image 
       style={styles.imagestyle3}
       source={require("./assets/chart.png")}
       />
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
  imageStyle:{
    width:250,
    height:200,
    marginLeft:60,
    marginBottom:-40,
    marginTop:-42,
    },
  AntDesignIcon:{
    marginLeft:330,
    marginTop:10,
  },
  search:{
    marginLeft:19,
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
    marginTop:-10,
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
    paddingLeft:1,
    paddingRight:1,
    borderRadius: 20,
    marginBottom:110,
    marginLeft:7,
    marginRight:0,
    paddingBottom:50,
    width:372,
    alignSelf:'auto'
  },
  cards:{
    width:360,
    height:310,
    paddingBottom:200,
    marginBottom:200,
    borderRadius:20,
    marginLeft:5,
    marginRight:17,
    marginTop:50,
    paddingTop:10,
  },
  info4:{
    backgroundColor:'white',
    fontFamily:'JetBrainsMono-Bold',
    fontSize:20,
    paddingLeft:30,
    paddingRight:10,
    marginBottom:50,
    paddingTop:10,
    paddingBottom:10,
    marginLeft:35,
    marginRight:40,
    color:'black',
    borderRadius:13,
    marginTop:20,
  },
  linearGradient1:{
      marginLeft:330,
      height:30,
      marginRight:30,
      marginTop:10,
      backgroundColor:'grey'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'JetBrainsMono-Bold',
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor: 'transparent',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: 16,
    backgroundColor: '#F3F4F9',
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  panelHandle: {
    width: 40,
    height: 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 4
  },
  item: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    marginVertical: 10,
  },
  item1:{
   height:80,
   backgroundColor:'white',
   marginVertical:2,
  },
  backgroundStyle: {
    flex: 1,
    borderRadius:10,
  },
});

export default App;
