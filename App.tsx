/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  
  return (
    <View style={styles.container}>
      <View style={styles.flexBetween}>
        <TouchableOpacity>
          <Image style={styles.smallIcon} source={require('./assets/icons/menu.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/icons/man.png')}/>
        </TouchableOpacity>
      </View>
      <Text style={[styles.header1, styles.mt30]}>Hey Alex,</Text>
      <Text style={[styles.fs22, styles.mt15, styles.textColor]}>Find a course you want to learn</Text>
      <View style={[styles.searchBox, styles.mt35]}> 
        <TouchableOpacity>
          <Image style={styles.smallIcon} source={require('./assets/icons/loupe.png')}/>
        </TouchableOpacity>
        <TextInput style={[styles.ml20, styles.fs18, styles.textColor]} placeholder='Search for anything'></TextInput>
      </View>
      <View style={[styles.flexBetween, styles.mt30]}>
        <Text style={styles.header3}>Categories</Text>
        <TouchableOpacity>
          <Text style={[styles.header3, styles.textColorBlue]}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.mt30, styles.listCategory]}>
        <View style={[styles.categoryItem]}>
          <ImageBackground imageStyle={{borderRadius: 20}}  style={styles.imageBackGround} resizeMode='cover' source={require('./assets/images/uxDesign.jpg')}>
            <Text style={[styles.header3]}>UX Design</Text>
            <Text>25 Courses</Text>
          </ImageBackground>
        </View>
        <View style={[styles.categoryItem]}> 
          <ImageBackground imageStyle={{borderRadius: 20}}  style={styles.imageBackGround} resizeMode='cover' source={require('./assets/images/marketing.jpg')}>
            <Text style={[styles.header3]}>Marketing</Text>
            <Text>20 Courses</Text>
          </ImageBackground>
        </View >
        <View style={[styles.categoryItem]}>
          <ImageBackground imageStyle={{borderRadius: 20}}  style={styles.imageBackGround} resizeMode='cover' source={require('./assets/images/photography.jpg')}>
            <Text style={[styles.header3]}>Photography</Text>
            <Text>16 Courses</Text>
          </ImageBackground>
        </View>
        <View style={[styles.categoryItem]}>
          <ImageBackground imageStyle={{borderRadius: 20}}  style={styles.imageBackGround} resizeMode='cover' source={require('./assets/images/business.jpg')}>
            <Text style={[styles.header3]}>Business Photography</Text>
            <Text>7 Courses</Text>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white'
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  header1: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
  },
  header3: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  textColor: {
    color: 'rgb(103, 105, 117)'
  },
  textColorBlue: {
    color: 'rgb(135,149,198)',
  },
  mt30: {
    marginTop: 30,
  },
  mt15: {
    marginTop: 15,
  },
  fs22: {
    fontSize: 22,
  },
  smallIcon: {
    width: 25,
    height: 25,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: 'rgb(233,233,235)',
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 100,
  },
  ml20: {
    marginLeft: 20,
  },
  fs18: {
    fontSize: 18,
    fontWeight: '300'
  },
  mt35: {
    marginTop: 35,
  },
  listCategory: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  categoryItem: {
    height: 300, 
    backgroundColor: 'grey',
    width: 180,
    borderRadius: 20,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 0.5
  },
  imageBackGround: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  }
});

export default App;
