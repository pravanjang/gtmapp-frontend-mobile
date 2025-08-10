import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TextInputComponent, TouchableOpacity, View } from 'react-native';
import SearchContainer from './Components/SarchContainer';
import GoalTaskListContainer from './Components/GoalTaskListContainer';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='transparent' barStyle='dark-content' />
      <View
        style={{
          height: 40,
          backgroundColor: 'aqua',
        }}
      />
      <SafeAreaView>
        <SearchContainer style={styles.topcontainer} />
        <View style={styles.container}>
          <GoalTaskListContainer />
          <TouchableOpacity style={styles.floatingButton}>
            <AntDesign name="pluscircle" size={60} color="blue" />
          </TouchableOpacity>
      
        </View>
        
      </SafeAreaView>
      
    </>
  );
}

const styles = StyleSheet.create({
  topcontainer: {
    flex: 1,
  },
  container: {
    flex: 9,
    borderWidth: 4,
    borderColor: 'blue',
    minHeight: '85%',
  },
  floatingButton: {
    position: 'absolute',
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    color: 'red',
  } 
});
