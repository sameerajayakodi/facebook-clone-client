import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Dummy user data
const USER_DATA = {
  name: 'John Anderson',
  coverPhoto: 'https://picsum.photos/800/300',
  profilePhoto: 'https://randomuser.me/api/portraits/men/32.jpg',
  bio: 'Software Engineer | Travel Enthusiast 🌎 | Photography 📸',
  location: 'San Francisco, California',
  workplace: 'Senior Developer at Tech Corp',
  education: 'Computer Science at Stanford University',
  followers: '2.5K',
  following: '850',
  joinedDate: 'Joined September 2018',
};

// Dummy posts data
const POSTS = [
  {
    id: '1',
    content:
      'Just finished a great coding session! Working on something exciting 💻 #coding #developer',
    likes: '234',
    comments: '45',
    shares: '12',
    timeAgo: '2 hours ago',
    image: 'https://picsum.photos/400/300',
  },
  {
    id: '2',
    content: 'Beautiful sunset at Golden Gate Bridge 🌅',
    likes: '456',
    comments: '78',
    shares: '23',
    timeAgo: '1 day ago',
    image: 'https://picsum.photos/400/300',
  },
  // Add more posts as needed
];

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('Posts');

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.coverPhotoContainer}>
        <Image source={{uri: USER_DATA.coverPhoto}} style={styles.coverPhoto} />
      </View>

      <View style={styles.profilePhotoContainer}>
        <Image
          source={{uri: USER_DATA.profilePhoto}}
          style={styles.profilePhoto}
        />
      </View>

      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>{USER_DATA.name}</Text>
        <Text style={styles.userBio}>{USER_DATA.bio}</Text>

        <View style={styles.statsContainer}>
          <Text style={styles.statsText}>
            <Text style={styles.statsNumber}>{USER_DATA.followers}</Text>{' '}
            followers
          </Text>
          <Text style={styles.statsText}>
            <Text style={styles.statsNumber}>{USER_DATA.following}</Text>{' '}
            following
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreButtonText}>...</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailIcon}>🏢</Text>
          <Text style={styles.detailText}>{USER_DATA.workplace}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailIcon}>🎓</Text>
          <Text style={styles.detailText}>{USER_DATA.education}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailIcon}>📍</Text>
          <Text style={styles.detailText}>{USER_DATA.location}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailIcon}>📅</Text>
          <Text style={styles.detailText}>{USER_DATA.joinedDate}</Text>
        </View>
      </View>
    </View>
  );

  const renderTabs = () => (
    <View style={styles.tabsContainer}>
      {['Posts', 'Photos', 'Videos', 'About'].map(tab => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => setActiveTab(tab)}>
          <Text
            style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderPost = ({item}) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image
          source={{uri: USER_DATA.profilePhoto}}
          style={styles.postAvatar}
        />
        <View style={styles.postHeaderText}>
          <Text style={styles.postUserName}>{USER_DATA.name}</Text>
          <Text style={styles.postTime}>{item.timeAgo}</Text>
        </View>
      </View>

      <Text style={styles.postContent}>{item.content}</Text>

      {item.image && (
        <Image
          source={{uri: item.image}}
          style={styles.postImage}
          resizeMode="cover"
        />
      )}

      <View style={styles.postStats}>
        <Text style={styles.postStatsText}>
          {item.likes} likes • {item.comments} comments • {item.shares} shares
        </Text>
      </View>

      <View style={styles.postActions}>
        <TouchableOpacity style={styles.postAction}>
          <Text style={styles.actionText}>👍 Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postAction}>
          <Text style={styles.actionText}>💬 Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postAction}>
          <Text style={styles.actionText}>↗️ Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={POSTS}
        renderItem={renderPost}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <>
            {renderHeader()}
            {renderTabs()}
          </>
        }
        showsVerticalScrollIndicator={false}
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
    backgroundColor: '#ffffff',
    paddingBottom: 16,
  },
  coverPhotoContainer: {
    height: 200,
    width: '100%',
  },
  coverPhoto: {
    width: '100%',
    height: '100%',
  },
  profilePhotoContainer: {
    position: 'absolute',
    top: 150,
    left: 16,
    padding: 4,
    backgroundColor: '#ffffff',
    borderRadius: 85,
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  userInfoContainer: {
    marginTop: 70,
    paddingHorizontal: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1c1e21',
  },
  userBio: {
    fontSize: 16,
    color: '#65676b',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  statsText: {
    fontSize: 15,
    color: '#65676b',
    marginRight: 16,
  },
  statsNumber: {
    color: '#1c1e21',
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  editButton: {
    flex: 1,
    backgroundColor: '#1877f2',
    paddingVertical: 8,
    borderRadius: 6,
    marginRight: 8,
  },
  editButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  moreButton: {
    backgroundColor: '#e4e6eb',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  moreButtonText: {
    color: '#1c1e21',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  detailText: {
    fontSize: 15,
    color: '#65676b',
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e4e6eb',
    marginTop: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1877f2',
  },
  tabText: {
    color: '#65676b',
    fontSize: 16,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#1877f2',
  },
  postContainer: {
    backgroundColor: '#ffffff',
    marginTop: 8,
    padding: 12,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postHeaderText: {
    marginLeft: 12,
  },
  postUserName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1c1e21',
  },
  postTime: {
    fontSize: 14,
    color: '#65676b',
  },
  postContent: {
    fontSize: 15,
    color: '#1c1e21',
    marginVertical: 12,
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  postStats: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e6eb',
  },
  postStatsText: {
    fontSize: 14,
    color: '#65676b',
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
  },
  postAction: {
    flex: 1,
    alignItems: 'center',
  },
  actionText: {
    color: '#65676b',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ProfileScreen;
