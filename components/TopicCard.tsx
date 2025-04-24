import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { Code, Atom as AtomIcon, FolderTree, BrainCircuit, Terminal, Globe, Disc, CircleAlert as AlertCircle } from 'lucide-react-native';
import { COLORS, SHADOWS } from '@/constants/Colors';
import { LAYOUT } from '@/constants/Layout';
import { Topic } from '@/types/course';
import Animated, { FadeInUp } from 'react-native-reanimated';

interface TopicCardProps {
  topic: Topic;
  index: number;
  onPress: (topic: Topic) => void;
}

export default function TopicCard({ topic, index, onPress }: TopicCardProps) {
  const getIcon = (iconName: string) => {
    const iconProps = { size: 28, color: topic.color };
    
    switch (iconName) {
      case 'code':
        return <Code {...iconProps} />;
      case 'atom':
        return <AtomIcon {...iconProps} />;
      case 'folder-tree':
        return <FolderTree {...iconProps} />;
      case 'brain-circuit':
        return <BrainCircuit {...iconProps} />;
      case 'terminal':
        return <Terminal {...iconProps} />;
      case 'globe':
        return <Globe {...iconProps} />;
      default:
        return <AlertCircle {...iconProps} />;
    }
  };

  return (
    <Animated.View
      entering={FadeInUp.delay(index * 100).duration(400)}
      style={styles.container}
    >
      <TouchableOpacity
        style={[styles.card, { borderLeftColor: topic.color }]}
        activeOpacity={0.7}
        onPress={() => onPress(topic)}
      >
        <View style={styles.iconContainer}>
          {getIcon(topic.icon)}
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{topic.title}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {topic.description}
          </Text>
        </View>
        {/* <View style={[styles.progressBar, { backgroundColor: `${topic.color}20` }]}>
          <View style={[styles.progressIndicator, { width: '30%', backgroundColor: topic.color }]} />
        </View> */}
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
    alignItems: 'center',
    backgroundColor: COLORS.background,
    borderRadius: LAYOUT.borderRadius.md,
    padding: LAYOUT.spacing.md,
    borderLeftWidth: 4,
    ...SHADOWS.medium,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: LAYOUT.borderRadius.md,
    backgroundColor: COLORS.card,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: LAYOUT.spacing.md,
  },
  content: {
    flex: 1,
    marginRight: LAYOUT.spacing.sm,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  progressBar: {
    height: 4,
    width: '100%',
    borderRadius: LAYOUT.borderRadius.full,
    marginTop: LAYOUT.spacing.sm,
  },
  progressIndicator: {
    height: 4,
    borderRadius: LAYOUT.borderRadius.full,
  },
});