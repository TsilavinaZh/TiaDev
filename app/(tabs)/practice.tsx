import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { LAYOUT } from '@/constants/Layout';
import HeaderBar from '@/components/HeaderBar';
import ExerciseCard from '@/components/ExerciseCard';
import { exercises } from '@/data/exercises';
import { Exercise } from '@/types/course';
import { useRouter } from 'expo-router';
import { BrainCircuit, Clock, Award } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const DIFFICULTY_FILTERS = ['All', 'Easy', 'Medium', 'Hard'];

export default function PracticeScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredExercises = exercises.filter(exercise => {
    if (activeFilter === 'All') return true;
    return exercise.difficulty.toLowerCase() === activeFilter.toLowerCase();
  });
  
  const handleExercisePress = (exercise: Exercise) => {
    router.push(`/exercise/${exercise.id}`);
  };
  
  return (
    <View style={styles.container}>
      <HeaderBar title="Practice" />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Animated.View 
            entering={FadeInDown.duration(400)}
            style={styles.statsContainer}
          >
            <View style={styles.statItem}>
              <View style={[styles.statIcon, { backgroundColor: `${COLORS.primary}20` }]}>
                <BrainCircuit size={20} color={COLORS.primary} />
              </View>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Completed</Text>
            </View>
            
            <View style={styles.statItem}>
              <View style={[styles.statIcon, { backgroundColor: `${COLORS.secondary}20` }]}>
                <Clock size={20} color={COLORS.secondary} />
              </View>
              <Text style={styles.statValue}>5h 23m</Text>
              <Text style={styles.statLabel}>Practice Time</Text>
            </View>
            
            <View style={styles.statItem}>
              <View style={[styles.statIcon, { backgroundColor: `${COLORS.accent}20` }]}>
                <Award size={20} color={COLORS.accent} />
              </View>
              <Text style={styles.statValue}>84%</Text>
              <Text style={styles.statLabel}>Success Rate</Text>
            </View>
          </Animated.View>
          
          <View style={styles.filterContainer}>
            <Text style={styles.filterTitle}>Difficulty</Text>
            <View style={styles.filterButtons}>
              {DIFFICULTY_FILTERS.map((filter) => (
                <TouchableOpacity
                  key={filter}
                  style={[
                    styles.filterButton,
                    activeFilter === filter && styles.activeFilterButton,
                  ]}
                  onPress={() => setActiveFilter(filter)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.filterText,
                      activeFilter === filter && styles.activeFilterText,
                    ]}
                  >
                    {filter}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          <View style={styles.exercisesList}>
            <Text style={styles.exercisesTitle}>Programming Exercises</Text>
            {filteredExercises.length > 0 ? (
              filteredExercises.map((exercise, index) => (
                <ExerciseCard
                  key={exercise.id}
                  exercise={exercise}
                  index={index}
                  onPress={handleExercisePress}
                />
              ))
            ) : (
              <Text style={styles.noExercises}>
                No exercises found for this difficulty level.
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: LAYOUT.spacing.lg,
    paddingTop: LAYOUT.spacing.md,
    paddingBottom: LAYOUT.spacing.xl,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: LAYOUT.spacing.lg,
  },
  statItem: {
    alignItems: 'center',
    width: '30%',
  },
  statIcon: {
    width: 44,
    height: 44,
    borderRadius: LAYOUT.borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: LAYOUT.spacing.sm,
  },
  statValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: COLORS.textPrimary,
    marginBottom: 2,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  filterContainer: {
    marginBottom: LAYOUT.spacing.lg,
  },
  filterTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: COLORS.textPrimary,
    marginBottom: LAYOUT.spacing.sm,
  },
  filterButtons: {
    flexDirection: 'row',
  },
  filterButton: {
    paddingVertical: LAYOUT.spacing.sm,
    paddingHorizontal: LAYOUT.spacing.md,
    borderRadius: LAYOUT.borderRadius.full,
    marginRight: LAYOUT.spacing.sm,
    backgroundColor: COLORS.card,
  },
  activeFilterButton: {
    backgroundColor: COLORS.primary,
  },
  filterText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  activeFilterText: {
    color: 'white',
  },
  exercisesList: {
    marginTop: LAYOUT.spacing.md,
  },
  exercisesTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: COLORS.textPrimary,
    marginBottom: LAYOUT.spacing.md,
  },
  noExercises: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: LAYOUT.spacing.xl,
  },
});