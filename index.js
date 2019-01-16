import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import store from "./src/store/createStore/createStore";

import App from "./App";

//Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
Navigation.registerComponentWithRedux(
  `navigation.playground.WelcomeScreen`,
  () => App,
  Provider,
  store
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});
