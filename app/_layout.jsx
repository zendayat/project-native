import {StyleSheet, text, view} from 'react-native';


const App = () => {
  return (
    <view style={StyleSheet.container}>
      <Text>Aora!!</Text>
      <statusbar style="auto"/>
    </view>
  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center'
    }
})


