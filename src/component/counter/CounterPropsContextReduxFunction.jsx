// rnfes
/*
FUNCTION COMPONENT ÖZELLİKLERİ
1-) props erişim
2-) Yorumlama {/* * /}
3-) Hooks
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
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useCounterContext} from '../counter_props_context_redux/CounterContextApi';

///////////////////////////////////////////////////////////////////////////////////////////
// Uyarı Kartı Bileşeni
const AlertCard = ({visible, onClose, message}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.alertContainer}>
        <View style={styles.alertBox}>
          <Text style={styles.alertMessage}>{message}</Text>
          <TouchableOpacity style={styles.alertCloseButton} onPress={onClose}>
            <Text style={styles.alertCloseButtonText}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

// Modal Kapatmak
const closeAlert = () => {
  setIsAlertVisible(false);
};

///////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION COMPONENT
const CounterPropsContextReduxFunction = ({route}) => {
  // Hooks(Kanca)
  // Props Veri Almak
  const {initialCount, modalMessage} = route.params;

  // Redux Hooks
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  // Context Hooks
  const {info} = useCounterContext();

  /////////////////////////////////////////////////////////////////////////
  // UseRef Hooks
  // UseRef Hooks: Sistemi hızlandırmak için performans sağlar
  // UseRef Hooks: Referans almak için kullanılır.
  // Renderlar arasında kalıcılığı sağlar. Ve bundan dolayı tekrar tekrar render yapılmasını engeller
  // useRef() Hooks'u(kanca) bir bileşenin yaşam döngüsüsü boyunca saklanan bir değerdir.
  const buttonClickCount = useRef(0);

  // State
  // Alert göstersin yada göstermesin.
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  // sabit bir değer almak için bunu ekledim.
  const targetCount = 10;

  /////////////////////////////////////////////////////////////////////////
  // useEffect
  useEffect(() => {
    // eğer sayı 10 olursa Modal Dialog açılsıhn
    if (count === targetCount) {
      setIsAlertVisible(true);
    }
    console.log(`Counter ${count}`);
    console.log(`Counter clicked ${buttonClickCount.current} kere tıkladınız`);

    // Temizleme Yapsın
    return () => {
      console.log('Counter useEffect Temizleme');
    };
  }, [count]); //end useEffect

  /////////////////////////////////////////////////////////////////////////
  // HOOKS USE-EFFECT
  useEffect(() => {
    if (count >= 10) {
      Alert.alert('Sayacınız 10 e ulaştı!');
    }
  }, [count]);

  /////////////////////////////////////////////////////////////////////////
  // HOOKS USE-MEMO
  // useMemo: Hesaplanmış veri üzerinden manipulasyonu sağlar
  // useMemo  Counter değerinin iki katını hesaplayan
  const doubleCount = useMemo(() => {
    console.log('useMemo ');
    return count * 2;
  }, [count]);

  /////////////////////////////////////////////////////////////////////////
  // FUNCTION
  // inCreaseCounter: Sayaç Değerini 1 artırır
  const inCreaseCounter = useCallback(() => {
    dispatch({type: 'INCREMENT'});
    // Durumu güncelle 1 artır
    buttonClickCount.current += 1;
  }, [dispatch]); //end inCreaseCounter

  // deCreaseCounter: Sayaç Değerini 1 azaltır
  const deCreaseCounter = useCallback(() => {
    dispatch({type: 'DECREMENT'});
    // Eğer sayaç 0'dan küçük olursa,saymaya devam etmesin ve uyarı versin
    if (count <= 0) {
      // \n : Escape Character
      Alert.alert('Saymaya devam edilmiyor,\nSıfırdan küçük olamaz !!!');

      // Sayaçı sıfırlamak (1.YOL)
      dispatch({type: 'RESET'});
      buttonClickCount.current = initialCount; // Butonu tıkladığımda tıklama sayımınıın başlangıç değerine getirsin
      // Sayaçı sıfırlamak (2.YOL)
      //resetCounter();
    } else {
      buttonClickCount.current -= 1;
    }
  }, [count, dispatch]); //end deCreaseCounter

  // resetCounter: Sayaç Değerini sıfırlasın
  const resetCounter = () => {
    // Sayaçı sıfırlamak
    dispatch({type: 'RESET'});
    buttonClickCount.current = initialCount; // Butonu tıkladığımda tıklama sayımınıın başlangıç değerine getirsin
  }; //end deCreaseCounter

  ////////////////////////////////////////////////////////////////////////
  // RETURN
  return (
    <ImageBackground
      source={require('../../assets/profile.webp')}
      style={styles.imageBackgroundStyle}>
      <View style={styles.container}>
        {/*  Sayaç Göster */}
        <Text style={styles.counterText}>Sayaç: {count}</Text>
        <Text style={styles.memoText}>Sayaç iki katı use memo: {doubleCount}</Text>
        <Text style={styles.infoText}>Context: {info}</Text>

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
}; // end FunctionClass

// EXPORT
export default CounterPropsContextReduxFunction;

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
    marginBottom: 10,
    textTransform: 'uppercase',
  },

  memoText:{
    color:"#fff",
  },

  infoText: {
    color: 'gray',
    fontSize: 12,
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
