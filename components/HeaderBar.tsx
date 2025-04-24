import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Search, Bell } from 'lucide-react-native';
import { COLORS } from '@/constants/Colors';
import { LAYOUT } from '@/constants/Layout';
import Animated, { FadeIn } from 'react-native-reanimated';

interface HeaderBarProps {
  title: string;
  showNotification?: boolean;
  showSearch?: boolean;
  onSearchPress?: () => void;
  onNotificationPress?: () => void;
}

export default function HeaderBar({
  title,
  showNotification = true,
  showSearch = true,
  onSearchPress,
  onNotificationPress,
}: HeaderBarProps) {
  const insets = useSafeAreaInsets();
  
  return (
    <Animated.View 
      entering={FadeIn.duration(400)}
      style={[
        styles.container, 
        { paddingTop: Platform.OS === 'ios' ? insets.top : insets.top + 8 }
      ]}
    >
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.actions}>
        {showSearch && (
          <TouchableOpacity 
            style={styles.iconButton} 
            onPress={onSearchPress}
            activeOpacity={0.7}
          >
            <Search size={22} color={COLORS.textPrimary} />
          </TouchableOpacity>
        )}
        
        {showNotification && (
          <TouchableOpacity 
            style={styles.iconButton} 
            onPress={onNotificationPress}
            activeOpacity={0.7}
          >
            <Bell size={22} color={COLORS.textPrimary} />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        )}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: LAYOUT.spacing.lg,
    paddingBottom: LAYOUT.spacing.md,
    backgroundColor: COLORS.background,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: COLORS.textPrimary,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: LAYOUT.borderRadius.full,
    backgroundColor: COLORS.card,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: LAYOUT.spacing.sm,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  notificationBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.error,
    borderWidth: 1,
    borderColor: COLORS.background,
  },
});