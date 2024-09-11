import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const DisplayInfo = (props) => {
  const modules = Object.values(props.route.params.data);
  console.log('----Modules Array---', modules);




  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Submitted Information</Text>

      {modules.length > 0 ? modules.map((module, moduleIndex) => {
        return (
          <View key={moduleIndex} style={styles.card}>
   
            <View style={styles.moduleContainer}>
              <Text style={styles.subTitle}>Module: {module.module_name}</Text>
              <Text style={styles.infoText}>Points: {module.points}</Text>
              <Text style={styles.infoText}>Time: {module.time}</Text>
            </View>

          
            <View style={styles.divider} />

            {module.categories.length > 0 ? module.categories.map((category, categoryIndex) => {
              return (
                <View key={categoryIndex} style={styles.categoryContainer}>
                  <Text style={styles.subTitle1}>
                    Category: {category.category_name}
                  </Text>
                  <Text style={styles.infoText}>Name: {category.name}</Text>
                  <Text style={styles.infoText}>Phone: {category.phone}</Text>
                  <Text style={styles.infoText}>Email: {category.email}</Text>
                  <Text style={styles.infoText}>
                    Password: {category.password}
                  </Text>


                  <View style={styles.divider} />

                  {category.sections.length > 0 ? category.sections.map((section, sectionIndex) => {
                    return (
                      <View key={sectionIndex} style={styles.sectionContainer}>
                        <Text style={styles.subTitle1}>
                          Section: {section.section_name}
                        </Text>
                        <Text style={styles.infoText}>Name: {section.name}</Text>
                        <Text style={styles.infoText}>Phone: {section.phone}</Text>
                        <Text style={styles.infoText}>Email: {section.email}</Text>
                        <Text style={styles.infoText}>
                          Password: {section.password}
                        </Text>
                      </View>
                    );
                  }) : <Text>No Sections in the List</Text>}
                </View>
              );
            }) : <Text>No Categories in the List</Text>}
          </View>
        );
      }) : <Text>No Modules in the List</Text>}
    </ScrollView>
  );
};

export default DisplayInfo;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 30,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  subTitle1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 15,
  },
  moduleContainer: {
    marginBottom: 10,
  },
  categoryContainer: {
    marginBottom: 10,
  },
  sectionContainer: {
    marginBottom: 10,
  },
});
