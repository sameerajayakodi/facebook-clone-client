import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Dummy data for videos
const DUMMY_VIDEOS = [
  {
    id: '1',
    title: 'Amazing Street Food in Tokyo',
    channel: 'Food Adventures',
    views: '2.5M views',
    timePosted: '2 days ago',
    duration: '12:45',
    thumbnail: 'https://picsum.photos/400/225',
    channelAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    likes: '125K',
    comments: '3.2K',
  },
  {
    id: '2',
    title: 'Top 10 Travel Destinations 2025',
    channel: 'Travel Globe',
    views: '890K views',
    timePosted: '5 hours ago',
    duration: '8:32',
    thumbnail: 'https://picsum.photos/400/225',
    channelAvatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    likes: '45K',
    comments: '1.8K',
  },
  {
    id: '3',
    title: 'How to Make Perfect Pasta at Home',
    channel: 'Cooking Masters',
    views: '1.2M views',
    timePosted: '1 day ago',
    duration: '15:20',
    thumbnail: 'https://picsum.photos/400/225',
    channelAvatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    likes: '78K',
    comments: '2.4K',
  },
  // Add more dummy videos as needed
];

const CATEGORIES = [
  'For You',
  'Live',
  'Gaming',
  'Sports',
  'Music',
  'Following',
  'Trending',
  'Comedy',
];

const WatchScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('For You');

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Watch</Text>
      <View style={styles.headerActions}>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderCategories = () => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.categoriesContainer}>
      {CATEGORIES.map(category => (
        <TouchableOpacity
          key={category}
          style={[
            styles.categoryButton,
            selectedCategory === category && styles.categoryButtonActive,
          ]}
          onPress={() => setSelectedCategory(category)}>
          <Text
            style={[
              styles.categoryButtonText,
              selectedCategory === category && styles.categoryButtonTextActive,
            ]}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderVideoItem = ({item}) => (
    <TouchableOpacity style={styles.videoItem}>
      <View style={styles.thumbnailContainer}>
        <Image
          source={{uri: item.thumbnail}}
          style={styles.thumbnail}
          resizeMode="cover"
        />
        <View style={styles.durationContainer}>
          <Text style={styles.durationText}>{item.duration}</Text>
        </View>
      </View>

      <View style={styles.videoDetails}>
        <Image
          source={{uri: item.channelAvatar}}
          style={styles.channelAvatar}
        />
        <View style={styles.videoInfo}>
          <Text style={styles.videoTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.channelName}>{item.channel}</Text>
          <Text style={styles.videoStats}>
            {item.views} • {item.timePosted}
          </Text>
        </View>
      </View>

      <View style={styles.videoActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>👍 {item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>💬 {item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderCategories()}
      <FlatList
        data={DUMMY_VIDEOS}
        renderItem={renderVideoItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.videoList}
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
  headerActions: {
    flexDirection: 'row',
  },
  headerButton: {
    marginLeft: 16,
    padding: 8,
    backgroundColor: '#e4e6eb',
    borderRadius: 20,
  },
  headerButtonText: {
    color: '#1c1e21',
    fontWeight: '500',
  },
  categoriesContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e6eb',
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 20,
    backgroundColor: '#e4e6eb',
  },
  categoryButtonActive: {
    backgroundColor: '#1877f2',
  },
  categoryButtonText: {
    color: '#65676b',
    fontWeight: '500',
  },
  categoryButtonTextActive: {
    color: '#ffffff',
  },
  videoList: {
    padding: 8,
  },
  videoItem: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 8,
    overflow: 'hidden',
  },
  thumbnailContainer: {
    position: 'relative',
    aspectRatio: 16 / 9,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  durationContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText: {
    color: '#ffffff',
    fontSize: 12,
  },
  videoDetails: {
    flexDirection: 'row',
    padding: 12,
  },
  channelAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  videoInfo: {
    flex: 1,
    marginLeft: 12,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1c1e21',
    marginBottom: 4,
  },
  channelName: {
    fontSize: 14,
    color: '#65676b',
    marginBottom: 2,
  },
  videoStats: {
    fontSize: 14,
    color: '#65676b',
  },
  videoActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e4e6eb',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    color: '#65676b',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default WatchScreen;
