// IMPORT
// REACT NATIVE
import {View, Text, StyleSheet} from 'react-native';

// REACT
import React, {useState} from 'react';

// FUNCTION COMPONENT
function CounterFunction() {
  // HOOKS STATE
  //const [counter, setCounter] = React.useState(0);
  const [counter, setCounter] = useState(0); // başlangıç değeri sıfır

  /////////////////////////////////////////////////////////////////////////
  // FUNCTION

  // inCreaseCounter: Sayaç Değerini 1 artırır
  const inCreaseCounter = () => {
    // Durumu güncelle 1 artır
    setCounter(prevState => prevState+1);
  }; //end inCreaseCounter

  // deCreaseCounter: Sayaç Değerini 1 azaltır
  deCreaseCounter = () => {
    // Eğer sayaç 0'dan küçük olursa,saymaya devam etmesin ve uyarı versin
    if (counter <= 0) {
      // \n : Escape Character
      Alert.alert('Saymaya devam edilmiyor,\nSıfırdan küçük olamaz !!!');
      // Sayaçı sıfırlamak
      setCounter(0);
    } else {
      setCounter(prevState => prevState-1);
    }
  }; //end deCreaseCounter

  // resetCounter: Sayaç Değerini sıfırlasın
  resetCounter = () => {
    // Sayaçı sıfırlamak
    setCounter(0);
  }; //end deCreaseCounter

  ////////////////////////////////////////////////////////////////////////
  // RETURN
  return (
    <View style={styles.container}>
      <Text>CounterFunction</Text>
    </View>
  ); // end return
} // end FunctionClass

// EXPORT
export default CounterFunction;

/////////////////////////////////////////////////////////////////////////
// CSS(STYLE)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#383E42',
  },

  counterText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    flex: 1,
    backgroundColor: '#53585E',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#f2f2f2',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); // end StyleSheet
