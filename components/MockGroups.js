import * as React from 'react';
import { Dimensions, Text, View, StyleSheet, Image } from 'react-native';

export default function Mock_Groups() {
  return (
    <View style={styles.container}>
      <Image style={styles.mockimg} source={require('../assets/mock_overview_groups.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  mockimg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: "contain"
  }
});
