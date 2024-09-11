import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  handleSubmit,
  navigation,
  navigate,
} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {
  setModules as setReduxModules,
  addModule as addReduxModule,
  addCategory,
  addSection,
  updateModule,
  updateCategory,
  updateSection,
} from '../redux/slices/relaxSlice';
import DisplayInfo from './DisplayInfo';
import babelConfig from '../../babel.config';

const Relax = props => {
  console.log('----goel----', props);
  const {navigation} = props;
  const [localModules, setLocalModules] = useState([
    {
      module_name: '',
      points: '',
      time: '',
      categories: [
        {
          category_name: '',
          name: '',
          phone: '',
          email: '',
          password: '',
          sections: [
            {
              section_name: '',
              name: '',
              phone: '',
              email: '',
              password: '',
            },
          ],
        },
      ],
    },
  ]);

  const dispatch = useDispatch();
  const relaxModule = useSelector(state => state.module);

  const handleModuleChange = (index, value, key) => {
    const updatedModules = [...localModules];
    updatedModules[index][key] = value;
    setLocalModules(updatedModules);
  };

  const handleCategoryChange = (moduleIndex, categoryIndex, value, key) => {
    const updatedModules = [...localModules];
    updatedModules[moduleIndex].categories[categoryIndex][key] = value;
    setLocalModules(updatedModules);
  };

  const handleSectionChange = (
    moduleIndex,
    categoryIndex,
    sectionIndex,
    value,
    key,
  ) => {
    const updatedModules = [...localModules];
    updatedModules[moduleIndex].categories[categoryIndex].sections[
      sectionIndex
    ][key] = value;
    setLocalModules(updatedModules);
  };

  const addModule = () => {
    const newModule = {
      module_name: '',
      points: '',
      time: '',
      categories: [
        {
          category_name: '',
          name: '',
          phone: '',
          email: '',
          password: '',
          sections: [
            {
              section_name: '',
              name: '',
              phone: '',
              email: '',
              password: '',
            },
          ],
        },
      ],
    };
    console.log('---HELLO---', localModules);
    console.log('---HELLO 1-----', localModules[0].categories);
    console.log('---HELLO 2-----', localModules[0].categories[0].sections);

    const updatedModules = [...localModules, newModule];
    setLocalModules(updatedModules);
    dispatch(addReduxModule(newModule)); // Dispatch after state update

    //   console.log('----bhawish---');
    // navigation.navigate('DisplayInfo')
  };

  const addCategory = moduleIndex => {
    const updatedModules = [...localModules];
    updatedModules[moduleIndex].categories.push({
      category_name: '',
      name: '',
      phone: '',
      email: '',
      password: '',
      sections: [
        {
          section_name: '',
          name: '',
          phone: '',
          email: '',
          password: '',
        },
      ],
    });
    setLocalModules(updatedModules);
  };

  const addSection = (moduleIndex, categoryIndex) => {
    const updatedModules = [...localModules];
    updatedModules[moduleIndex].categories[categoryIndex].sections.push({
      section_name: '',
      name: '',
      phone: '',
      email: '',
      password: '',
    });
    setLocalModules(updatedModules);
  };

  const goToDisplayPage = () => {
    console.log(' go to function call display page');
    console.log('---HELLO-0--', localModules);
    console.log('---HELLO 1-----', localModules[0].categories);
    console.log('---HELLO 2-----', localModules[0].categories[0].sections);
    const data = Object.assign({}, localModules);
    navigation.navigate('DisplayInfo', {data});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Relax</Text>
      {localModules.map((module, moduleIndex) => (
        <View key={moduleIndex} style={styles.moduleContainer}>
          <Text style={styles.subTitle}>Module</Text>
          <TextInput
            style={styles.input}
            value={module.module_name}
            onChangeText={text =>
              // handleModuleChange(moduleIndex, text, 'module_name')
              setLocalModules(prev =>
                prev.map((innerprev, innerindex) =>
                  innerindex == moduleIndex
                    ? {...innerprev, module_name: text}
                    : innerprev,
                ),
              )
            }
            placeholder="Module name"
          />
          <TextInput
            style={styles.input}
            value={module.points}
            onChangeText={text =>
              handleModuleChange(moduleIndex, text, 'points')
            }
            placeholder="Important points to remember"
          />
          <TextInput
            style={styles.input}
            value={module.time}
            onChangeText={text => handleModuleChange(moduleIndex, text, 'time')}
            placeholder="Time Duration"
          />

          {module.categories.map((category, categoryIndex) => (
            <View key={categoryIndex} style={styles.categoryContainer}>
              <Text style={styles.subTitle1}>Category</Text>
              <TextInput
                style={styles.input}
                value={category.category_name}
                onChangeText={text =>
                  handleCategoryChange(
                    moduleIndex,
                    categoryIndex,
                    text,
                    'category_name',
                  )
                }
                placeholder="Category name"
              />
              <TextInput
                style={styles.input}
                value={category.name}
                onChangeText={text =>
                  handleCategoryChange(moduleIndex, categoryIndex, text, 'name')
                }
                placeholder="Name"
              />
              <TextInput
                style={styles.input}
                value={category.phone}
                onChangeText={text =>
                  handleCategoryChange(
                    moduleIndex,
                    categoryIndex,
                    text,
                    'phone',
                  )
                }
                placeholder="Phone Number"
                keyboardType="phone-pad"
              />
              <TextInput
                style={styles.input}
                value={category.email}
                onChangeText={text =>
                  handleCategoryChange(
                    moduleIndex,
                    categoryIndex,
                    text,
                    'email',
                  )
                }
                placeholder="Email"
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                value={category.password}
                onChangeText={text =>
                  handleCategoryChange(
                    moduleIndex,
                    categoryIndex,
                    text,
                    'password',
                  )
                }
                placeholder="Password"
                secureTextEntry
              />

              {category.sections.map((section, sectionIndex) => (
                <View key={sectionIndex}>
                  <Text style={styles.subTitle1}>Section</Text>
                  <TextInput
                    style={styles.input}
                    value={section.section_name}
                    onChangeText={text =>
                      handleSectionChange(
                        moduleIndex,
                        categoryIndex,
                        sectionIndex,
                        text,
                        'section_name',
                      )
                    }
                    placeholder="Section name"
                  />
                  <TextInput
                    style={styles.input}
                    value={section.name}
                    onChangeText={text =>
                      handleSectionChange(
                        moduleIndex,
                        categoryIndex,
                        sectionIndex,
                        text,
                        'name',
                      )
                    }
                    placeholder="Name"
                  />
                  <TextInput
                    style={styles.input}
                    value={section.phone}
                    onChangeText={text =>
                      handleSectionChange(
                        moduleIndex,
                        categoryIndex,
                        sectionIndex,
                        text,
                        'phone',
                      )
                    }
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                  />
                  <TextInput
                    style={styles.input}
                    value={section.email}
                    onChangeText={text =>
                      handleSectionChange(
                        moduleIndex,
                        categoryIndex,
                        sectionIndex,
                        text,
                        'email',
                      )
                    }
                    placeholder="Email"
                    keyboardType="email-address"
                  />
                  <TextInput
                    style={styles.input}
                    value={section.password}
                    onChangeText={text =>
                      handleSectionChange(
                        moduleIndex,
                        categoryIndex,
                        sectionIndex,
                        text,
                        'password',
                      )
                    }
                    placeholder="Password"
                    secureTextEntry
                  />
                </View>
              ))}

              <Button
                mode="contained"
                onPress={() => addSection(moduleIndex, categoryIndex)}
                contentStyle={styles.button}>
                ADD SECTION
              </Button>
            </View>
          ))}

          <Button
            mode="contained"
            onPress={() => addCategory(moduleIndex)}
            contentStyle={styles.button}>
            ADD CATEGORY
          </Button>
        </View>
      ))}
      <Button mode="contained" onPress={addModule} contentStyle={styles.button}>
        ADD MODULE
      </Button>

      <View style={styles.spacing} />

      <Button
        mode="contained"
        onPress={() => goToDisplayPage()}
        contentStyle={styles.button}>
        SUBMIT
      </Button>
    </ScrollView>
  );
};

