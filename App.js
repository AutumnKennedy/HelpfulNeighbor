import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert} from 'react-native';
import Button from 'react-bootstrap/Button';




export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style= {styles.titleText}>Helpful Neighbor</Text>

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a0d2eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText:{
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

});
