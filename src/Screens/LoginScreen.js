import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Background from '../Components/Background/Background';
import {darkGreen, green} from '../Constants/Constants';
import Btn from '../Components/Button/Btn';
import Field from '../Components/Field/Feild';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const Login = props => {
  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleLoginScreen = () => {
    navigation.navigate('');
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const allUsers = useSelector(state => state.user.allUsersData);
    const [secureEntry, setSecureEntry] = useState(true);
  };

  const handleGoBack = () => {
    navigation.goback();
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  const handleLoginPhone = () => {
    navigation.navigate('LoginInPhone');
  };

  const handleLogin = values => {
    //alert(`Email: ${values.email}, Password: ${values.password}`);
    const list = [];
    const email = values.email;
    const password = values.password;
    list.push({email, password})
    props.list;
    props.navigation.navigate('UserProfile');
  };

  return (
    <Background>
      <View style={{alignItems: 'center', width: 400}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 760,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>

          {/* Formik form */}
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={values => {
              handleLogin(values);
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
                  placeholder="Email / Username"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  error={touched.email && errors.email}
                  id="email"
                />
                {touched.email && errors.email && (
                  <Text style={{color: 'red', fontSize: 12}}>
                    {errors.email}
                  </Text>
                )}
                <Field
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  error={touched.password && errors.password}
                  id="password"
                />
                {touched.password && errors.password && (
                  <Text style={{color: 'red', fontSize: 12}}>
                    {errors.password}
                  </Text>
                )}
                <View
                  style={{
                    alignItems: 'flex-end',
                    width: '78%',
                    paddingRight: 16,
                    marginBottom: 200,
                  }}>
                  <Text
                    style={{
                      color: darkGreen,
                      fontWeight: 'bold',
                      fontSize: 16,
                    }}>
                    Forgot Password ?
                  </Text>
                </View>
                <Btn
                  bgcolor={darkGreen}
                  textcolor="white"
                  btnLabel="Login"
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
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
