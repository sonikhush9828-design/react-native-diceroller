import { View, Text,Image,
  StyleSheet,
  ImageSourcePropType,
  Pressable
 } from 'react-native'
import React ,{useState} from 'react'
import type { PropsWithChildren } from 'react'
import RNHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/one.png'
import DiceTwo from '../assets/two.png'
 import DiceThree from '../assets/third.png'
 import DiceFour from '../assets/four.png'
 import DiceFive from '../assets/five.png'
 import DiceSix from '../assets/six.png'

 type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
 }>
 const options ={
   enableVibrateFallback: true, 
  ignoreAndroidSystemSettings: false

 };
 const Dice =({imageUrl} :DiceProps) : React.JSX.Element =>{
  return(
    <View>
      <Image style ={styles.diceImage} source ={imageUrl}
      />
    </View>

  )

 }

function App () : React.JSX.Element{
  const [diceImage,setdiceImage] = useState<ImageSourcePropType>(DiceOne)
  const rolldiceOnTap =() =>{
    let randomNumber =Math.floor(Math.random() *6) +1;


    switch (randomNumber) {
      case 1:
        setdiceImage(DiceOne)
        break ;

         case 2:
        setdiceImage(DiceTwo)
        break ;

         case 3:
        setdiceImage(DiceThree)
        break ;

         case 4:
        setdiceImage(DiceFour)
        break ;

         case 5:
        setdiceImage(DiceFive)
        break ;

         case 6:
        setdiceImage(DiceSix)
        break ;

  
    
      default:
        setdiceImage(DiceOne)
        break;
    }
    RNHapticFeedback.trigger("impactLight",options); 
  }

  return (
    <View style ={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable onPress ={rolldiceOnTap}
      
      >
        <Text style={styles.rolldicebtntxt} > Roll the dice</Text>
      </Pressable>

    </View>
  )
}


const styles = StyleSheet.create({
  diceImage:{
    width: 200,
    height: 200,
  },
  container:{
     flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#523b3b',
  },
  
  rolldicebtntxt:{
    paddingVertical: 10,
    marginBottom:8,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#000000',
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '700',
    textTransform: 'uppercase',
  }

  
  

})


export default App