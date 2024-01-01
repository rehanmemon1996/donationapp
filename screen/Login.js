import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {TextInput, RadioButton, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import app from '@react-native-firebase/app';
import Snackbar from 'react-native-snackbar';

function Login({navigation}) {
  // let navigation=useNavigation()

  let SignUp = () => {
    navigation.replace('SignUp');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showpassword, setshowpassword] = useState(true);

  const createEmailPassword = async () => {
    if (email == '') {
      Snackbar.show({
        text: 'Plz Enter Email Address',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'grey',
        textColor: 'red',
      });
    } else if (password == '') {
      Snackbar.show({
        text: 'Plz Enter Password',
        duration: Snackbar.LENGTH_SHORT,
        margin: 20,
        backgroundColor: 'grey',
        textColor: 'white',
      });
    } else if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false
    ) {
      Snackbar.show({
        text: 'Plz Enter Valid Email',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'grey',
        textColor: 'red',
      });
    } else if (
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password) ==
      false
    ) {
      Snackbar.show({
        text: 'Plz valid password',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'grey',
        textColor: 'red',
      });
    } else {
      console.log(email);
      console.log(password);
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res.user.uid);
          navigation.replace('MainHome');
        })
        .catch(err => {
          if (err.code == 'auth/email-already-in-use') {
            Alert.alert('Email ALready regsiter');
          }
        });
    }
  };

  return (
    <>
      <ImageBackground
        source={require('../assets/sign.png')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={{fontSize: 30, fontFamily: 'sans', color: 'white'}}>
            Login Page
          </Text>
        </View>

        <View style={styles.container1}>
          <TextInput
            onChangeText={e => setEmail(e)}
            value={email}
            mode="outlined"
            style={{
              backgroundColor: 'white',
              color: 'blue',
              margin: 10,
              width: '80%',
            }}
            label="Email"
            left={<TextInput.Icon icon="email" color={'black'} />}
          />
          <TextInput
            value={password}
            onChangeText={e => setPassword(e)}
            mode="outlined"
            style={{
              backgroundColor: 'white',
              color: 'blue',
              margin: 10,
              width: '80%',
            }}
            label="Password"
            secureTextEntry={showpassword}
            left={<TextInput.Icon icon="lock" color={'black'} />}
            right={
              showpassword ? (
                <TextInput.Icon
                  icon="eye"
                  color={'black'}
                  onPress={() => setshowpassword(false)}
                />
              ) : (
                <TextInput.Icon
                  icon="eye-off"
                  color={'black'}
                  onPress={() => setshowpassword(true)}
                />
              )
            }
          />

          <View style={{width: '70%'}}>
            <Button
              style={{marginTop: 20}}
              onPress={() => createEmailPassword()}
              buttonColor="grey"
              textColor=""
              mode="contained">
              Login
            </Button>
          </View>

          <View style={{width: '70%'}}>
            <Button
              style={{marginTop: 20}}
              onPress={SignUp}
              buttonColor="grey"
              mode="contained">
              SignUp
            </Button>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
