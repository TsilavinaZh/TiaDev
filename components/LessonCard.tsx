import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BookOpen, Check } from 'lucide-react-native';
import { COLORS, SHADOWS } from '@/constants/Colors';
import { LAYOUT } from '@/constants/Layout';
import { Lesson } from '@/types/course';
import Animated, { FadeInRight } from 'react-native-reanimated';

interface LessonCardProps {
  lesson: Lesson;
  index: number;
  onPress: (lesson: Lesson) => void;
}

export default function LessonCard({ lesson, index, onPress }: LessonCardProps) {
  return (
    <Animated.View
      entering={FadeInRight.delay(index * 100).duration(400)}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.7}
        onPress={() => onPress(lesson)}
      >
        <View style={[
          styles.iconContainer,
          { backgroundColor: lesson.completed ? COLORS.accent + '20' : COLORS.primary + '20' }
        ]}>
          {lesson.completed ? (
            <Check size={20} color={COLORS.accent} />
          ) : (
            <BookOpen size={20} color={COLORS.primary} />
          )}
        </View>
        
        <View style={styles.content}>
          <Text style={styles.title}>{lesson.title}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {lesson.description}
          </Text>
          
          <View style={styles.footer}>
            <Text style={styles.duration}>
              {lesson.duration} min
            </Text>
            {lesson.completed && (
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
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: COLORS.textPrimary,
    marginBottom: 4,
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
  duration: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: COLORS.textTertiary,
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