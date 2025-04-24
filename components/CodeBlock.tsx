import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Check, Copy } from 'lucide-react-native';
import { COLORS } from '@/constants/Colors';
import { LAYOUT } from '@/constants/Layout';
import Animated, { FadeIn } from 'react-native-reanimated';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    if (Platform.OS === 'web') {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  return (
    <Animated.View 
      entering={FadeIn.duration(400)}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.language}>{language}</Text>
        <TouchableOpacity 
          style={styles.copyButton} 
          onPress={handleCopy}
          activeOpacity={0.7}
        >
          {copied ? (
            <Check size={16} color={COLORS.accent} />
          ) : (
            <Copy size={16} color={COLORS.textSecondary} />
          )}
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.codeScrollView}
      >
        <ScrollView 
          style={styles.codeContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.code}>{code}</Text>
        </ScrollView>
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: LAYOUT.spacing.md,
    borderRadius: LAYOUT.borderRadius.md,
    overflow: 'hidden',
    backgroundColor: '#1E293B', // Dark blue background
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
      web: {
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      },
    }),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: LAYOUT.spacing.sm,
    backgroundColor: '#0F172A', // Darker blue for header
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  language: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#94A3B8',
  },
  copyButton: {
    padding: 4,
  },
  codeScrollView: {
    maxHeight: 300,
  },
  codeContainer: {
    padding: LAYOUT.spacing.md,
  },
  code: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : Platform.OS === 'android' ? 'monospace' : 'Courier New',
    fontSize: 14,
    color: '#E2E8F0',
    lineHeight: 20,
  },
});