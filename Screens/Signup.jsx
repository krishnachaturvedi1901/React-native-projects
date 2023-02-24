import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";


const Signup = ({ navigation }) => {
  return (
    <View style={styles.loginScreen}>
      <View style={styles.loginContainer}>
        <View style={styles.inputDiv}>
          <TextInput
            placeholder="Enter name"
            style={styles.inputBox}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.inputDiv}>
          <TextInput
            placeholder="Enter email"
            style={styles.inputBox}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.inputDiv}>
          <TextInput
            placeholder="Enter password"
            style={styles.inputBox}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputDiv}>
        <TextInput
          placeholder="Confirm password"
          style={styles.inputBox}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>

        <View style={styles.checkboxDiv}>
          <Checkbox
            style={{ marginRight: 8 }}
            //  value={} onValueChange={()=>}
          />
          <Text style={{ fontSize: 14 }}>
            I have accepted all terms and conditions
          </Text>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={{ color: "white", fontSize: 16 }}>Signup</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={styles.backtologin}
        onPress={() => navigation.navigate("Login")}
      >
        Already an account - Login
      </Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#6abf4e",
  },
  loginContainer: {
    height: "auto",
    width: "auto",
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#cecece",
    backgroundColor: "#ffffff",
    marginHorizontal: "auto",
    marginVertical: 40,
  },
  textLable: {
    fontSize: 12,
    margin: 7,
  },
  inputDiv:{
    width:350
  },
  inputBox: {
    backgroundColor: "#f2f2f2",
    width: "100%",
    padding: 10,
    margin: 5,
    fontSize: 16,
  },
  checkboxDiv: {
    display: "flex",
    flexDirection: "row",
    margin: 8,
  },
  loginButton: {
    backgroundColor: "#00B241",
    padding: 12,
    width: 350,
    margin: 5,
    alignItems:'center',
  },

  backtologin: {
    ...Platform.select({
      android: {
        color: "blue",
        fontWeight: "bold",
      },
      default: {
        color: "red",
        fontWeight: "bold",
      },
    }),
  },

});
