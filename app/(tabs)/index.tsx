import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image,Platform  } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { LAYOUT } from '@/constants/Layout';
import HeaderBar from '@/components/HeaderBar';
import TopicCard from '@/components/TopicCard';
import { Topic } from '@/types/course';
import { topics } from '@/data/topics';
import { useRouter } from 'expo-router';
import { BookOpen, Dumbbell, TrendingUp, Bookmark } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import ProgressBar from '@/components/ProgressBar';

export default function HomeScreen() {
  const router = useRouter();
  const [continueData] = useState([
    {
      id: 'js-arrays',
      title: 'JavaScript Arrays',
      progress: 0.6,
      color: COLORS.primary,
    },
    {
      id: 'react-hooks',
      title: 'React Hooks',
      progress: 0.3,
      color: '#61DAFB',
    },
  ]);
  
  const handleTopicPress = (topic: Topic) => {
    router.push(`/learn?topicId=${topic.id}`);
  };
  
  const handleContinueLearningPress = (item: any) => {
    router.push(`/learn?lessonId=${item.id}`);
  };
  
  return (
    <View style={styles.container}>
      <HeaderBar title="TiaDev" />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.greeting}>Hello, Developer 👋</Text>
          <Text style={styles.welcomeMessage}>Ready to continue your learning journey?</Text>
          
          <Animated.View 
            entering={FadeInDown.duration(400).delay(200)}
            style={styles.progressSection}
          >
            <View style={styles.progressHeader}>
              <Text style={styles.progressTitle}>Your Progress</Text>
              <Text style={styles.streakText}>🔥 5 day streak</Text>
            </View>
            
            <View style={styles.overallProgress}>
              <ProgressBar 
                progress={0.42} 
                height={10} 
                color={COLORS.accent}
                showPercentage 
              />
            </View>
          </Animated.View>
        </View>
        
        {/* Continue Learning Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Continue Learning</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.continueScrollView}
          >
            {continueData.map((item, index) => (
              <Animated.View
                key={item.id}
                entering={FadeInDown.delay(300 + index * 100)}
              >
                <TouchableOpacity
                  style={styles.continueCard}
                  activeOpacity={0.7}
                  onPress={() => handleContinueLearningPress(item)}
                >
                  <View style={[styles.continueIconContainer, { backgroundColor: `${item.color}20` }]}>
                    <BookOpen size={24} color={item.color} />
                  </View>
                  <Text style={styles.continueTitle}>{item.title}</Text>
                  <View style={styles.continueProgress}>
                    <ProgressBar progress={item.progress} color={item.color} />
                  </View>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </ScrollView>
        </View>
        
        {/* Quick Links */}
        <Animated.View
          entering={FadeInDown.delay(500)}
          style={styles.quickLinks}
        >
          <TouchableOpacity style={styles.quickLink} activeOpacity={0.7} onPress={() => router.push('/learn')}>
            <View style={[styles.quickLinkIcon, { backgroundColor: `${COLORS.primary}20` }]}>
              <BookOpen size={22} color={COLORS.primary} />
            </View>
            <Text style={styles.quickLinkText}>Lessons</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.quickLink} activeOpacity={0.7} onPress={() => router.push('/practice')}>
            <View style={[styles.quickLinkIcon, { backgroundColor: `${COLORS.secondary}20` }]}>
              <Dumbbell size={22} color={COLORS.secondary} />
            </View>
            <Text style={styles.quickLinkText}>Practice</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.quickLink} activeOpacity={0.7}>
            <View style={[styles.quickLinkIcon, { backgroundColor: `${COLORS.accent}20` }]}>
              <TrendingUp size={22} color={COLORS.accent} />
            </View>
            <Text style={styles.quickLinkText}>Progress</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.quickLink} activeOpacity={0.7}>
            <View style={[styles.quickLinkIcon, { backgroundColor: `${COLORS.warning}20` }]}>
              <Bookmark size={22} color={COLORS.warning} />
            </View>
            <Text style={styles.quickLinkText}>Saved</Text>
          </TouchableOpacity>
        </Animated.View>
        
        {/* Topics Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Explore Topics</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          {topics.map((topic, index) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              index={index}
              onPress={handleTopicPress}
            />
          ))}
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
  welcomeSection: {
    paddingHorizontal: LAYOUT.spacing.lg,
    paddingTop: LAYOUT.spacing.md,
    paddingBottom: LAYOUT.spacing.md,
  },
  greeting: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  welcomeMessage: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: LAYOUT.spacing.md,
  },
  progressSection: {
    marginTop: LAYOUT.spacing.sm,
    backgroundColor: COLORS.card,
    borderRadius: LAYOUT.borderRadius.md,
    padding: LAYOUT.spacing.md,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: LAYOUT.spacing.sm,
  },
  progressTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  streakText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  overallProgress: {
    marginTop: LAYOUT.spacing.xs,
  },
  section: {
    paddingHorizontal: LAYOUT.spacing.lg,
    paddingTop: LAYOUT.spacing.lg,
    paddingBottom: LAYOUT.spacing.sm,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: LAYOUT.spacing.md,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: COLORS.textPrimary,
  },
  seeAllText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: COLORS.primary,
  },
  continueScrollView: {
    marginLeft: -LAYOUT.spacing.lg,
    paddingLeft: LAYOUT.spacing.lg,
    paddingRight: LAYOUT.spacing.sm,
    marginBottom: LAYOUT.spacing.md,
  },
  continueCard: {
    width: 170,
    height: 130,
    backgroundColor: COLORS.background,
    borderRadius: LAYOUT.borderRadius.md,
    padding: LAYOUT.spacing.md,
    marginRight: LAYOUT.spacing.md,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  continueIconContainer: {
    width: 44,
    height: 44,
    borderRadius: LAYOUT.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: LAYOUT.spacing.sm,
  },
  continueTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: COLORS.textPrimary,
    marginBottom: LAYOUT.spacing.md,
  },
  continueProgress: {
    marginTop: 'auto',
  },
  quickLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: LAYOUT.spacing.lg,
    marginVertical: LAYOUT.spacing.md,
  },
  quickLink: {
    alignItems: 'center',
    width: '23%',
  },
  quickLinkIcon: {
    width: 44,
    height: 44,
    borderRadius: LAYOUT.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  quickLinkText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});