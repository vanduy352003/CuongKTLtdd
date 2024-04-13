import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textColor, styles.timeText]}>00:00:00</Text>
      <View style={styles.buttonSection}>
        <TouchableOpacity style={[styles.radiusButton, styles.radiusColorLap]}>
          <View style={[styles.button, styles.buttonLap1Color]}>
            <Text style={styles.textLap}>Lap</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radiusButton, styles.radiusColorStart]}>
          <View style={[styles.button, styles.buttonStartColor]}>
            <Text style={styles.textStart}>Start</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.labResult}>
          <Text style={styles.resultText}>Lap 1</Text>
          <Text style={styles.resultText}>00:02,11</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  textColor: {
    color: 'white',
  },
  timeText: {
    fontSize: 70,
    fontWeight: '400',
    marginVertical: 90,
  },
  textLap: {
    fontSize: 20,
    color: 'white',
  },
  textStart: {
    fontSize: 20,
    color: 'rgb(69 194 102)',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLap1Color: {
    backgroundColor: 'rgb(28 27 29)',
  },
  buttonStartColor: {
    backgroundColor: 'rgb(9 41 16)',
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  radiusButton: {
    width: 90,
    height: 90,
    borderRadius: 100,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radiusColorLap: {
    borderColor: 'rgb(28 27 29)',
  },
  radiusColorStart: {
    borderColor: 'rgb(9 41 16)',
  },
  labResult: {
    marginTop: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  },
});