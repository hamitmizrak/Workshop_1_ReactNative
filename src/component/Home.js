// IMPORT
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// REACT NATIVE LIBRARIES
import {
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';

// Blur View
import {BlurView} from '@react-native-community/blur';

// COUNTER CLASS
import CounterClass from './counter/CounterClass';

// COUNTER FUNCTION
import CounterFunction from './counter/CounterFunction';

// STACK (CREATE)
const Stack = createNativeStackNavigator();

// REDUX
import {Provider} from 'react-redux';
import StoreRedux from './counter_props_context_redux/CounterReduxStore';

// CONTEXT
import {CounterContextProvider} from './counter_props_context_redux/CounterContextApi';

// PROPS CONTEXT REDUX FUNCTION
import CounterPropsContextReduxFunction from './counter/CounterPropsContextReduxFunction';

// NAVIGATION (HOME)
// 1.YOL => function Home(){return()}
// 2.YOL => const Home=()=>{return()}
function Home() {
  return (
    // Redux import
    <Provider store={StoreRedux}>
      {/* Context */}
      <CounterContextProvider>
        {/*Navigation*/}
        <NavigationContainer>
          <Stack.Navigator>

            {/* Home */}
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Anasayfaya Hoşgeldiniz.'}}
            />

            {/* Counter Class Component */}
            <Stack.Screen
              name="CounterClassName"
              component={CounterClass}
              options={{title: 'Counter Class'}}
            />

            {/* Counter Function Component */}
            <Stack.Screen
              name="CounterFunctionName"
              component={CounterFunction}
              options={{title: 'Counter Function'}}
            />

            {/* Counter Props, Context, Redux Function Component */}
            <Stack.Screen
              name="CounterPropsContextReduxFunction"
              component={CounterPropsContextReduxFunction}
              options={{
                title: 'Counter Props Context Redux Function',
              }}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </CounterContextProvider>
      {/* end Context */}
    </Provider> // end redux
  ); //end return
} // end Home

// EXPORT
export default Home;

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// Home Screen
const HomeScreen = ({navigation, route}) => {
  const counterFunction = () =>
    //Alert.alert('Counter Function', 'Resme Tıklandı.');
    navigation.navigate('CounterFunctionName', {
      name: 'CounterFunctionName',
    });

  // RETURN
  return (
    <View style={styles.container}>
      {/* /////////////////////////////////////////////////////////////////////////// */}

      {/* Header */}
      <View style={styles.header}>
        <TextInput placeholder="Arama" style={styles.searchInputStyle} />
        <Text style={styles.searchTextStyle}>Hepsi</Text>
      </View>

      {/* /////////////////////////////////////////////////////////////////////////// */}
      {/* CARD */}
      {/* Component-1 */}
      <ScrollView horizontal={true} style={styles.scrollViewCardStyle}>
        {/* Counter Class Component-1 */}
        <View style={styles.cardViewStyle}>
          <TouchableOpacity
            title="Counter Class"
            onPress={() =>
              navigation.navigate('CounterClassName', {
                name: 'CounterClassName',
              })
            }>
            <Image
              source={require('../assets/device.webp')}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
                backgroundColor: '#000',
              }}
            />
            {/* <Text></Text> */}
          </TouchableOpacity>

          {/* Blur Effect */}
          <BlurView
            style={styles.blurViewStyle}
            blurType="light"
            blurAmount={10}>
            <Text style={styles.blurViewTextStyle}>Counter Class</Text>
          </BlurView>
        </View>
        {/* end Counter Class Component-1 */}

        {/* Counter Function Component-2 */}
        <View style={styles.cardViewStyle}>
          <TouchableOpacity onPress={counterFunction}>
            <Image
              source={require('../assets/profile.webp')}
              style={styles.viewImageStyle}
            />
          </TouchableOpacity>
          <Text style={styles.blurViewTextStyle}>Counter Function</Text>

          {/* Blur Effect */}
          <BlurView
            style={styles.blurViewStyle}
            blurType="light"
            blurAmount={10}>
            <Text style={styles.blurViewTextStyle}>Counter Function</Text>
          </BlurView>
        </View>

        {/* Counter Props, Context, Redux Function Component-3 */}
        <View style={styles.cardViewStyle}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CounterPropsContextReduxFunction', {
                name: 'CounterPropsContextReduxFunction',

                // Props parametresi gönder
                initialCount: '0',
                modalMessage: 'Sayaç 10 geçti',
              })
            }>
            <Image
              source={require('../assets/mobil.webp')}
              style={styles.viewImageStyle}
            />
          </TouchableOpacity>
          <Text style={styles.blurViewTextStyle}>Props,Context,Redux</Text>

          {/* Blur Effect */}
          <BlurView
            style={styles.blurViewStyle}
            blurType="light"
            blurAmount={10}>
            <Text style={styles.blurViewTextStyle}>Props,Context,Redux</Text>
          </BlurView>
        </View>
      </ScrollView>
    </View>
  ); //end return
}; // end Home Screen

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#019',
    padding: 15,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  },

  searchInputStyle: {
    flex: 1,
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 10,
    borderColor: 'white',
    color: 'white',
    height: 35,
    marginBottom: 15,
    opacity: 0.8,
    padding: 10,
  },

  searchTextStyle: {
    color: 'white',
  },

  scrollViewCardStyle: {
    padding: '10px',
  },

  cardViewStyle: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },

  viewImageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#cccccc', // for testing purposes only
  },

  blurViewStyle: {
    position: 'absolute',
    top: 130,
    left: 0,
    bottom: 0,
    right: 0,
  },

  blurViewTextStyle: {
    position: 'absolute',
    bottom: 4,
    left: 22,
    fontSize: 10,
    color: 'rgba(0,0,0,.6)',
    padding: 2,
    borderRadius: 10,
  },
}); // end styles
