import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bdc7d9',
  },
  radio: {
    display:"flex",
    flexDirection:"row",
    fontSize:20,
    borderColor:"#000000",
    padding:5,
    margin:5,
    alignContent:"center",
  },
  button: {
    borderWidth: 1,
  },
  heading: {
    fontSize:25,
    paddingBottom:25,
    textDecorationLine: 'underline'
  },
  input: {
    display:"flex",
    flexDirection:"row",
    fontSize: 20,
    padding:6,
  },
  labels: {
    fontSize:20,
    display:"flex",
    flexDirection:"row",
  },
  text: {
    fontSize:20,
    padding: 20,
  },
  switch: {
    position: "absolute",
    bottom: 0,
    alignSelf: "flex-end",
    display: "flex",
    flexDirection: "row",
    paddingRight: 30,
    paddingBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  numeric: {
    paddingBottom:10,
    display:"flex",
    flexDirection:"row",
    paddingBottom:20,
  },


});

const Dark = StyleSheet.create({
  container: {
    ...Styles.container,
    backgroundColor: '#393c4a',
  },

  text: {
    ...Styles.text,
    color:"#fff"
  },

  heading: {
    ...Styles.heading,
    color:"#fff"
  },

  radio: {
    ...Styles.radio,
    color:"#fff"
  },

  input: {
    ...Styles.input,
    color:"#fff"
  },

  radioBtn: {
    ...Styles.radioBtn,
    color:"#fff",
    fontSize:25,
  }

})


export {Styles, Dark};
  