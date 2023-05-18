import { StyleSheet, View } from "react-native";
import { Button } from "@react-native-material/core";

const App = () => (
  <View style={styles.container}>
    <Button title="Login" onPress={() => alert("Please enter your username and password")} />
    <Button title="Register" onPress={() => alert("Please enter credentials")} />  
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;