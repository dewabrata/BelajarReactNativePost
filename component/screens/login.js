

import React, { Component } from 'react';
import { 
	View, 
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Feather';
import { Wrapper, Header, Left, Right, Container, Space, H1, P, Btn, LabelIconInput } from '../utils';
import config from '../../config';
class Login extends Component {
    render() {
        return (
            <Wrapper>
                
            <Header>
                <Left></Left>
                <Right>
                    <TouchableOpacity  style={[config.style.iconBtn, {marginRight: -10}]} onPress ={()=> this.props.navigation.navigate('Register')}>
                        <P >Sign Up</P>
                    </TouchableOpacity>
                </Right>
            </Header>

            <Container>
                <Space height={60} />
                <H1>Welcome Back!</H1>
                <P>Login back into your account</P>
                
                <View style={config.style.form}>
                    
                    <LabelIconInput 
                        label={'Email'}
                        icon="users"
                        placeholderTextColor={'#999999'}
                      
                        placeholder={'Enter your email'}
                       
                        
                     
                        underlineColorAndroid={'transparent'}
                    />

                    <LabelIconInput 
                        label={'Password'}
                        icon={'lock'}
                        placeholderTextColor={'#999999'}
                      
                      
                        placeholder={'Enter your password'}
                      
                        underlineColorAndroid={'transparent'}
                       
                    />
                    
                    <Space />
                    
                    <Btn label={'Log In'}  onPress ={()=> this.props.navigation.navigate('BottomTabs')} />

                </View>

            </Container>
            
        </Wrapper>
        );
    }
}
const styles = StyleSheet.create({
    form: {
        width: '75%',
        maxWidth: 400,
        minWidth: 200,
        alignSelf: 'center'
    },
    field: {
        marginTop: 25
    },
    labelWrapper: {
        flexDirection: 'row'
    },
    labelIconWrapper: {
        width: 23
    },
    labelText: {
        color: '#a7a6b4', 
        fontSize: 13.5 
    },
    labelIcon: {

    },
    input: {
        fontWeight: "bold", 
        fontSize: 16, 
        paddingLeft: 23, 
        paddingRight: 3, 
        paddingTop: 6, 
        paddingBottom: 4, 
        borderBottomWidth: 1, 
        borderBottomColor: '#bcbcbc'
    },
    btn: {
        height: 46,
        borderRadius: 23,
        backgroundColor: '#cc2122',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        flexDirection: 'row'
    },
    btnText: {
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 18
    }
});
export default Login;