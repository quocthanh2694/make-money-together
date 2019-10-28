import React, { Component } from "react";
import { View, Text, Button, TextInput, Image, ImageBackground } from "react-native";
import CounterStore from "../../store/counterstore";
import { observer, inject } from "mobx-react";
import AuthStore from './authStore';
import { SafeAreaView } from "react-navigation";

interface props {
  authStore: AuthStore;
  navigation: any;
}

@inject("authStore")
@observer
class Login extends Component<props, {}>{
  static navigationOptions = {
    title: "Login",
    header: null,
  };

  render() {
    const { authStore, navigation } = this.props;

    return (
      <View>
        <ImageBackground style={{ width: '100%', height: '100%', justifyContent: 'center' }} source={require('../../../img/login-bg.jpg')} >
          <SafeAreaView>
            <View style={{ paddingTop: 10, paddingBottom: 10, alignContent: "center", justifyContent: "center", backgroundColor: 'rgba(0,0,0,0.3)' }}>
              <Text style={{ color: '#fff', alignSelf: "center", fontSize: 20 }}>
                Welcome!
            </Text>
              <TextInput
                style={styles.textWhite}
                placeholderTextColor='#fff'
                onChangeText={text => authStore.setUserName(text)}
                value={authStore.userName}
                placeholder="User name"
              ></TextInput>
              <TextInput
                style={styles.textWhite}
                onChangeText={text => authStore.setPassword(text)}
                value={authStore.password}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor='#fff'
              ></TextInput>
              <Button
                onPress={() => authStore.login()}
                title="Login"
              />
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}

export default Login;


const styles = {
  textWhite: {
    color: '#fff',
  }
}