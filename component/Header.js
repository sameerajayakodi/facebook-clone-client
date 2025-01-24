import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.logo}>facebook</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="plus-circle-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="magnify" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="facebook-messenger" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1877F2',
    flex: 1,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
});
