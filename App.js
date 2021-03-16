import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      input: "",
    };
    this.data = this.data.bind(this);
  }

  data() {
    if (this.state.input === "") {
      alert("Insert your name, please");
      return;
    }
    this.setState({
      name: "Welcome, " + this.state.input,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Insert your name"
          onChangeText={(text) =>
            this.setState({
              input: text,
            })
          }
        />
        <Button title="Send" onPress={this.data}></Button>
        <Text style={styles.text}>{this.state.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#222",
    fontSize: 20,
    padding: 10,
    margin: 10,
  },
  text: {
    fontSize: 25,
    textAlign: "center",
  },
});

export default App;
