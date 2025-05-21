import { StatusBar } from 'expo-status-bar';
/*import {Image} from 'expo_image';*/
import { StyleSheet, Text, View, Image } from 'react-native';
import {Box} from "@/components/ui/box";
/*import {Text} from "@/components/ui/text";*/



export default function App() {
  return (
    <View style={styles.container}>
      <Box className='main_box' style={styles.box}>
        <Box className='inner_box' style={styles.s_box}></Box>
        {/*<Text>Open up App.js to start working on your app!</Text>*/}
        <StatusBar style="auto" />
      </Box>
      <View className='lower_part' style={styles.lower_part}>
        <Image className='my_image' style={styles.image}  source={require('./assets/filler.png')}/>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(225,217,246)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0)',
    width: '100%',
    height: '10%',
    top: 0,
  },
  s_box: {
    position: "absolute",
    width: "100%",
    height: "10%",
    backgroundColor: "#926EF9",
    top: '10%',
  },
  lower_part: {
    position: "absolute",
    width: "100%",
    height: "90%",
    top: "10%",
    backgroundColor: "rgba(255,255,255,0)",
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0)",


  },
});
