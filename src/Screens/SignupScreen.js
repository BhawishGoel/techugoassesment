import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Background from '../Components/Background/Background';
import { darkGreen } from '../Constants/Constants';
import { CountryPicker } from 'react-native-country-codes-picker';
import Btn from '../Components/Button/Btn';
import Field from '../Components/Field/Feild';
import CustomCheckbox from '../Components/CustomCheckbox';
import { NavigationContainer } from '@react-navigation/native';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  contactNumber: Yup.string()
    .matches(/^\d+$/, 'Contact Number must be a number')
    .required('Contact Number is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const Signup = (props) => {
  const [showPicker, setShowPicker] = useState(false);
  const [countryCode, setCountryCode] = useState('+1'); // Default country code
  const [isChecked, setIsChecked] = useState(false); // Checkbox state

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      props.navigation.navigate('PhoneAuthWebView');
    }
  };




  return (
    <Background>
      <View style={{ alignItems: 'center', width: 450 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          {/* Formik form */}
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              contactNumber: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
              alert('Account created');
              props.navigation.navigate('Login');
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>




                <Field
                  placeholder="First Name"
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                  error={touched.firstName && errors.firstName}
                />
                {touched.firstName && errors.firstName && (
                  <Text style={{ color: 'red', fontSize: 12 }}>
                    {errors.firstName}
                  </Text>
                )}
                <Field
                  placeholder="Last Name"
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                  error={touched.lastName && errors.lastName}
                />
                {touched.lastName && errors.lastName && (
                  <Text style={{ color: 'red', fontSize: 12 }}>
                    {errors.lastName}
                  </Text>
                )}
                <Field
                  placeholder="Email / Username"
                  keyboardType={'email-address'}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  error={touched.email && errors.email}
                />
                {touched.email && errors.email && (
                  <Text style={{ color: 'red', fontSize: 12 }}>
                    {errors.email}
                  </Text>
                )}

                {/* Country Code and Contact Number Input */}
                <View style={styles.phoneInputContainer}>
                  <TouchableOpacity
                    style={styles.countryCodeContainer}
                    onPress={() => setShowPicker(true)}
                  >
                    <Text style={styles.countryCodeText}>{countryCode}</Text>
                  </TouchableOpacity>
                  <View style={styles.contactNumberContainer}>
                    <Field
                      placeholder="Contact Number"
                      keyboardType={'number-pad'}
                      onChangeText={handleChange('contactNumber')}
                      onBlur={handleBlur('contactNumber')}
                      value={values.contactNumber}
                      error={touched.contactNumber && errors.contactNumber}
                      style={styles.contactNumberInput} // Add style here
                    />
                    <CustomCheckbox
                      checked={isChecked}
                      onCheck={handleCheckboxClick}
                    />
                  </View>
                </View>
                {touched.contactNumber && errors.contactNumber && (
                  <Text style={{ color: 'red', fontSize: 12 }}>
                    {errors.contactNumber}
                  </Text>
                )}

                {/* Country Picker Modal */}
                <CountryPicker
                  show={showPicker}
                  pickerButtonOnPress={(item) => {
                    setCountryCode(item.dial_code);
                    setShowPicker(false);
                  }}
                />

                <Field
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  error={touched.password && errors.password}
                />
                {touched.password && errors.password && (
                  <Text style={{ color: 'red', fontSize: 12 }}>
                    {errors.password}
                  </Text>
                )}
                <Field
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  error={touched.confirmPassword && errors.confirmPassword}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={{ color: 'red', fontSize: 12 }}>
                    {errors.confirmPassword}
                  </Text>
                )}

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '78%',
                    paddingRight: 16,
                  }}>
                  <Text style={{ color: 'grey', fontSize: 16 }}>
                    By signing in, you agree to our{' '}
                  </Text>
                  <Text
                    style={{
                      color: darkGreen,
                      fontWeight: 'bold',
                      fontSize: 16,
                    }}>
                    Terms & Conditions
                  </Text>
                </View>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '78%',
                    paddingRight: 16,
                    marginBottom: 10,
                  }}>
                  <Text style={{ color: 'grey', fontSize: 16 }}>and </Text>
                  <Text
                    style={{
                      color: darkGreen,
                      fontWeight: 'bold',
                      fontSize: 16,
                    }}>
                    Privacy Policy
                  </Text>
                </View>

                <Btn
                  bgcolor={darkGreen}
                  textcolor="white"
                  btnLabel="Signup"
                  Press={handleSubmit}
                />
              </>
            )}
          </Formik>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '78%',
    marginVertical: 10,
  },
  countryCodeContainer: {
    backgroundColor: 'lightgray',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 10,
  },
  countryCodeText: {
    color: darkGreen,
    fontWeight: 'bold',
  },
  contactNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Allow container to grow
  },
  contactNumberInput: {
    flex: 1, // Allow input to grow
  },
});

export default Signup;








