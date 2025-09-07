import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '@/styles/colors';
import { Post } from './PostCard';

interface PostModalProps {
  post: Post | null;
  visible: boolean;
  onClose: () => void;
}

export const PostModal = ({ post, visible, onClose }: PostModalProps) => {
  if (!post) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{post.category}</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Icon name="x" size={24} color={colors.primary} />
            </TouchableOpacity>
          </View>
          
          {post.source && (
            <View style={styles.sourceContainer}>
              <Icon name="external-link" size={16} color={colors.muted} />
              <Text style={styles.sourceText}>{post.source}</Text>
            </View>
          )}
          
          <Text style={styles.title}>{post.title}</Text>
          
          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <Icon name="user" size={16} color={colors.muted} />
              <Text style={styles.metaText}>{post.author}</Text>
            </View>
            <View style={styles.metaItem}>
              <Icon name="calendar" size={16} color={colors.muted} />
              <Text style={styles.metaText}>{post.date}</Text>
            </View>
          </View>
        </View>
        
        <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.excerpt}>{post.excerpt}</Text>
          <Text style={styles.content}>{post.content}</Text>
          
          {post.tags.length > 0 && (
            <View style={styles.tagsSection}>
              <Text style={styles.tagsTitle}>Tags:</Text>
              <View style={styles.tagsContainer}>
                {post.tags.map((tag, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surfaceElevated,
  },
  header: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  badge: {
    backgroundColor: colors.primaryBadge,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  badgeText: {
    color: colors.primaryBadgeText,
    fontSize: 12,
    fontWeight: '500',
  },
  closeButton: {
    padding: 4,
  },
  sourceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  sourceText: {
    fontSize: 14,
    color: colors.muted,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 16,
    lineHeight: 32,
  },
  metaContainer: {
    flexDirection: 'row',
    gap: 24,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  metaText: {
    fontSize: 14,
    color: colors.muted,
  },
  scrollContent: {
    flex: 1,
    padding: 24,
  },
  excerpt: {
    fontSize: 18,
    color: colors.muted,
    marginBottom: 24,
    lineHeight: 26,
  },
  content: {
    fontSize: 16,
    color: colors.primary,
    lineHeight: 24,
    marginBottom: 32,
  },
  tagsSection: {
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: colors.background,
  },
  tagsTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.muted,
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: colors.background,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 12,
    color: colors.muted,
  },
});