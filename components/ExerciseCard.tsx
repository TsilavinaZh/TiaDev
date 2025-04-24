import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Code, Dumbbell, Check } from 'lucide-react-native';
import { COLORS, SHADOWS } from '@/constants/Colors';
import { LAYOUT } from '@/constants/Layout';
import { Exercise } from '@/types/course';
import Animated, { FadeInLeft } from 'react-native-reanimated';

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
  onPress: (exercise: Exercise) => void;
}

export default function ExerciseCard({ exercise, index, onPress }: ExerciseCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return COLORS.success;
      case 'medium':
        return COLORS.warning;
      case 'hard':
        return COLORS.error;
      default:
        return COLORS.textTertiary;
    }
  };

  return (
    <Animated.View
      entering={FadeInLeft.delay(index * 100).duration(400)}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.7}
        onPress={() => onPress(exercise)}
      >
        <View style={[
          styles.iconContainer,
          { backgroundColor: exercise.completed ? COLORS.accent + '20' : COLORS.secondary + '20' }
        ]}>
          {exercise.completed ? (
            <Check size={20} color={COLORS.accent} />
          ) : (
            <Dumbbell size={20} color={COLORS.secondary} />
          )}
        </View>
        
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{exercise.title}</Text>
            <View style={[
              styles.difficultyBadge, 
              { backgroundColor: getDifficultyColor(exercise.difficulty) + '20' }
            ]}>
              <Text style={[
                styles.difficultyText, 
                { color: getDifficultyColor(exercise.difficulty) }
              ]}>
                {exercise.difficulty}
              </Text>
            </View>
          </View>
          
          <Text style={styles.description} numberOfLines={2}>
            {exercise.description}
          </Text>
          
          <View style={styles.footer}>
            <View style={styles.codeIcon}>
              <Code size={14} color={COLORS.textTertiary} />
            </View>
            {exercise.completed && (
              <View style={styles.completedBadge}>
                <Text style={styles.completedText}>Completed</Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: LAYOUT.spacing.md,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.background,
    borderRadius: LAYOUT.borderRadius.md,
    padding: LAYOUT.spacing.md,
    ...SHADOWS.small,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: LAYOUT.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: LAYOUT.spacing.md,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: COLORS.textPrimary,
    flex: 1,
  },
  difficultyBadge: {
    paddingHorizontal: LAYOUT.spacing.sm,
    paddingVertical: 2,
    borderRadius: LAYOUT.borderRadius.full,
    marginLeft: LAYOUT.spacing.sm,
  },
  difficultyText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
    marginBottom: LAYOUT.spacing.sm,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  codeIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  completedBadge: {
    backgroundColor: COLORS.accent + '20',
    paddingHorizontal: LAYOUT.spacing.sm,
    paddingVertical: 2,
    borderRadius: LAYOUT.borderRadius.full,
  },
  completedText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: COLORS.accent,
  },
});