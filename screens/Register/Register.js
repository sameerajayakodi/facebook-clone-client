import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {storeData} from '../../src/common/Storage';

const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state for registration
  const [isLoginLoading, setIsLoginLoading] = useState(false); // Loading state for navigating to Login

  const saveData = () => {
    storeData('my-key', 'afsd');
    console.log('Data saved');
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    if (username && email && password && confirmPassword) {
      if (password === confirmPassword) {
        setIsLoading(true); // Start loading
        // Simulate registration process
        setTimeout(() => {
          setIsLoading(false); // Stop loading
          Alert.alert('Registration Successful');
        }, 1000);
      } else {
        Alert.alert('Passwords do not match');
      }
    } else {
      Alert.alert('Please fill out all fields');
    }
  };

  const handleSocialLogin = platform => {
    Alert.alert(`Redirect to ${platform} Sign Up`);
    // Implement social login functionality here
  };

  const handleNavigateToLogin = async () => {
    setIsLoginLoading(true); // Start loading
    try {
      // Simulate a delay for navigation
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigation.navigate('Login');
    } catch (error) {
      console.error('Navigation error:', error);
    } finally {
      setIsLoginLoading(false); // Stop loading
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.card}>
        <Text style={styles.title}>Create an Account</Text>
        <Text style={styles.subtitle}>
          Enter your details below to create a new account
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialLogin('Facebook')}>
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialLogin('Google')}>
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={saveData}
          disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.text}>Register</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signUpContainer}
          onPress={handleNavigateToLogin}
          disabled={isLoginLoading}>
          {isLoginLoading ? (
            <ActivityIndicator color="#007AFF" />
          ) : (
            <Text style={styles.signUpText}>
              Already have an account?{' '}
              <Text style={styles.signUpLink}>Login</Text>
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    padding: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    backgroundColor: '#F9FAFB',
    fontSize: 14,
    color: '#111827',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 50,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: '#007AFF80', // Semi-transparent when disabled
  },
  text: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  signUpContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 14,
    color: '#6B7280',
  },
  signUpLink: {
    fontWeight: 'bold',
    color: 'black',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  socialButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButtonText: {
    fontSize: 14,
    color: '#111827',
    marginLeft: 10,
  },
});
