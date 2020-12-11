import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button

} from 'react-native';


import config from '../../config';




class Inputdata extends Component {


   state ={
   
       nama:"",
       alamat:"",
       telepon:""
   
   }
   
   onChangeText = name => text => {
   
     switch (name) {
     case "nama" :
     this.setState({"nama":text})
     break;
     case "alamat" :
        this.setState({"alamat":text})
    break ;
    case "telepon" :
        this.setState({"telepon":text})
        break;
     }
     
     console.log(this.state);
   
   };
 
 
   onPress = () => {
   
   console.log("ditekan");
   
    fetch('http://079d861e8ecf.ngrok.io/data', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(this.state),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
        
        
   
   
   
   
   }

    render() {

        return (
            <View>
                <Text>Nama</Text>
                <TextInput  style={styles.textinput} textBreakStrategy={'simple'} onChangeText={this.onChangeText("nama")} />

                <Text>Alamat</Text>
                <TextInput style={styles.textinput} textBreakStrategy={'simple'} onChangeText={this.onChangeText("alamat")} />

                <Text>No Telepon</Text>
                
                <TextInput style={styles.textinput} textBreakStrategy={'simple'} onChangeText={this.onChangeText("telepon")} />
                
                <Button
                
                    marginTop="10px"
                    
                    title="Send More"
                    color="#841584"

                    onPress = {this.onPress}
                />
            </View>

        )

    }



}


const styles = StyleSheet.create({

    textinput: {
        height: 35,
        padding: 0,
        fontSize: 18,
        color: config.defaultFontColor,
        borderBottomWidth: 1,
        fontWeight: 'bold',
        borderBottomColor: '#c5c5c5',
        fontFamily: config.defaultFont
    },

});



export default Inputdata