export default Relax;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:'#f0f8ff',
    //flex:1,
  },
  title: {
    fontSize: 40,
    color: '#4a90e2',
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 26,
    color: '#4a4a4a',
    marginBottom: 15,
    fontWeight: '600',
    borderBottomWidth: 2, // Adds a subtle divider
    borderBottomColor: '#c4c4c4',
    paddingBottom: 5,
  },
  subTitle1: {
    fontSize: 22,
    color: '#4a4a4a',
    marginBottom: 10,
    fontWeight: '500',
    borderBottomWidth: 1, // Light divider for sections
    borderBottomColor: '#d3d3d3',
    paddingBottom: 5,
  },
  input: {
    borderColor: '#d3d3d3',
    borderWidth: 1,
    padding: 15,
    borderRadius: 12, // Rounded corners for modern look
    backgroundColor: '#fff',
    marginBottom: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1, // Softer shadow for a clean look
    shadowRadius: 4,
    elevation: 2, // Raised effect for better input prominence
  },
  button: {
    paddingVertical: 12,
    marginVertical: 15,
    borderRadius: 8, // Rounded button corners
    // backgroundColor: '#4a90e2', // Matching blue button
    // shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff', // White text on blue button
    fontWeight: 'bold',
    fontSize: 18,
  },
moduleContainer: {
    marginBottom: 25,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#f8f9fa', // Light grey background for modules
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  categoryContainer: {
    marginLeft: 20,
    marginBottom: 15,
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#e9ecef', // Subtle grey background for categories
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  spacing: {
    height: 30, // Increased spacing for a more breathable layout
  },
});
