import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { LAYOUT } from '@/constants/Layout';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface ProgressBarProps {
  progress: number; // 0 to 1
  label?: string;
  height?: number;
  color?: string;
  showPercentage?: boolean;
}

export default function ProgressBar({
  progress,
  label,
  height = 8,
  color = COLORS.primary,
  showPercentage = false,
}: ProgressBarProps) {
  const animatedProgress = useSharedValue(0);
  
  React.useEffect(() => {
    animatedProgress.value = withTiming(progress, { duration: 1000 });
  }, [progress]);
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${animatedProgress.value * 100}%`,
    };
  });
  
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <View style={[styles.progressBackground, { height }]}>
        <Animated.View
          style={[
            styles.progressFill,
            { backgroundColor: color, height },
            animatedStyle,
          ]}
        />
      </View>
      
      {showPercentage && (
        <Text style={styles.percentage}>{Math.round(progress * 100)}%</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: LAYOUT.spacing.sm,
  },
  label: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  progressBackground: {
    backgroundColor: COLORS.border,
    borderRadius: LAYOUT.borderRadius.full,
    overflow: 'hidden',
  },
  progressFill: {
    borderRadius: LAYOUT.borderRadius.full,
  },
  percentage: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 4,
    textAlign: 'right',
  },
});