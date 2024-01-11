import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import pattern from '../../assets/pattern.png'
import { button1 } from '../common/button'
import CalendarPicker from 'react-native-calendar-picker'
import { errormessage, formgroup, head1, input, input1, label, link, link2 } from '../common/formcss'

const Signup = ({
    navigation
}) => {

    const [fdata, setFdata] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: '',
        dob: '',
        address: '',
    })
    const [errormsg, setErrormsg] = useState(null);
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    const Sendtobackend = () => {
        console.log(fdata);
        if (fdata.name == '' ||
            fdata.email == '' ||
            fdata.password == '' ||
            fdata.cpassword == '' ||
            fdata.dob == '' ||
            fdata.address == '') {
            setErrormsg('All fields are required');
            return;
        }
        else {
            if (fdata.password != fdata.cpassword) {
                setErrormsg('Password and Confirm Password must be same');
                return;
            }
            else {
                fetch('http://10.20.0.140:3000/verify', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(fdata)
                })
                    .then(res => res.json()).then(
                        data => {
                            console.log(data);
                            if (data.error === 'Invalid Credentials') {
                                alert('Invalid Credentials')
                                setErrormsg('Invalid Credentials')
                            }
                            else if (data.message === "Verification Code Sent to your Email") {
                                console.log(data.udata);
                                alert(data.message);
                                navigation.navigate('verification', { userdata: data.udata })
                            }
                        }
                    )
            }
        }

    };
    const onDateChange = (date) => {
        setFdata({ ...fdata, dob: date.toISOString().split('T')[0] });
        setSelectedDate(date.toISOString().split('T')[0]);
        setDatePickerVisible(false);
    };

    const toggleDatePicker = () => {
        setDatePickerVisible(!isDatePickerVisible);
    };

    return (
        <View style={styles.container}>
            <Image style={styles.patternbg} source={pattern} />

            <View style={styles.container1}>
                <View style={styles.s1}>

                </View>
                <ScrollView style={styles.s2}>
                    <Text style={head1}>Create a New Account</Text>
                    <Text style={link2}>Already Registered?&nbsp;
                        <Text style={link}
                            onPress={() => navigation.navigate('login')}
                        >
                            Login here
                        </Text>
                    </Text>
                    {
                        errormsg ? <Text style={errormessage}>{errormsg}</Text> : null
                    }
                    <View style={formgroup}>
                        <Text style={label}>Name</Text>
                        <TextInput style={input} placeholder="Enter your Name"
                            onPressIn={() => setErrormsg(null)}
                            onChangeText={(text) => setFdata({ ...fdata, name: text })}
                        />
                    </View>
                    <View style={formgroup}>
                        <Text style={label}>Email</Text>
                        <TextInput style={input} placeholder="Enter your Email"
                            onPressIn={() => setErrormsg(null)}
                            onChangeText={(text) => setFdata({ ...fdata, email: text })}
                        />
                    </View>

                    <View style={formgroup}>
                        <Text style={label}>DOB</Text>
                        <TouchableOpacity onPress={toggleDatePicker}>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Select your Date of Birth"
                                    value={selectedDate}
                                    editable={false}
                                />
                            </View>
                        </TouchableOpacity>
                        {isDatePickerVisible && (
                            <CalendarPicker
                                onDateChange={onDateChange}
                                width={0}
                                height={0}
                            />
                        )}
                    </View>
                    <View style={formgroup}>
                        <Text style={label}>Password</Text>
                        <TextInput style={input} placeholder="Enter your Password"
                            onPressIn={() => setErrormsg(null)}
                            secureTextEntry={true}
                            onChangeText={(text) => setFdata({ ...fdata, password: text })}
                        />
                    </View>
                    <View style={formgroup}>
                        <Text style={label}>Confirm Password</Text>
                        <TextInput style={input} placeholder="Confirm your Password"
                            onPressIn={() => setErrormsg(null)}
                            secureTextEntry={true}
                            onChangeText={(text) => setFdata({ ...fdata, cpassword: text })}
                        />
                    </View>
                    <View style={formgroup}>
                        <Text style={label}>Address</Text>
                        <TextInput style={input1} placeholder="Enter your Address"
                            onPressIn={() => setErrormsg(null)}
                            onChangeText={(text) => setFdata({ ...fdata, address: text })}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            Sendtobackend();
                        }}
                    >
                        <Text style={button1}

                        >Signup</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Powered by Varenyam Pvt Ltd</Text>
            </View>
        </View>

    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    footer: {
        backgroundColor: '#eee',
        padding: 10,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    footerText: {
        fontSize: 12,
        color: '#555',
    },
    patternbg: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    s1: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
    },
    s2: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    formgroup: {
        flexDirection: 'column',
        width: '100%',
        marginVertical: 10,
    },
    label: {
        fontSize: 17,
        color: '#000',
        marginLeft: 10,
        marginBottom: 5,
    },
    input: {
        backgroundColor: "#FFB0CC",
        borderRadius: 20,
        padding: 10,
    },
    input1: {
        backgroundColor: "#FFB0CC",
        borderRadius: 20,
        padding: 0,
        height: '10%', 
    },
});
