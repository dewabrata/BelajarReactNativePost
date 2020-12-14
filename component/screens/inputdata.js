import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
    StatusBar

} from 'react-native';

import {
  
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

import config from '../../config';


import { Wrapper, Header, Left, Right, Container, Space, H1, P, Btn, LabelIconInput } from '../utils';
  


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
           <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
    
    
    
                <View style={styles.body}>
                  <View style={styles.sectionContainer}>
            <View>
                <Text>Nama</Text>
                <TextInput  style={styles.textinput} textBreakStrategy={'simple'} onChangeText={this.onChangeText("nama")} />

                <Text>Alamat</Text>
                <TextInput style={styles.textinput} textBreakStrategy={'simple'} onChangeText={this.onChangeText("alamat")} />

                <Text>No Telepon</Text>
                
                <TextInput style={styles.textinput} textBreakStrategy={'simple'} onChangeText={this.onChangeText("telepon")} />
                
                <Btn
                
                    type="light"
                
                    marginTop="10px"
                    
                    title="Send More"
                    color="#841584"
                    label="Send"
                    onPress = {this.onPress}
                />
            </View>
            </View>
            </View>
          </ScrollView>
        </SafeAreaView>
        </>
        )

    }



}

const styles = StyleSheet.create({
    scrollView: {
    backgroundColor: Colors.lighter,
},
engine: {
    position: 'absolute',
right: 0,
},
body: {
    backgroundColor: Colors.white,
},
sectionContainer: {
    marginTop: 32,
paddingHorizontal: 24,
},
sectionTitle: {
    fontSize: 24,
fontWeight: '600',
color: Colors.black,
},
sectionDescription: {
    marginTop: 8,
fontSize: 18,
fontWeight: '400',
color: Colors.dark,
},
highlight: {
    fontWeight: '700',
},
footer: {
    color: Colors.dark,
fontSize: 12,
fontWeight: '600',
padding: 4,
paddingRight: 12,
textAlign: 'right',
},
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