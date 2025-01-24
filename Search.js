// Search.js
import React, {useState} from 'react';
import {
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

const searchResults = [
  {
    id: '1',
    name: 'Margherita Pizza',
    restaurant: 'Pizza Palace',
    price: '12.99',
    rating: '4.5',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800',
  },
  // ... more items
];

export function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All',
    'Popular',
    'Top Rated',
    'Price Low-High',
    'Price High-Low',
  ];

  const FilterChip = ({label}) => (
    <TouchableOpacity
      style={[
        styles.filterChip,
        activeFilter === label && styles.activeFilterChip,
      ]}
      onPress={() => setActiveFilter(label)}>
      <Text
        style={[
          styles.filterChipText,
          activeFilter === label && styles.activeFilterChipText,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
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
            autoFocus
          />
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}>
        {filters.map(filter => (
          <FilterChip key={filter} label={filter} />
        ))}
      </ScrollView>

      <FlatList
        data={searchResults}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.resultCard}>
            <Image
              source={{uri: item.image}}
              style={styles.resultImage}
              resizeMode="cover"
            />
            <View style={styles.resultInfo}>
              <Text style={styles.resultName}>{item.name}</Text>
              <Text style={styles.resultRestaurant}>{item.restaurant}</Text>
              <View style={styles.resultFooter}>
                <Text style={styles.resultPrice}>${item.price}</Text>
                <View style={styles.ratingContainer}>
                  <Text>⭐ {item.rating}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: 0.35,
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
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
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 36,
    fontSize: 17,
    color: '#000000',
  },
  filtersContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#E5E5EA',
    marginRight: 8,
  },
  activeFilterChip: {
    backgroundColor: '#007AFF',
  },
  filterChipText: {
    color: '#000000',
  },
  activeFilterChipText: {
    color: '#FFFFFF',
  },
  resultCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  resultImage: {
    width: 100,
    height: 100,
  },
  resultInfo: {
    flex: 1,
    padding: 12,
  },
  resultName: {
    fontSize: 16,
    fontWeight: '600',
  },
  resultRestaurant: {
    fontSize: 14,
    color: '#8E8E93',
  },
  resultFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  resultPrice: {
    fontSize: 16,
    fontWeight: '600',
  },
  // Cart Styles
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginVertical: 1,
  },
  cartItemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  cartItemInfo: {
    flex: 1,
    marginLeft: 12,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: '600',
  },
  cartItemRestaurant: {
    fontSize: 14,
    color: '#8E8E93',
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    backgroundColor: '#E5E5EA',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: '600',
  },
  quantity: {
    marginHorizontal: 12,
    fontSize: 16,
  },
  cartFooter: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
  },
  cartTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cartTotalLabel: {
    fontSize: 18,
    fontWeight: '600',
  },
  cartTotalAmount: {
    fontSize: 18,
    fontWeight: '700',
  },
  checkoutButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  // Orders Styles
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    color: '#8E8E93',
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: '600',
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  orderImage: {
    width: '100%',
    height: 120,
  },
  orderInfo: {
    padding: 16,
  },
  orderRestaurant: {
    fontSize: 18,
    fontWeight: '600',
  },
  orderItem: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 4,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: '600',
  },
  orderStatus: {
    backgroundColor: '#E5E5EA',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  orderStatusText: {
    fontSize: 14,
    color: 'red',
  },
});
