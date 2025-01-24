import React, {useCallback, useState} from 'react';
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../component/Header';

const CreatePost = () => (
  <View style={styles.createPost}>
    <View style={styles.createPostHeader}>
      <View style={styles.avatarContainer}>
        <Image
          source={require('../assets/avatar.png')}
          style={styles.userAvatar}
        />
      </View>
      <TouchableOpacity style={styles.createPostInput}>
        <Text style={styles.createPostText}>What's on your mind?</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.createPostActions}>
      <TouchableOpacity style={styles.mediaButton}>
        <Icon name="video" size={22} color="#F14666" />
        <Text style={styles.mediaButtonText}>Live</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.mediaButton}>
        <Icon name="image-multiple" size={22} color="#45BD62" />
        <Text style={styles.mediaButtonText}>Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.mediaButton}>
        <Icon name="video-plus" size={22} color="#6F7BF7" />
        <Text style={styles.mediaButtonText}>Room</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const StorySection = () => (
  <View style={styles.storySection}>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.storyList}>
      <TouchableOpacity style={styles.createStoryCard}>
        <Image
          source={require('../assets/avatar.png')}
          style={styles.createStoryImage}
        />
        <View style={styles.createStoryFooter}>
          <View style={styles.createStoryButton}>
            <Icon name="plus" size={24} color="#fff" />
          </View>
          <Text style={styles.createStoryText}>Create Story</Text>
        </View>
      </TouchableOpacity>
      {[1, 2, 3, 4].map(item => (
        <TouchableOpacity key={item} style={styles.storyCard}>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.7)']}
            style={styles.storyGradient}>
            <Image
              source={require('../assets/car.jpg')}
              style={styles.storyImage}
            />
            <View style={styles.storyAvatar}>
              <Image
                source={require('../assets/woman.png')}
                style={styles.storyUserImage}
              />
            </View>
            <Text style={styles.storyUsername}>User {item}</Text>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.scrollView}>
        <CreatePost />
        <StorySection />
        <View style={styles.feed}>
          <Post
            username="Sameera Jayakodi"
            time="2h"
            content="Just had an amazing day at the beach! 🌊☀️ #weekend #beachvibes"
            likes="1.2K"
            comments="234"
            shares="45"
          />
          <Post
            username="Maleesha Prasad"
            time="4h"
            content="Check out this incredible sunset from my balcony! 🌅 Nature never fails to amaze me."
            likes="856"
            comments="123"
            shares="34"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },

  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E4E6EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createPost: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginBottom: 8,
  },
  createPostHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  createPostInput: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginLeft: 8,
  },
  createPostText: {
    color: '#65676B',
  },
  createPostActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    paddingTop: 12,
  },
  mediaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  mediaButtonText: {
    marginLeft: 6,
    color: '#65676B',
    fontWeight: '500',
  },
  storySection: {
    paddingVertical: 10,
  },
  storyList: {
    paddingHorizontal: 10,
  },
  createStoryCard: {
    width: 100,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ddd',
  },
  createStoryImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  createStoryFooter: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  createStoryButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createStoryText: {
    marginTop: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
  storyCard: {
    width: 100,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  storyGradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  storyImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  storyAvatar: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
  },
  storyUserImage: {
    width: '100%',
    height: '100%',
  },
  storyUsername: {
    color: '#fff',
    fontWeight: 'bold',
    padding: 5,
  },
  feed: {
    padding: 8,
  },
  post: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 8,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postMeta: {
    flex: 1,
    marginLeft: 12,
  },
  postUsername: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  postTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postTime: {
    fontSize: 12,
    color: '#8E8E93',
    marginRight: 4,
  },
  publicIcon: {
    marginLeft: 2,
  },
  moreButton: {
    padding: 4,
  },
  postContent: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    fontSize: 14,
    color: '#1C1C1E',
    lineHeight: 20,
  },
  postStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  reactions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reactionIcons: {
    flexDirection: 'row',
    marginRight: 6,
  },
  likeIcon: {
    backgroundColor: '#1877F2',
    borderRadius: 10,
    padding: 4,
  },
  loveIcon: {
    backgroundColor: '#F14666',
    borderRadius: 10,
    padding: 4,
    marginLeft: -4,
  },
  commentShareCount: {
    flexDirection: 'row',
    gap: 8,
  },
  statsText: {
    color: '#65676B',
    fontSize: 13,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  actionText: {
    marginLeft: 6,
    color: '#65676B',
    fontSize: 13,
    fontWeight: '500',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'right',
    justifyContent: 'right',
  },
});

export default HomeScreen;
const Post = ({username, time, content, likes, comments, shares}) => (
  <View style={styles.post}>
    <View style={styles.postHeader}>
      <Image
        source={require('../assets/avatar.png')}
        style={styles.userAvatar}
      />
      <View style={styles.postMeta}>
        <Text style={styles.postUsername}>{username}</Text>
        <View style={styles.postTimeContainer}>
          <Text style={styles.postTime}>{time}</Text>
          <Icon
            name="earth"
            size={12}
            color="#8E8E93"
            style={styles.publicIcon}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Icon name="dots-horizontal" size={24} color="#8E8E93" />
      </TouchableOpacity>
    </View>
    <Text style={styles.postContent}>{content}</Text>
    <View style={styles.postStats}>
      <View style={styles.reactions}>
        <View style={styles.reactionIcons}>
          <Icon
            name="thumb-up"
            size={16}
            color="#fff"
            style={styles.likeIcon}
          />
          <Icon name="heart" size={16} color="#fff" style={styles.loveIcon} />
        </View>
        <Text style={styles.statsText}>{likes}</Text>
      </View>
      <View style={styles.commentShareCount}>
        <Text style={styles.statsText}>{comments} Comments</Text>
        <Text style={styles.statsText}>{shares} Shares</Text>
      </View>
    </View>
    <View style={styles.postActions}>
      <TouchableOpacity style={styles.actionButton}>
        <Icon name="thumb-up-outline" size={22} color="#8E8E93" />
        <Text style={styles.actionText}>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Icon name="comment-outline" size={22} color="#8E8E93" />
        <Text style={styles.actionText}>Comment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Icon name="share-outline" size={22} color="#8E8E93" />
        <Text style={styles.actionText}>Share</Text>
      </TouchableOpacity>
    </View>
  </View>
);
