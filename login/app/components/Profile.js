import { 
    StyleSheet, 
    Text, 
    View, 
  } from 'react-native';
  
export default function Profile() {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>- Profile -</Text>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight: 40,
  },
  text: {
    color: '#fff', 
  },
});