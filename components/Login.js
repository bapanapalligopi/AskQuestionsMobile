import { useState } from "react";
import { View,Text,StyleSheet, TextInput, Button ,Pressable,TouchableOpacity} from "react-native";

export default function Login(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    
    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginForm}>
                <TextInput style={styles.input} placeholder="Enter your Username" value={username} id="username" onChangeText={setUsername} />
                <TextInput style={styles.input} placeholder="Enter Your Password" value={password} id="password" onChangeText={setPassword}/>
                <TouchableOpacity style={styles.loginButton}><Text style={styles.loginText}>Login</Text></TouchableOpacity>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    loginContainer:{
        flex:1,
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
        backgroundColor:"#000000",
        
    },
    loginForm:{
        backgroundColor:"gold",
        padding:40,

    },
    input:{ 
        width:300,
        height:50,
        borderWidth:2,
        borderColor:"black",
        borderStyle:"solid",
        padding:10,
        fontWeight:"900",
        marginBottom:20,
        borderRadius:10
    },
    loginButton:{
        borderRadius:10,
        borderStyle:"solid",
        borderWidth:2,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"green",
        borderColor:"green",
    }
    ,
    loginText:{
        fontWeight:"900",
        fontSize:20,
    }
})