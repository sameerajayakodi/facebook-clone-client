import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Dummy user data
const USER = {
  name: 'John Anderson',
  profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
  seeAllText: 'See your profile',
};

// Menu sections data
const SHORTCUTS = [
  {
    id: '1',
    icon: '👥',
    title: 'Groups',
    subtitle: '2 new',
  },
  {
    id: '2',
    icon: '🏪',
    title: 'Marketplace',
    subtitle: null,
  },
  {
    id: '3',
    icon: '👬',
    title: 'Friends',
    subtitle: '5 requests',
  },
  {
    id: '4',
    icon: '📺',
    title: 'Watch',
    subtitle: '9+ new videos',
  },
  {
    id: '5',
    icon: '🕐',
    title: 'Memories',
    subtitle: '3 memories',
  },
  {
    id: '6',
    icon: '💾',
    title: 'Saved',
    subtitle: null,
  },
];

const SETTINGS = [
  {
    id: '1',
    icon: '⚙️',
    title: 'Settings & Privacy',
  },
  {
    id: '2',
    icon: '❓',
    title: 'Help & Support',
  },
  {
    id: '3',
    icon: '🌙',
    title: 'Display & Accessibility',
  },
  {
    id: '4',
    icon: '💭',
    title: 'Give Feedback',
  },
  {
    id: '5',
    icon: '🚪',
    title: 'Log Out',
  },
];

const MenuScreen = () => {
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Menu</Text>
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchButtonText}>🔍</Text>
      </TouchableOpacity>
    </View>
  );

  const renderProfile = () => (
    <TouchableOpacity style={styles.profileSection}>
      <View style={styles.profileInfo}>
        <Image source={{uri: USER.profilePic}} style={styles.profilePic} />
        <View style={styles.profileText}>
          <Text style={styles.profileName}>{USER.name}</Text>
          <Text style={styles.profileLink}>{USER.seeAllText}</Text>
        </View>
      </View>
      <Text style={styles.arrowIcon}>➡️</Text>
    </TouchableOpacity>
  );

  const renderShortcuts = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>All Shortcuts</Text>
      <View style={styles.shortcutsGrid}>
        {SHORTCUTS.map(item => (
          <TouchableOpacity key={item.id} style={styles.shortcutItem}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>
            <Text style={styles.shortcutTitle}>{item.title}</Text>
            {item.subtitle && (
              <Text style={styles.shortcutSubtitle}>{item.subtitle}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderSettings = () => (
    <View style={styles.section}>
      <View style={styles.settingsList}>
        {SETTINGS.map(item => (
          <TouchableOpacity key={item.id} style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>
            <Text style={styles.settingTitle}>{item.title}</Text>
            <Text style={styles.arrowIcon}>➡️</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderProfile()}
        {renderShortcuts()}
        {renderSettings()}
        <Text style={styles.version}>Facebook Version 425.0.0.20.115</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e4e6eb',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1c1e21',
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e4e6eb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    fontSize: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
    marginBottom: 8,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileText: {
    marginLeft: 12,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1c1e21',
  },
  profileLink: {
    fontSize: 14,
    color: '#1877f2',
    marginTop: 2,
  },
  section: {
    backgroundColor: '#ffffff',
    marginBottom: 8,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1c1e21',
    marginBottom: 16,
  },
  shortcutsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  shortcutItem: {
    width: '48%',
    backgroundColor: '#f0f2f5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#e4e6eb',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    fontSize: 18,
  },
  shortcutTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1c1e21',
  },
  shortcutSubtitle: {
    fontSize: 13,
    color: '#1877f2',
    marginTop: 4,
  },
  settingsList: {
    backgroundColor: '#ffffff',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e6eb',
  },
  settingIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#e4e6eb',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  settingTitle: {
    flex: 1,
    fontSize: 16,
    color: '#1c1e21',
  },
  arrowIcon: {
    fontSize: 16,
    color: '#65676b',
  },
  version: {
    textAlign: 'center',
    color: '#65676b',
    fontSize: 14,
    padding: 16,
  },
});

export default MenuScreen;
