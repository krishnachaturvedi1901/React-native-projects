import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Login = ({ navigation, route }) => {
  return (
    <View style={styles.loginScreen}>
      <View style={styles.loginContainer}>
        <Text>Login</Text>
        <View>
          <Text>Enter email</Text>
          <TextInput autoCapitalize="none" autoCorrect={false} />
        </View>
        <View>
          <Text>Enter password</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>
        <View>
         <Text>I have accepted all terms and conditions</Text>
        </View>
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="New user? Signup"
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    alignItems:'center'
  },
  loginContainer: {
    height: "60%",
    width: "80%",
    padding: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#cecece",
    backgroundColor: "skyblue",
    marginHorizontal: "auto",
    marginVertical: 10,
  },
});
