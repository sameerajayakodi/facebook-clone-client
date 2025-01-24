import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {getData} from '../../src/common/Storage';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  const handlGetData = async () => {
    const data = await getData('my-key');
    console.log('Data:', data);
    navigation.navigate('Register');
  };
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      // Your login logic here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated API call
      navigation.navigate('Drawer'); // Navigate to Drawer after successful login
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigateToRegister = async () => {
    setIsRegisterLoading(true);
    try {
      // Simulate a delay for navigation
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigation.navigate('Register');
    } catch (error) {
      console.error('Navigation error:', error);
    } finally {
      setIsRegisterLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.card}>
        <Text style={styles.title}>Login Your Account</Text>
        <Text style={styles.subtitle}>
          Enter your email below to login your account
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
          <View style={styles.divider} />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
          editable={!isLoading}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          editable={!isLoading}
        />

        <TouchableOpacity
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleLogin} // Navigate to Drawer on press
          disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.text}>Login Account</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signUpContainer}
          onPress={handlGetData}
          disabled={isRegisterLoading}>
          {isRegisterLoading ? (
            <ActivityIndicator color="#007AFF" />
          ) : (
            <Text style={styles.signUpText}>
              Not Account? <Text style={styles.signUpLink}>Sign Up</Text>
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

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
    fontWeight: '700',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  socialButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    alignItems: 'center',
  },
  socialButtonText: {
    fontSize: 14,
    color: '#111827',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5EA',
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 12,
    color: '#8E8E93',
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
    minHeight: 48,
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#007AFF80',
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
    color: '#8E8E93',
  },
  signUpLink: {
    fontWeight: 'bold',
    color: 'black',
  },
});
