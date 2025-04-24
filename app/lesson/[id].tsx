import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { LAYOUT } from '@/constants/Layout';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { lessons } from '@/data/lessons';
import { Lesson } from '@/types/course';
import { ChevronLeft, Bookmark, CircleCheck as CheckCircle, Clock, ArrowRight } from 'lucide-react-native';
import CodeBlock from '@/components/CodeBlock';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function LessonScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  useEffect(() => {
    if (id) {
      const foundLesson = lessons.find(l => l.id === id);
      if (foundLesson) {
        setLesson(foundLesson);
        setIsCompleted(foundLesson.completed);
      }
    }
  }, [id]);
  
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  
  const markAsCompleted = () => {
    setIsCompleted(true);
    // In a real app, this would update the backend
  };
  
  const handleBackPress = () => {
    router.back();
  };
  
  if (!lesson) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading lesson...</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <ChevronLeft size={24} color={COLORS.textPrimary} />
        </TouchableOpacity>
        
        <View style={styles.headerActions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={toggleBookmark}
            activeOpacity={0.7}
          >
            <Bookmark 
              size={22} 
              color={isBookmarked ? COLORS.warning : COLORS.textSecondary}
              fill={isBookmarked ? COLORS.warning : 'transparent'} 
            />
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Animated.View
            entering={FadeIn.duration(400)}
          >
            <Text style={styles.lessonTitle}>{lesson.title}</Text>
            
            <View style={styles.metaInfo}>
              <View style={styles.durationBadge}>
                <Clock size={14} color={COLORS.textSecondary} />
                <Text style={styles.durationText}>{lesson.duration} min</Text>
              </View>
            </View>
            
            <Text style={styles.lessonDescription}>{lesson.description}</Text>
          </Animated.View>
          
          <View style={styles.lessonContent}>
            {/* We're using a simple text renderer here, but in a real app you'd use a markdown renderer */}
            <Text style={styles.contentText}>{lesson.content}</Text>
            
            {lesson.codeExample && (
              <CodeBlock code={lesson.codeExample} language="javascript" />
            )}
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.bottomBar}>
        {isCompleted ? (
          <View style={styles.completedButton}>
            <CheckCircle size={20} color="white" />
            <Text style={styles.completedButtonText}>Completed</Text>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.completeButton}
            onPress={markAsCompleted}
            activeOpacity={0.7}
          >
            <Text style={styles.completeButtonText}>Mark as Completed</Text>
            <ArrowRight size={20} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  loadingText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: COLORS.textSecondary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: LAYOUT.spacing.md,
    paddingHorizontal: LAYOUT.spacing.lg,
    backgroundColor: COLORS.background,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: LAYOUT.borderRadius.full,
    backgroundColor: COLORS.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerActions: {
    flexDirection: 'row',
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: LAYOUT.borderRadius.full,
    backgroundColor: COLORS.card,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: LAYOUT.spacing.sm,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: LAYOUT.spacing.lg,
    paddingBottom: LAYOUT.spacing.xl,
  },
  lessonTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: COLORS.textPrimary,
    marginBottom: LAYOUT.spacing.sm,
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: LAYOUT.spacing.md,
  },
  durationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    paddingVertical: 4,
    paddingHorizontal: LAYOUT.spacing.sm,
    borderRadius: LAYOUT.borderRadius.full,
  },
  durationText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: COLORS.textSecondary,
    marginLeft: 4,
  },
  lessonDescription: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: LAYOUT.spacing.lg,
    lineHeight: 24,
  },
  lessonContent: {
    marginTop: LAYOUT.spacing.md,
  },
  contentText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: COLORS.textPrimary,
    lineHeight: 24,
  },
  bottomBar: {
    paddingHorizontal: LAYOUT.spacing.lg,
    paddingVertical: LAYOUT.spacing.md,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    backgroundColor: COLORS.background,
  },
  completeButton: {
    backgroundColor: COLORS.primary,
    borderRadius: LAYOUT.borderRadius.md,
    paddingVertical: LAYOUT.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  completeButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: 'white',
    marginRight: LAYOUT.spacing.sm,
  },
  completedButton: {
    backgroundColor: COLORS.accent,
    borderRadius: LAYOUT.borderRadius.md,
    paddingVertical: LAYOUT.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  completedButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: 'white',
    marginLeft: LAYOUT.spacing.sm,
  },
});