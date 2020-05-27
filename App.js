/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

const App = () => {
  // console.log(useDimensions());
  // console.log(useDeviceOrientation());
  const {landscape} = useDeviceOrientation();

  return (
    // <SafeAreaView style={[styles.container]}>
    //   {/* <Text>Hello React Native</Text> */}
    //   {/* <Image source={require('./assets/snoopy.jpg')} /> */}
    //   {/* <TouchableHighlight onPress={() => console.log('Image tapped')}>
    //     <Image
    //       source={{
    //         uri: 'https://picsum.photos/200',
    //         width: 200,
    //         height: 200,
    //       }}
    //     />
    //   </TouchableHighlight>
    //   <TouchableNativeFeedback>
    //     <View style={{width: 200, height: 70, backgroundColor: 'white'}} />
    //   </TouchableNativeFeedback> */}
    //   {/* <Button
    //     title="Click Me"
    //     onPress={() =>
    //       Alert.alert('My title', 'My message', [
    //         {
    //           text: 'Yes',
    //           onPress: () => console.log('Yes'),
    //         },
    //         {
    //           text: 'No',
    //           onPress: () => console.log('No'),
    //         },
    //       ])
    //     }
    //   /> */}
    //   {/* <View
    //     style={{
    //       backgroundColor: '#fff',
    //       width: '100%',
    //       height: landscape ? '100%' : '30%',
    //     }}
    //   /> */}
    // </SafeAreaView>
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center', // align items along the primary axis (main)
        alignItems: 'center', // align items along the cross axis (secondary)
      }}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          // flex: 2,
          width: 100,
          height: 300,
          alignSelf: 'flex-start',
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          // flex: 1,
          width: 100,
          height: 200,
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          // flex: 1,
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
};

/*
  Purposes of using Stylesheet.create
  1. Validate the style properties
  2. Optimize the styling
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default App;
