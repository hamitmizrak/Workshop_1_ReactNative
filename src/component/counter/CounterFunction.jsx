/* 
FUNCTION COMPONENT ÖZELLİKLERİ
1-) props erişim
4-) Yorumlama {/* * /}
4-) componentDidMount() : Componenti render edildikten sonra çalışır
5-) componentWillUnmount() : Componenti render edildikten önce çalışır
6-) componentDidUpdate(prevProps, prevState) : State değiştiğinde çalışır
7-) shouldComponentUpdate(nextProps, nextState) : Render edilmek isteniyor mu? (true ise render edilir, false ise render edilmeyecek)
8-) state, setState
9-) bind
*/

// IMPORT
// REACT NATIVE
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';

// Vector Icons
import Icon from 'react-native-vector-icons/FontAwesome';

// REACT
import React, {useEffect, useState} from 'react';

// FUNCTION COMPONENT
function CounterFunction() {
  // HOOKS STATE
  //const [counter, setCounter] = React.useState(0);
  const [counter, setCounter] = useState(0); // başlangıç değeri sıfır

  /////////////////////////////////////////////////////////////////////////
  // HOOKS USEEFFECT
  useEffect(() => {
    if (counter >= 10) {
      Alert.alert('Sayacınız 10 e ulaştı!');
    }
  }, [counter]);

  /////////////////////////////////////////////////////////////////////////
  // FUNCTION
  // inCreaseCounter: Sayaç Değerini 1 artırır
  const inCreaseCounter = () => {
    // Durumu güncelle 1 artır
    setCounter(prevState => prevState + 1);
  }; //end inCreaseCounter

  // deCreaseCounter: Sayaç Değerini 1 azaltır
  const deCreaseCounter = () => {
    // Eğer sayaç 0'dan küçük olursa,saymaya devam etmesin ve uyarı versin
    if (counter <= 0) {
      // \n : Escape Character
      Alert.alert('Saymaya devam edilmiyor,\nSıfırdan küçük olamaz !!!');
      // Sayaçı sıfırlamak
      setCounter(0);
    } else {
      setCounter(prevState => prevState - 1);
    }
  }; //end deCreaseCounter

  // resetCounter: Sayaç Değerini sıfırlasın
  const resetCounter = () => {
    // Sayaçı sıfırlamak
    setCounter(0);
  }; //end deCreaseCounter

  ////////////////////////////////////////////////////////////////////////
  // RETURN
  return (
    <ImageBackground
      source={require('../../assets/profile.webp')}
      style={styles.imageBackgroundStyle}>
      <View style={styles.container}>
        {/*  Sayaç Göster */}
        <Text style={styles.counterText}>Sayaç: {counter}</Text>

        {/* Button Group */}
        <View style={styles.buttonGroup}>
          {/* ARTIRMA 1.YOL */}
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'orange'}]}
            onPress={inCreaseCounter}>
            <Icon name="plus" size={15} color="#fff" />
            <Text style={styles.buttonText}>Artır</Text>
          </TouchableOpacity>
          {/* ARTIRMA 2.YOL */}
          {/* <Button title="Sayaç Artır" onPress={inCreaseCounter} /> */}

          {/* AZALTACAK 1.YOL */}
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'red'}]}
            onPress={deCreaseCounter}>
            <Icon name="minus" size={15} color="#fff" />
            <Text style={styles.buttonText}>Azalt</Text>
          </TouchableOpacity>
          {/* AZALTACAK 2.YOL */}
          {/* <Button title="Sayaç Azalt" onPress={deCreaseCounter} /> */}

          {/* TEMİZLE 1.YOL */}
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'blue'}]}
            onPress={resetCounter}>
            <Icon name="reflesh" size={15} color="#fff" />
            <Text style={styles.buttonText}>Temizle</Text>
          </TouchableOpacity>
          {/* TEMİZLE 2.YOL */}
          {/* <Button title="Sayaç Temizle" onPress={resetCounter} /> */}
        </View>
      </View>
    </ImageBackground>
  ); // end return
} // end FunctionClass

// EXPORT
export default CounterFunction;

/////////////////////////////////////////////////////////////////////////
// CSS(STYLE)
const styles = StyleSheet.create({
  imageBackgroundStyle: {
    flex: 1,
    resizeMode: 'cover',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#383E42',
  },

  counterText: {
    color: '#000',
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
