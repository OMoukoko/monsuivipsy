import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from './colors';
import Text from '../components/MyText';

const Header = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginRight: 'auto',
  },
  title: {
    fontSize: 22,
    paddingBottom: 30,
    color: colors.BLUE,
    fontWeight: '700',
  },
});

export default Header;
