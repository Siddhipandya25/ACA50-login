import React,{useState} from'react'
import{View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'

export default function ogin(){
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")

    return(
        <View>
            <View style={{fontSize:40, alignContent:"center", textAlign:'center'}}>
                <Text>LOGIN</Text>
            </View>
            <View>
                <Text>Email-Id</Text>
                <TextInput
                placeholder="Enter your Email-Id"
                style={s.log}
                ></TextInput>
            </View>
            <View>
                <Text>Password</Text>
                <TextInput
                secureTextEntry="*"
                placeholder="Enter your Password"
                style={s.log}
                ></TextInput>
            </View>
            <View>
                <View style={s.line}></View>
                <Text style={s.txt1}> OR </Text>
                <View style={s.line}></View>
            </View>
            <View>
             <TouchableOpacity 
             style={s.b1}>
             <Text style={s.txt}>Log In</Text>
            </TouchableOpacity>   
            </View>
        </View>
    )
}
const s= StyleSheet.create({
    log:{
       fontSize: 15,
       borderBottomWidth: 1,
       borderBottomColor:"blue",
       paddingVertical: 7,
    },
    line:{
        height:1,
        width: '100%',
        backgroundColor: '#E3E3E3'
    },
    b1:{
        backgroundColor: 'green',
        width: 100,
        height: 30,
        borderRadius: 10,
        alignContent:'center',
        alignItems:'center',
        marginLeft: 120,
        marginTop:20
        
    },
    txt:{
     textAlign:'center',
     marginTop:3,
    },
    txt1:{
      alignContent:'center',
      textAlign:'center',
      marginTop:10,
    }

})