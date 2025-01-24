import {useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Image, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

// Cart.js
export function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Margherita Pizza',
      restaurant: 'Pizza Palace',
      price: '12.99',
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800',
    },
    // Add more items as needed
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === id
            ? {...item, quantity: Math.max(0, item.quantity + change)}
            : item,
        )
        .filter(item => item.quantity > 0),
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0,
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cart</Text>
      </View>

      {/* Cart Items List */}
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.cartItem}>
            <Image
              source={{uri: item.image}}
              style={styles.cartItemImage}
              resizeMode="cover"
            />
            <View style={styles.cartItemInfo}>
              <Text style={styles.cartItemName}>{item.name}</Text>
              <Text style={styles.cartItemRestaurant}>{item.restaurant}</Text>
              <Text style={styles.cartItemPrice}>${item.price}</Text>
            </View>
            <View style={styles.quantityControls}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => updateQuantity(item.id, -1)}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => updateQuantity(item.id, 1)}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Footer */}
      <View style={styles.cartFooter}>
        <View style={styles.cartTotal}>
          <Text style={styles.cartTotalLabel}>Total:</Text>
          <Text style={styles.cartTotalAmount}>${total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Styles
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
});
