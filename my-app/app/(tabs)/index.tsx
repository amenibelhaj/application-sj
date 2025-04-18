import { StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
   <ParallaxScrollView
      headerBackgroundColor={{ light: '#E0F7FA', dark: '#0D1B2A' }}
      // headerImage removed as per your request
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Crystal Car Care</ThemedText> {/* Business name */}
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Book a Wash</ThemedText>
        <ThemedText>Schedule a car wash or detailing service with just a tap.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Our Services</ThemedText>
        <ThemedText>Explore interior and exterior cleaning, waxing, polishing, and more.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Why Choose Us?</ThemedText>
        <ThemedText>Top-rated service, eco-friendly products, and attention to detail.</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
