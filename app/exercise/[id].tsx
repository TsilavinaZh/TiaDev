import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { LAYOUT } from '@/constants/Layout';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { exercises } from '@/data/exercises';
import { Exercise } from '@/types/course';
import { ChevronLeft, Play, Lightbulb, Award, Check, Eye, CircleCheck as CheckCircle, ArrowRight } from 'lucide-react-native';
import CodeBlock from '@/components/CodeBlock';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function ExerciseScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [solutionVisible, setSolutionVisible] = useState(false);
  const [activeHint, setActiveHint] = useState<number | null>(null);
  
  useEffect(() => {
    if (id) {
      const foundExercise = exercises.find(e => e.id === id);
      if (foundExercise) {
        setExercise(foundExercise);
        setIsCompleted(foundExercise.completed);
      }
    }
  }, [id]);
  
  const handleBackPress = () => {
    router.back();
  };
  
  const markAsCompleted = () => {
    setIsCompleted(true);
    // In a real app, this would update the backend
  };
  
  const toggleSolution = () => {
    setSolutionVisible(!solutionVisible);
  };
  
  const toggleHint = (index: number) => {
    if (activeHint === index) {
      setActiveHint(null);
    } else {
      setActiveHint(index);
    }
  };
  
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
  
  if (!exercise) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading exercise...</Text>
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
            onPress={() => {}} // This would open a run modal in a real app
            activeOpacity={0.7}
          >
            <Play size={22} color={COLORS.accent} />
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
            <Text style={styles.exerciseTitle}>{exercise.title}</Text>
            
            <View style={styles.metaInfo}>
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
              
              {isCompleted && (
                <View style={styles.completedBadge}>
                  <Check size={12} color={COLORS.accent} />
                  <Text style={styles.completedText}>Completed</Text>
                </View>
              )}
            </View>
            
            <Text style={styles.exerciseDescription}>{exercise.description}</Text>
          </Animated.View>
          
          <View style={styles.exerciseContent}>
            <Text style={styles.sectionTitle}>Instructions</Text>
            <Text style={styles.instructionsText}>{exercise.instructions}</Text>
            
            <Text style={[styles.sectionTitle, { marginTop: LAYOUT.spacing.lg }]}>Code Template</Text>
            {exercise.codeTemplate && (
              <CodeBlock code={exercise.codeTemplate} language="javascript" />
            )}
            
            {/* Hints Section */}
            <View style={styles.hintsSection}>
              <Text style={styles.sectionTitle}>Hints</Text>
              {exercise.hints.map((hint, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.hintButton,
                    activeHint === index && styles.activeHintButton
                  ]}
                  onPress={() => toggleHint(index)}
                  activeOpacity={0.7}
                >
                  <View style={styles.hintHeader}>
                    <View style={styles.hintIcon}>
                      <Lightbulb size={14} color={COLORS.warning} />
                    </View>
                    <Text style={styles.hintTitle}>Hint {index + 1}</Text>
                  </View>
                  
                  {activeHint === index && (
                    <View style={styles.hintContent}>
                      <Text style={styles.hintText}>{hint}</Text>
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
            
            {/* Solution Section */}
            <View style={styles.solutionSection}>
              <TouchableOpacity
                style={styles.solutionButton}
                onPress={toggleSolution}
                activeOpacity={0.7}
              >
                <Eye size={18} color={COLORS.primary} />
                <Text style={styles.solutionButtonText}>
                  {solutionVisible ? 'Hide Solution' : 'View Solution'}
                </Text>
              </TouchableOpacity>
              
              {solutionVisible && exercise.solution && (
                <View style={styles.solutionContent}>
                  <CodeBlock code={exercise.solution} language="javascript" />
                </View>
              )}
            </View>
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
  exerciseTitle: {
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
  difficultyBadge: {
    paddingVertical: 4,
    paddingHorizontal: LAYOUT.spacing.sm,
    borderRadius: LAYOUT.borderRadius.full,
    marginRight: LAYOUT.spacing.sm,
  },
  difficultyText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
  },
  completedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.accent + '20',
    paddingVertical: 4,
    paddingHorizontal: LAYOUT.spacing.sm,
    borderRadius: LAYOUT.borderRadius.full,
  },
  completedText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: COLORS.accent,
    marginLeft: 4,
  },
  exerciseDescription: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: LAYOUT.spacing.lg,
    lineHeight: 24,
  },
  exerciseContent: {
    marginTop: LAYOUT.spacing.md,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: COLORS.textPrimary,
    marginBottom: LAYOUT.spacing.md,
  },
  instructionsText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: COLORS.textPrimary,
    lineHeight: 24,
  },
  hintsSection: {
    marginTop: LAYOUT.spacing.lg,
  },
  hintButton: {
    backgroundColor: COLORS.card,
    borderRadius: LAYOUT.borderRadius.md,
    marginBottom: LAYOUT.spacing.sm,
    overflow: 'hidden',
  },
  activeHintButton: {
    borderWidth: 1,
    borderColor: COLORS.warning + '50',
  },
  hintHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: LAYOUT.spacing.md,
  },
  hintIcon: {
    marginRight: LAYOUT.spacing.sm,
  },
  hintTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: COLORS.textPrimary,
  },
  hintContent: {
    padding: LAYOUT.spacing.md,
    paddingTop: 0,
  },
  hintText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  solutionSection: {
    marginTop: LAYOUT.spacing.lg,
  },
  solutionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: LAYOUT.borderRadius.md,
    padding: LAYOUT.spacing.md,
    marginBottom: LAYOUT.spacing.sm,
  },
  solutionButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: COLORS.primary,
    marginLeft: LAYOUT.spacing.sm,
  },
  solutionContent: {
    marginTop: LAYOUT.spacing.sm,
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