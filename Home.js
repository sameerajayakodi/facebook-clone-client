import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const {width} = Dimensions.get('window');

// Mock Data
const categories = [
  {id: '1', name: 'Pizza', icon: '🍕'},
  {id: '2', name: 'Burgers', icon: '🍔'},
  {id: '3', name: 'Sushi', icon: '🍱'},
  {id: '4', name: 'Salads', icon: '🥗'},
  {id: '5', name: 'Desserts', icon: '🍰'},
];

const popularItems = [
  {
    id: '1',
    name: 'Margherita Pizza',
    restaurant: 'Pizza Palace',
    price: '12.99',
    rating: '4.5',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800',
  },
  {
    id: '2',
    name: 'Classic Burger',
    restaurant: 'Burger House',
    price: '8.99',
    rating: '4.3',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
  },
  {
    id: '3',
    name: 'Spaghetti Carbonara',
    restaurant: 'Pasta Paradise',
    price: '14.50',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800',
  },
  {
    id: '4',
    name: 'Grilled Chicken Salad',
    restaurant: 'Healthy Bites',
    price: '10.99',
    rating: '4.2',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
  },
  {
    id: '5',
    name: 'Chocolate Cake',
    restaurant: 'Dessert Haven',
    price: '6.99',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800',
  },
];

const CategoryCard = ({item}) => (
  <TouchableOpacity style={styles.categoryCard}>
    <View style={styles.categoryIconContainer}>
      <Text style={styles.categoryIcon}>{item.icon}</Text>
    </View>
    <Text style={styles.categoryName}>{item.name}</Text>
  </TouchableOpacity>
);

const FoodCard = ({item}) => (
  <TouchableOpacity style={styles.foodCard}>
    <View style={styles.imageContainer}>
      <Image
        source={{
          uri: item.image,
          headers: {
            Accept: '*/*',
          },
        }}
        style={styles.foodImage}
        resizeMode="cover"
      />
    </View>
    <View style={styles.foodInfo}>
      <View style={styles.foodHeader}>
        <View>
          <Text style={styles.foodName}>{item.name}</Text>
          <Text style={styles.restaurantName}>{item.restaurant}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingIcon}>⭐</Text>
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
      <View style={styles.foodFooter}>
        <Text style={styles.foodPrice}>${item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

export function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>FoodieHub</Text>
          <Text style={styles.subtitle}>
            What would you like to order today?
          </Text>
        </View>

        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileButtonText}>👤</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for food or restaurants"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#8E8E93"
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            data={categories}
            renderItem={({item}) => <CategoryCard item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Popular Items */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Now</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllButton}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={popularItems}
            renderItem={({item}) => <FoodCard item={item} />}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔍</Text>
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🛒</Text>
          <Text style={styles.navText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📋</Text>
          <Text style={styles.navText}>Orders</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7', // iOS background color
  },
  header: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA', // iOS border color
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: 0.35,
  },
  subtitle: {
    fontSize: 16,
    color: '#8E8E93', // iOS secondary text color
    marginTop: 4,
  },
  profileButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E5EA',
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  searchIcon: {
    fontSize: 16,
    color: '#8E8E93',
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 36,
    fontSize: 17,
    color: '#000000',
    paddingVertical: 0,
  },
  section: {
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: 0.35,
  },
  seeAllButton: {
    color: '#007AFF', // iOS blue
    fontSize: 16,
  },
  categoriesList: {
    paddingVertical: 8,
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 16,
  },
  categoryIconContainer: {
    width: 68,
    height: 68,
    backgroundColor: '#FFFFFF',
    borderRadius: 34,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryIcon: {
    fontSize: 32,
  },
  categoryName: {
    fontSize: 13,
    color: '#000000',
    marginTop: 8,
    fontWeight: '500',
  },
  foodCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 180,
  },
  foodImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  foodInfo: {
    padding: 12,
  },
  foodHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  foodName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  restaurantName: {
    fontSize: 13,
    color: '#8E8E93', // iOS secondary text color
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    fontSize: 16,
    color: '#FF9500', // iOS rating color
  },
  ratingText: {
    fontSize: 14,
    color: '#8E8E93',
    marginLeft: 4,
  },
  foodFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  foodPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  addButton: {
    backgroundColor: '#007AFF', // iOS blue
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA', // iOS border color
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24,
    color: '#8E8E93',
  },
  navText: {
    fontSize: 12,
    color: '#8E8E93',
  },
});

export default Home;
