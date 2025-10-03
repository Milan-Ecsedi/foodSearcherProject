import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView,} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // for Apple logo
import { AntDesign } from '@expo/vector-icons'; // for Google logo
import { Link } from 'expo-router';
import { useIsFocused } from '@react-navigation/native';



const LoginScreen: React.FC = () => {

  const useFocused = useIsFocused();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email, 'Password:', password);
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appName}>FoodSearcher</Text>
      <Text style={styles.loginTitle}>Login</Text>

      
      <TextInput
        style={styles.input}
        placeholder="email@domain.com"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      
      <TextInput
        style={styles.input}
        placeholder="password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      
      <TouchableOpacity style={styles.continueButton} onPress={handleLogin}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>


      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      
      <TouchableOpacity style={styles.socialButton}>
        <AntDesign name="google" size={20} color="red" style={styles.icon} />
        <Text style={styles.socialText}>Continue with Google</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-apple" size={20} color="black" style={styles.icon} />
        <Text style={styles.socialText}>Continue with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.guestButton}>
        <Link href={"/profile"} style={styles.guestText}>Continue as Guest</Link>
      </TouchableOpacity>
      
      <Text style={styles.footerText}>
        By clicking continue, you agree to our{' '}
        <Text style={styles.link}>Terms of Service</Text> and{' '}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  appName: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  loginTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    fontSize: 14,
  },
  continueButton: {
    backgroundColor: 'black',
    width: '100%',
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  continueText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 10,
    color: '#999',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    width: '100%',
    height: 45,
    borderRadius: 8,
    marginBottom: 12,
    justifyContent: 'center',
  },
  guestButton: {
    backgroundColor: '#f2f2f2',
    width: '100%',
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  socialText: {
    fontSize: 15,
    fontWeight: '500',
  },
  guestText: {
    fontSize: 15,
    fontWeight: '500',
  },
  icon: {
    marginRight: 8,
  },
  footerText: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  link: {
    textDecorationLine: 'underline',
    color: '#000',
  },
});

export default LoginScreen;