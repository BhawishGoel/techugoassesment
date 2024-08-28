import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function Btn({bgcolor, btnLabel, textcolor, Press,width}) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgcolor,
        borderRadius: 100,
        alignItems: 'center',
        width: 350,
        paddingVertical: 5,
        marginVertical: 10,

        
      }}>
      <Text style={{color: textcolor, fontSize: 25, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}









// const API_URL = `https://api.restful-api.dev/objects`;
// // const API_URL = `https://jsonplaceholder.typicode.com/users`;

// const GetDataById = props => {
//   const [userId, setUserId] = useState('');
//   const [apiData, setApiData] = useState([]);
//   const arr = [];

//   const handleButtonPress = async () => {
//     const ID = userId;
//     if (ID.userId === '') {
//       Alert.alert('Invalid User ID');
//     } else {
//       const objID = ID.userId;
//       const updatedAPI = `${API_URL}/${objID}`;
//       // console.log('---UPDATED API----', updatedAPI);
//       const res = await callApi(updatedAPI);
//       const {id, name, data} = res;
//       const {capacity, color} = data;
//       arr.length = 0;
//       arr.push({id, name, capacity, color});
//       // setApiData({apiData: arr});
//       console.log('---RES--11-', arr);
//     }
//   };

//   const callApi = async api => {
//     return new Promise(async (resolve, reject) => {
//       const res = await axios(api);
//       if (!res.data) Alert.alert('Error While Fetching Data from API - ', api);
//       resolve(res.data);
//     });
//   };

//   const handLogout = () => {
//     dispatch(logout());
//     navigation.navigate('LogIn');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>User Details</Text>
//       <Field
//         placeholder="Enter User ID"
//         id="productID"
//         onChangeText={val => setUserId({userId: val})}
//         keyboardType="numeric"
//         maxLength={10}
//       />
//             <Field
//         placeholder="Enter User ID"
//         id="productID"
//         onChangeText={val => setUserId({userId: val})}
//         keyboardType="numeric"
//         maxLength={10}
//       />
//             <Field
//         placeholder="Enter User ID"
//         id="productID"
//         onChangeText={val => setUserId({userId: val})}
//         keyboardType="numeric"
//         maxLength={10}
//       />
//             <Field
//         placeholder="Enter User ID"
//         id="productID"
//         onChangeText={val => setUserId({userId: val})}
//         keyboardType="numeric"
//         maxLength={10}
//       />
//       <Button
//         onPress={() => handleButtonPress()}
//         title="Submit"
//         style={{backgroundColor: '#247c8c', color: '#00000', fontSize: '50'}}>
//         Submit
//       </Button>

//       <View>
//         <Text>DETAILS </Text>
//         <Text>{arr}</Text>
//       </View>
//     </View>
//   );
// };

// export default GetDataById;
// const styles = StyleSheet.create({
//   item: {
//     fontWeight: 'bold',
//     marginTop: 10,
//     marginLeft: 10,
//   },
//   title: {
//     fontSize: 40,
//     justifyContent: 'center',
//     marginLeft: 50,
//     color: 'black',
//   },
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 20,
//     borderColor: 'black',
//     borderWidth: 1,
//   },
//   Button: {
//     background: 'green',
//     color: 'black',
//   },
// });

// /*

//  const response = await axios.get(api);
//     console.log('---API RESPONSE BY ID---', response.data);
//     return response;
//     // setState({data: response.data});

// */