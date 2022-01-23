import React , {Component} from "react";
import {StyleSheet,ScrollView,ActivityIndicator,View,Text} from "react-native";
import firebase from '../database/firebaseDb'
import {ThemeProvider ,Button ,Input ,Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'

class AddUserScreen extends Component {
    constructor(){
        super();

        this.dbRef = firebase.firestore().collection('react')
        this.state={
            name : "",
            email : "",
            mobile : "",
            isLoading :false
        }
    }

    inputValueUpdate =(val,prop) => {
        const state =this.state;
        state[prop] = val;
        this.setState(state);
    }

    storeUser(){
        if (this.state.name == ''){
            alert('fill at least your name');
        }else{
            this.setState({
                isLoading: true
            })
            this.dbRef.add({
                name: this.state.name,
                email: this.state.email,
                mobile: this.state.mobile,
            }).then((res) => {
                this.setState({
                        name:'',
                        email:'',
                        mobile:'',
                        isLoading: false
                    })
                    this.props.navigation.navigate('UserScreen');
                })
            .catch((err) => {
                console.log('Error',err);
                this.setState({
                    isLoading: false
                })
            })
        }
    }

    render(){
        if(this.state.isLoading){
            return(
                <View style={styles.preloader}>
                    <ActivityIndicator size="lafrge"/>
                </View>
            )
        }

        return (
            <ThemeProvider theme={theme}>
               <ScrollView style={styles.container}>
                   <Image
                    source={{uri:'https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.6435-1/p240x240/116769640_2708174092615828_3465451036948433147_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHGIwj7gpnlsXHYqMOrA6pxzzEaBswB9ejPMRoGzAH16F0zV0pI8fpUHOMhFBqHyqWL0boNIDYlJN_DWm2kcYnv&_nc_ohc=z6KH04HabosAX_jdgTC&_nc_ht=scontent.fbkk22-6.fna&oh=00_AT_VprAE-XvzJV1U2fULrmyIgvGIBz-3n3cT9JOlxJ5QjQ&oe=620C33E3'}}
                    style={{width:200,height:200}}
                    containerStyle={{marginLeft :'auto',marginRight:'auto'}}
                   /> 
                   <Input
                   leftIcon={
                       <Icon
                       name='user-o'
                       size={20}
                       />
                   }
                    placeholder={' Name'}
                    value={this.state.name}
                    onChangeText={(val) => this.inputValueUpdate(val,'name')}
                   />

                    <Input
                   leftIcon={
                       <Icon
                       name='envelope-o'
                       size={20}
                       />
                   }
                    placeholder={' Email'}
                    value={this.state.email}
                    onChangeText={(val) => this.inputValueUpdate(val,'email')}
                   />
                    <Input
                   leftIcon={
                       <Icon
                       name='mobile'
                       size={30}
                       />
                   }
                    placeholder={' Mobile'}
                    value={this.state.mobile}
                    onChangeText={(val) => this.inputValueUpdate(val,'mobile')}
                   />

                <Button 
                icon={
                    <Icon
                    name='check'
                    size={15}
                    color='white'
                    />
                }
                title=' Add User'
                buttonStyle={{
                    backgroundColor : 'green'
                }}
                onPress={() => this.storeUser()}
                />

                <Button 
                icon={
                    <Icon
                    name='users'
                    size={15}
                    color='white'
                    />
                }
                title=' Go to User List'
                onPress={()=> this.props.navigation.navigate('UserScreen')}
                containerStyle={{
                    marginTop :10
                }}
                />

              
               </ScrollView>
            </ThemeProvider>
        )
    }
}


const theme = {
    Button :{
        raised: true
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35
    },
    preloader:{
        position: 'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        alignItems:'center',
        justifyContent:'center'
    }
})


export default AddUserScreen;