import { Button, Switch, Text, TextInput, View, Keyboard, TouchableWithoutFeedback, ScrollView} from 'react-native';
import NumericInput from 'react-native-numeric-input'
import { useState } from 'react';
import { RadioButton} from 'react-native-paper';
import {Styles, Dark} from './styles/Styles.js'



export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0)
  const [hours, setHours] = useState(0)
  const [gender, setGender] = useState(0);
  const [bloodLevel, setBloodLevel] = useState(0);
  const [screenMode, setScreenMode] = useState("Toggle night mode")
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => setIsOn(previousState => !previousState);

  const theme = isOn ? Dark : Styles

  function calculate() {
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * hours);
    const finalResult = gramsLeft / (weight * gender)

    if (gender == 0) {
      setBloodLevel("Choose gender")
      return
    }
    if (weight == 0) {
      setBloodLevel("Insert Weight")
      return
    }
    
    if (finalResult > 0) {
      setBloodLevel(finalResult.toFixed(2))
    }
    else {
      setBloodLevel(0)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ScrollView contentContainerStyle={theme.container}>
      <Text style={theme.heading}>Alcometer</Text>
      <TextInput style={theme.input}
        placeholder="Insert weight"
        keyboardType="numeric"
        onChangeText={val => setWeight(val)}
        defaultValue={weight}
        placeholderTextColor="#ffc559"
        variant="outlined"
      />

      <View style={Styles.labels}>
        <Text style={[theme.text, {paddingRight:55}]}>Bottles</Text>
        <Text style={theme.text}>Hours</Text>
      </View>
      <View style={Styles.numeric}>
        <NumericInput
          onChange={val => setBottles(val)}
          minValue={0}
        />
        <NumericInput
         onChange={val => setHours(val)}
         minValue={0}
         />
      </View>

      <RadioButton.Group  onValueChange={value => setGender(value)} value={gender}>

        <View style={theme.radio}>
          <Text style={{fontSize:25, paddingLeft:40, color:"#5687f0"}}>Male</Text>
          <RadioButton color='#5687f0' label="Male" value={0.7} />
          <Text style={{fontSize:25, color:"#f05689"}}>Female</Text>
          <RadioButton color='#f05689' label="Female" value={0.6} />
        </View>
      </RadioButton.Group>

      <Button
        onPress={calculate}
        title="Calculate"
        color="#ffc559"
      />
      <Text style={{fontSize:20, paddingTop:10, color:"#ffc559"}}>{bloodLevel}</Text>
      <View style={Styles.switch}>
        <Text style={{paddingRight:10}}>{screenMode}</Text>
        <Switch 
          value={isOn}
          onValueChange={ () => setIsOn(!isOn)}
        />
      </View>
    </ScrollView>
    </TouchableWithoutFeedback>
  );
}

