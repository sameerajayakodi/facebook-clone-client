import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// Dummy data to simulate Facebook friends
const DUMMY_FRIENDS = [
  {
    id: '1',
    name: 'Sarah Johnson',
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg',
    mutualFriends: 15,
    isOnline: true,
    lastActive: 'Active now',
    workplace: 'Google',
    location: 'San Francisco, CA',
  },
  {
    id: '2',
    name: 'Michael Chen',
    profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
    mutualFriends: 23,
    isOnline: false,
    lastActive: '2h ago',
    workplace: 'Apple',
    location: 'New York, NY',
  },
  {
    id: '3',
    name: 'Emma Wilson',
    profilePic: 'https://randomuser.me/api/portraits/women/3.jpg',
    mutualFriends: 8,
    isOnline: true,
    lastActive: 'Active now',
    workplace: 'Facebook',
    location: 'Seattle, WA',
  },
  {
    id: '4',
    name: 'James Rodriguez',
    profilePic: 'https://randomuser.me/api/portraits/men/4.jpg',
    mutualFriends: 32,
    isOnline: false,
    lastActive: '1d ago',
    workplace: 'Microsoft',
    location: 'Austin, TX',
  },
  {
    id: '5',
    name: 'Lisa Kim',
    profilePic: 'https://randomuser.me/api/portraits/women/5.jpg',
    mutualFriends: 19,
    isOnline: true,
    lastActive: 'Active now',
    workplace: 'Amazon',
    location: 'Boston, MA',
  },
  // Add more dummy friends as needed
];

const FriendsScreen = () => {
  const [friends, setFriends] = useState(DUMMY_FRIENDS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all'); // 'all', 'online', 'recent'

  const filterFriends = () => {
    let filtered = friends;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(friend =>
        friend.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Apply category filter
    switch (selectedFilter) {
      case 'online':
        filtered = filtered.filter(friend => friend.isOnline);
        break;
      case 'recent':
        filtered = filtered.filter(
          friend =>
            friend.lastActive === 'Active now' ||
            friend.lastActive.includes('h'),
        );
        break;
      default:
        break;
    }

    return filtered;
  };

  const renderFilterButton = (title, filter) => (
    <TouchableOpacity
      style={[
        styles.filterButton,
        selectedFilter === filter && styles.filterButtonActive,
      ]}
      onPress={() => setSelectedFilter(filter)}>
      <Text
        style={[
          styles.filterButtonText,
          selectedFilter === filter && styles.filterButtonTextActive,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const renderFriendItem = ({item}) => (
    <TouchableOpacity style={styles.friendItem}>
      <View style={styles.profilePicContainer}>
        <Image
          source={{uri: item.profilePic}}
          style={styles.profilePic}
          defaultSource={require('../assets/avatar.png')}
        />
        {item.isOnline && <View style={styles.onlineIndicator} />}
      </View>
      <View style={styles.friendInfo}>
        <Text style={styles.friendName}>{item.name}</Text>
        <Text style={styles.subInfo}>{item.workplace}</Text>
        <Text style={styles.subInfo}>{item.location}</Text>
        <Text style={styles.mutualFriends}>
          {item.mutualFriends} mutual friends • {item.lastActive}
        </Text>
      </View>
      <TouchableOpacity style={styles.messageButton}>
        <Text style={styles.messageButtonText}>Message</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Friends</Text>
        <Text style={styles.friendCount}>{friends.length} friends</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Friends"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
          placeholderTextColor="#65676b"
        />
      </View>

      <View style={styles.filterContainer}>
        {renderFilterButton('All Friends', 'all')}
        {renderFilterButton('Recently Active', 'recent')}
        {renderFilterButton('Online', 'online')}
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={filterFriends()}
        renderItem={renderFriendItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  header: {
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
  friendCount: {
    fontSize: 16,
    color: '#65676b',
    marginTop: 4,
  },
  searchContainer: {
    padding: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e4e6eb',
  },
  searchInput: {
    backgroundColor: '#f0f2f5',
    borderRadius: 20,
    padding: 12,
    paddingLeft: 16,
    fontSize: 16,
    color: '#1c1e21',
  },
  filterContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e4e6eb',
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#f0f2f5',
  },
  filterButtonActive: {
    backgroundColor: '#1877f2',
  },
  filterButtonText: {
    color: '#65676b',
    fontWeight: '500',
  },
  filterButtonTextActive: {
    color: '#ffffff',
  },
  listContainer: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  profilePicContainer: {
    position: 'relative',
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#31a24c',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  friendInfo: {
    flex: 1,
    marginLeft: 12,
  },
  friendName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1c1e21',
  },
  subInfo: {
    fontSize: 14,
    color: '#65676b',
    marginTop: 1,
  },
  mutualFriends: {
    fontSize: 14,
    color: '#65676b',
    marginTop: 4,
  },
  messageButton: {
    backgroundColor: '#e4e6eb',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  messageButtonText: {
    color: '#1c1e21',
    fontWeight: '500',
  },
});

export default FriendsScreen;
