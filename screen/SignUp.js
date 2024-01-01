import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput, RadioButton, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';


function SignUp({navigation}) {
  const [showpassword, setshowpassword] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  let Login = () => {
    console.log('Login');
    navigation.navigate('Login');
  };

  let SignUp=()=>{
    // console.log(email);
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
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          navigation.navigate('Login')
          
          // console.log(res.user.uid);
          // {MainHome}

        })
        .catch(err => {
          if (err.code == 'auth/email-already-in-use') {
            Alert.alert('Email ALready regsiter');
          }
        });
    }

  }

  return (
    <>
      <View style={styles.container}>
        <Text style={{fontSize: 30, fontFamily: 'sans'}}>SignUp Page</Text>
      </View>
      <View style={styles.container1}>
        <TextInput
          mode="outlined"
          onChangeText={e => setName(e)}
           value={name}
          style={{
            backgroundColor: 'white',
            color: 'blue',
            margin: 10,
            width: 80 + '%',
          }}
          label="Name"
          left={
            <TextInput.Icon
              icon={{
                uri: 'https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=Ql6UUNosrWAY0w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-icons-logos-emojis-users-2400.png&ehk=8agkVrs8bo9zafVF9Qk4%2bFqv5IwaEZrb8DwX%2ftfJtNc%3d&risl=&pid=ImgRaw&r=0',
              }}
              color={'black'}
            />
          }
        />
        <TextInput
          mode="outlined"
          onChangeText={e => setEmail(e)}
           value={email}
          style={{
            backgroundColor: 'white',
            color: 'blue',
            margin: 10,
            width: 80 + '%',
          }}
          label="Email"
          left={<TextInput.Icon icon="email" color={'black'} />}
        />
        <TextInput
          mode="outlined"
          onChangeText={e => setPassword(e)}
           value={password}
          style={{
            backgroundColor: 'white',
            color: 'blue',
            margin: 10,
            width: 80 + '%',
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
            onPress={SignUp}
            buttonColor="grey"
            textColor=""
            mode="contained">
            SignUp
          </Button>
        </View>
        <View style={{width: '70%'}}>
          <Button
            style={{marginTop: 20}}
            onPress={Login}
            buttonColor="grey"
            textColor=""
            mode="contained">
            Login
          </Button>
        </View>
      </View>
    </>
  );
}
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 2,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
