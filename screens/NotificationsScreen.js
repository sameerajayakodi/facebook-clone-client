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

// Dummy notifications data
const NOTIFICATIONS = [
  {
    id: '1',
    type: 'like',
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    content: 'liked your post',
    target: 'Beautiful sunset photo',
    timeAgo: '2m ago',
    isRead: false,
    thumbnail: 'https://picsum.photos/50/50',
  },
  {
    id: '2',
    type: 'comment',
    user: {
      name: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    content: 'commented on your post',
    target: '"Great work! Looking forward to more updates!"',
    timeAgo: '15m ago',
    isRead: false,
  },
  {
    id: '3',
    type: 'friend_request',
    user: {
      name: 'Emma Wilson',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    content: 'sent you a friend request',
    timeAgo: '1h ago',
    isRead: false,
    mutualFriends: 5,
  },
  {
    id: '4',
    type: 'birthday',
    user: {
      name: 'James Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    content: "It's James's birthday today",
    timeAgo: '3h ago',
    isRead: true,
  },
  {
    id: '5',
    type: 'tag',
    user: {
      name: 'Lisa Kim',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    content: 'tagged you in a photo',
    timeAgo: '5h ago',
    isRead: true,
    thumbnail: 'https://picsum.photos/50/50',
  },
  // Add more notifications as needed
];

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const renderNotificationIcon = type => {
    switch (type) {
      case 'like':
        return '👍';
      case 'comment':
        return '💬';
      case 'friend_request':
        return '👥';
      case 'birthday':
        return '🎂';
      case 'tag':
        return '📷';
      default:
        return '�notification';
    }
  };

  const renderFriendRequestActions = () => (
    <View style={styles.friendRequestActions}>
      <TouchableOpacity style={styles.acceptButton}>
        <Text style={styles.acceptButtonText}>Accept</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  const renderNotificationItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.notificationItem,
        !item.isRead && styles.unreadNotification,
      ]}>
      <View style={styles.notificationContent}>
        <View style={styles.avatarContainer}>
          <Image source={{uri: item.user.avatar}} style={styles.avatar} />
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>{renderNotificationIcon(item.type)}</Text>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.notificationText}>
            <Text style={styles.userName}>{item.user.name}</Text> {item.content}
            {item.target && (
              <Text style={styles.targetText}> {item.target}</Text>
            )}
            {item.type === 'friend_request' && item.mutualFriends > 0 && (
              <Text style={styles.mutualFriends}>
                {' '}
                • {item.mutualFriends} mutual friends
              </Text>
            )}
          </Text>
          <Text style={styles.timeAgo}>{item.timeAgo}</Text>

          {item.type === 'friend_request' && renderFriendRequestActions()}
        </View>

        {item.thumbnail && (
          <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
        )}
      </View>

      <TouchableOpacity style={styles.optionsButton}>
        <Text style={styles.optionsButtonText}>•••</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Notifications</Text>
      <TouchableOpacity style={styles.markAllButton}>
        <Text style={styles.markAllButtonText}>Mark all as read</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
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
  markAllButton: {
    padding: 8,
  },
  markAllButtonText: {
    color: '#1877f2',
    fontSize: 16,
    fontWeight: '500',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e4e6eb',
  },
  unreadNotification: {
    backgroundColor: '#e7f3ff',
  },
  notificationContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  iconContainer: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: '#1877f2',
    borderRadius: 16,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  icon: {
    fontSize: 12,
  },
  textContainer: {
    flex: 1,
  },
  notificationText: {
    fontSize: 15,
    color: '#1c1e21',
    lineHeight: 20,
  },
  userName: {
    fontWeight: 'bold',
  },
  targetText: {
    color: '#65676b',
  },
  mutualFriends: {
    color: '#65676b',
  },
  timeAgo: {
    fontSize: 13,
    color: '#65676b',
    marginTop: 4,
  },
  thumbnail: {
    width: 56,
    height: 56,
    borderRadius: 8,
    marginLeft: 12,
  },
  optionsButton: {
    padding: 8,
  },
  optionsButtonText: {
    color: '#65676b',
    fontSize: 16,
    fontWeight: 'bold',
  },
  friendRequestActions: {
    flexDirection: 'row',
    marginTop: 8,
  },
  acceptButton: {
    backgroundColor: '#1877f2',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginRight: 8,
  },
  acceptButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  deleteButton: {
    backgroundColor: '#e4e6eb',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: '#1c1e21',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default NotificationsScreen;
