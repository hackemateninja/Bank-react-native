import React from 'react';
import * as Font from "expo-font";
import {View, Text} from "react-native";


class App extends React.Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await Font.loadAsync({
      "SFPro": require("./assets/fonts/FontsFree-Net-SFProDisplay-Regular.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return null;
    } else {
      return (
        <View>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      );
    }
  }
}

export default App;
