import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { LAYOUT } from '@/constants/Layout';
import HeaderBar from '@/components/HeaderBar';
import TopicCard from '@/components/TopicCard';
import LessonCard from '@/components/LessonCard';
import { topics } from '@/data/topics';
import { lessons } from '@/data/lessons';
import { Topic, Lesson } from '@/types/course';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function LearnScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { topicId, lessonId } = params;
  
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [topicLessons, setTopicLessons] = useState<Lesson[]>([]);
  const [showAllTopics, setShowAllTopics] = useState(!topicId);
  
  useEffect(() => {
    if (topicId) {
      const topic = topics.find(t => t.id === topicId);
      if (topic) {
        setSelectedTopic(topic);
        setShowAllTopics(false);
        
        // Filter lessons for this topic
        const filteredLessons = lessons.filter(lesson => lesson.topicId === topicId);
        setTopicLessons(filteredLessons);
      }
    } else if (lessonId) {
      const lesson = lessons.find(l => l.id === lessonId);
      if (lesson) {
        const topic = topics.find(t => t.id === lesson.topicId);
        if (topic) {
          setSelectedTopic(topic);
          setShowAllTopics(false);
          
          // Filter lessons for this topic
          const filteredLessons = lessons.filter(l => l.topicId === lesson.topicId);
          setTopicLessons(filteredLessons);
        }
      }
    }
  }, [topicId, lessonId]);
  
  const handleTopicPress = (topic: Topic) => {
    setSelectedTopic(topic);
    setShowAllTopics(false);
    
    // Filter lessons for this topic
    const filteredLessons = lessons.filter(lesson => lesson.topicId === topic.id);
    setTopicLessons(filteredLessons);
  };
  
  const handleLessonPress = (lesson: Lesson) => {
    router.push(`/lesson/${lesson.id}`);
  };
  
  const handleBackPress = () => {
    setSelectedTopic(null);
    setShowAllTopics(true);
  };
  
  return (
    <View style={styles.container}>
      {showAllTopics ? (
        <HeaderBar title="Learn" />
      ) : (
        <View style={styles.topicHeader}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBackPress}
            activeOpacity={0.7}
          >
            <ChevronLeft size={24} color={COLORS.textPrimary} />
          </TouchableOpacity>
          {selectedTopic && (
            <Text style={styles.topicTitle}>{selectedTopic.title}</Text>
          )}
        </View>
      )}
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {showAllTopics ? (
          <View style={styles.section}>
            <Animated.View
              entering={FadeInDown.duration(400)}
              style={styles.introSection}
            >
              <Text style={styles.introTitle}>Start Learning</Text>
              <Text style={styles.introText}>
                Choose a topic below to begin your learning journey. Each topic contains multiple lessons and exercises.
              </Text>
            </Animated.View>
            
            {topics.map((topic, index) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                index={index}
                onPress={handleTopicPress}
              />
            ))}
          </View>
        ) : (
          <View style={styles.section}>
            {selectedTopic && (
              <Animated.View
                entering={FadeInDown.duration(400)}
                style={styles.topicDescription}
              >
                <Text style={styles.descriptionText}>
                  {selectedTopic.description}
                </Text>
              </Animated.View>
            )}
            
            <View style={styles.lessonsList}>
              <Text style={styles.lessonsTitle}>Lessons</Text>
              {topicLessons.length > 0 ? (
                topicLessons.map((lesson, index) => (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    index={index}
                    onPress={handleLessonPress}
                  />
                ))
              ) : (
                <Text style={styles.noLessons}>
                  No lessons available for this topic yet.
                </Text>
              )}
            </View>
          </View>
        )}
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
  introSection: {
    marginBottom: LAYOUT.spacing.lg,
  },
  introTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    color: COLORS.textPrimary,
    marginBottom: LAYOUT.spacing.sm,
  },
  introText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
  topicHeader: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginRight: LAYOUT.spacing.md,
  },
  topicTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: COLORS.textPrimary,
  },
  topicDescription: {
    marginBottom: LAYOUT.spacing.lg,
  },
  descriptionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
  lessonsList: {
    marginTop: LAYOUT.spacing.md,
  },
  lessonsTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: COLORS.textPrimary,
    marginBottom: LAYOUT.spacing.md,
  },
  noLessons: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: LAYOUT.spacing.xl,
  },
});