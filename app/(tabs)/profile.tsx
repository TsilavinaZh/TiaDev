import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { LAYOUT } from '@/constants/Layout';
import { Award, BookOpen, Heart, Clock, Star } from 'lucide-react-native';

export default function AboutScreen() {
  const aboutStats = [
    { icon: <BookOpen size={18} color={COLORS.primary} />, label: 'Cours Disponibles', value: '40+' },
    { icon: <Award size={18} color={COLORS.accent} />, label: 'Modules Certifiants', value: '12' },
    { icon: <Clock size={18} color={COLORS.secondary} />, label: 'Durée moyenne', value: '3 mois' },
    { icon: <Heart size={18} color={COLORS.error} />, label: 'Étudiants Actifs', value: '500+' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.info}>
            <Text style={styles.appName}>TiaDev </Text>
            <Text style={styles.appTagline}>Apprenez à coder, structurez votre pensée</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>À propos</Text>
          <Text style={styles.description}>
            <Text style={{ fontWeight: 'bold' }}>TiaDev</Text> est une application éducative conçue pour accompagner les débutants 
            et les passionnés dans leur parcours d’apprentissage des bases de la programmation 
            et des structures de données. Elle a été pensée pour offrir un apprentissage progressif, interactif et accessible à tous.
          </Text>
          <View style={styles.statsRow}>
            {aboutStats.map((stat, index) => (
              <View key={index} style={styles.statItem}>
                <View style={styles.statIcon}>{stat.icon}</View>
                <View>
                  <Text style={styles.statValue}>{stat.value}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notre Mission</Text>
          <Text style={styles.description}>
            Démocratiser l’accès aux compétences techniques essentielles en rendant l’apprentissage 
            de la programmation et des structures de données à la fois engageant, pratique et compréhensible.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nos Valeurs</Text>
          <Text style={styles.description}>
            Accessibilité{"\n"}Rigueur Pédagogique{"\n"}Curiosité{"\n"}Progrès Continu
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pourquoi cette application ?</Text>
          <Text style={styles.description}>
            L’apprentissage des structures de données et des algorithmes est fondamental pour tout développeur. 
            Cette application fournit une base solide à travers des cours interactifs, des défis codés, 
            et des projets pratiques.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Citation Inspirante</Text>
          <Text style={[styles.description, { fontStyle: 'italic' }]}>
            "Un bon programmeur est quelqu’un qui regarde des deux côtés avant de traverser une rue à sens unique." – Doug Linder
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.description}>
            Email : tsilavinazh@gmail.com{"\n"}
            LinkedIn : linkedin.com/in/tsilavinazh{"\n"}
            GitHub : github.com/TsilavinaZh{"\n"}
            Téléphone : +261 34 12 345 67
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Remerciements</Text>
          <Text style={styles.description}>
            Merci à toutes les communautés open source et éducatives qui rendent l’apprentissage du code plus accessible et humain.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}


// Styles identiques au fichier d’origine
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingTop: 60,
    paddingBottom: LAYOUT.spacing.lg,
    paddingHorizontal: LAYOUT.spacing.lg,
    alignItems: 'center',
  },
  headerContent: {
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: LAYOUT.borderRadius.full,
    marginBottom: LAYOUT.spacing.md,
  },
  info: {
    alignItems: 'center',
  },
  appName: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  appTagline: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: LAYOUT.spacing.lg,
    paddingBottom: LAYOUT.spacing.xl,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: COLORS.textPrimary,
    marginBottom: LAYOUT.spacing.md,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: LAYOUT.spacing.lg,
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 12,
  },
  statIcon: {
    width: 32,
    height: 32,
    borderRadius: LAYOUT.borderRadius.sm,
    backgroundColor: COLORS.card,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: LAYOUT.spacing.xs,
  },
  statValue: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: COLORS.textPrimary,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    color: COLORS.textSecondary,
  },
});
