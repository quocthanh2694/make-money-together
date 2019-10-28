import { observable, action } from "mobx";
import Toast from 'react-native-root-toast';

declare const alert: any;

export default class AuthStore {
  @observable public userName = 'Thanh';
  @observable public password = '123456';
  @observable public loginData = {
    userName: '',
    password: '',
    token: '',
  };

  @observable
  isLogged = () => {
    return (this.loginData.userName && this.loginData.password && this.loginData.token);
  }

  @action
  login = () => {
    if ((this.userName + '').toLowerCase() == 'thanh' && this.password == '123456') {
      this.loginData.userName = this.userName;
      this.loginData.password = this.password;
      this.loginData.token = 'token';
      this.toast('Successful!');
    } else {
      this.toast('Wrong username or password!');
    }

  };

  @action
  setUserName = (text: any) => {
    this.userName = text;
  }

  @action
  setPassword = (text: any) => {
    this.password = text;
  }

  toast = (msg: string) => {
    Toast.show(msg, {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      onShow: () => {
        // calls on toast\`s appear animation start
      },
      onShown: () => {
        // calls on toast\`s appear animation end.
      },
      onHide: () => {
        // calls on toast\`s hide animation start.
      },
      onHidden: () => {
        // calls on toast\`s hide animation end.
      }
    });
  }
}
