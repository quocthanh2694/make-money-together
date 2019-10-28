import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider } from "mobx-react";
import stores from "./store";
import RootNavigator from "./RootNavigator";
import { observer, inject } from "mobx-react";
import Login from "./screens/Auth";

@observer
export default class MakeMoneyTogether extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Provider {...stores}>
        {
          stores.authStore.userName == '123z' ? (
            <RootNavigator />  
          ): ( 
            <Login/> 
          )
        }
        </Provider>
      </View>
    );
  }
}
