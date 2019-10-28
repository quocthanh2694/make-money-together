import CounterStore from "./counterstore";
import AuthStore from "../screens/Auth/authStore";

class StoreRoot {
  public counterStore = new CounterStore();
  public authStore = new AuthStore();
}

export default new StoreRoot();
