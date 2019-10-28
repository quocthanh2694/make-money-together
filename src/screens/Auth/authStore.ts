import { observable, action } from "mobx";
declare const alert: any;

export default class AuthStore {
  @observable public userName = '';
  @observable public password = '';
  @observable public loginData = {
    userName: '',
    password: '',
    token: '',
  };

  @action
  login = () => {
    if (this.userName == 'thanh' && this.password == '123456') {
      this.loginData.userName = this.userName;
      this.loginData.password = this.password;
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
}
