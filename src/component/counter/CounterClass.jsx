/* 
CLASS COMPONENT ÖZELLİKLERİ
1-) props erişim için this anahtarı kullanırılır.
2-) Render vardır
3-) Constructor,super
4-) Yorumlama {/* * /}
4-) componentDidMount() : Componenti render edildikten sonra çalışır
5-) componentWillUnmount() : Componenti render edildikten önce çalışır
6-) componentDidUpdate(prevProps, prevState) : State değiştiğinde çalışır
7-) shouldComponentUpdate(nextProps, nextState) : Render edilmek isteniyor mu? (true ise render edilir, false ise render edilmeyecek)
8-) state, setState
9-) bind
*/

// IMPORT
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

// Vector Icons
import Icon from 'react-native-vector-icons/FontAwesome';

// COUNTER CLASS
class CounterClass extends Component {
  // constructor(Kurucu Method: Default ayarlar)
  constructor(props) {
    super(props);

    // State (Durum)
    this.state = {
      counter: 0, //Başlangıçta sıfır ile başlasın
    };

    // bind(Bağlama)
    this.inCreaseCounter = this.inCreaseCounter.bind(this);
    this.deCreaseCounter = this.deCreaseCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  } //end constructor

  /////////////////////////////////////////////////////////////////////////
  // FUNCTION

  // inCreaseCounter: Sayaç Değerini 1 artırır
  inCreaseCounter = () => {
    // Durumu güncelle 1 artır
    this.setState(prevState => ({
      // State'ı 1 artırır
      counter: prevState.counter + 1,
    }));
  }; //end inCreaseCounter

  // deCreaseCounter: Sayaç Değerini 1 azaltır
  deCreaseCounter = () => {
    // Eğer sayaç 0'dan küçük olursa,saymaya devam etmesin ve uyarı versin
    if (this.state.counter <= 0) {
      // \n : Escape Character
      Alert.alert('Saymaya devam edilmiyor,\nSıfırdan küçük olamaz !!!');
      // Sayaçı sıfırlamak
      this.setState({counter: 0});
    } else {
      this.setState(prevState => ({
        // State'ı 1 azalt
        counter: prevState.counter - 1,
      }));
    }
  }; //end deCreaseCounter

  // resetCounter: Sayaç Değerini sıfırlasın
  resetCounter = () => {
    // Sayaçı sıfırlamak
    this.setState({counter: 0});
  }; //end deCreaseCounter

  /////////////////////////////////////////////////////////////////////////
  // RENDER
  render() {
    // RETURN
    return (
      // React her zaman sarmalayıcı bir yapı ister buradaki wrapper(sarmalayıcı)) View
      <View style={styles.container}>

        {/*  Sayaç Göster */}
        <Text style={styles.counterText}>Sayaç: {this.state.counter}</Text>

        {/* Button Group */}
        <View style={styles.buttonGroup}>

          {/* ARTIRMA 1.YOL */}
          <TouchableOpacity
            style={[styles.button,{backgroundColor:'orange'}]}
            onPress={this.inCreaseCounter}>
            <Icon name="plus" size={15} color="#fff" />
            <Text style={styles.buttonText}>Artır</Text>
          </TouchableOpacity>
          {/* ARTIRMA 2.YOL */}
          {/* <Button title="Sayaç Artır" onPress={this.inCreaseCounter} /> */}

          {/* AZALTACAK 1.YOL */}
          <TouchableOpacity
            style={[styles.button,{backgroundColor:'red'}]}
            onPress={this.deCreaseCounter}>
            <Icon name="minus" size={15} color="#fff" />
            <Text style={styles.buttonText}>Azalt</Text>
          </TouchableOpacity>
          {/* AZALTACAK 2.YOL */}
          {/* <Button title="Sayaç Azalt" onPress={this.deCreaseCounter} /> */}

          {/* TEMİZLE 1.YOL */}
          <TouchableOpacity 
          style={[styles.button,{backgroundColor:'orange'}]}
          onPress={this.resetCounter}>
            <Icon name="reflesh" size={15} color="#fff" />
            <Text style={styles.buttonText}>Temizle</Text>
          </TouchableOpacity>
          {/* TEMİZLE 2.YOL */}
          {/* <Button title="Sayaç Temizle" onPress={this.resetCounter} /> */}
        </View>
      </View>
    ); // end return
  } // end render
} // end CounterClass

//EXPORT
export default CounterClass;

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
