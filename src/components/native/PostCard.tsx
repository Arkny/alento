import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '@/styles/colors';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  source?: string;
  tags: string[];
}

interface PostCardProps {
  post: Post;
  onPress: () => void;
}

export const PostCard = ({ post, onPress }: PostCardProps) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{post.category}</Text>
          </View>
          {post.source && (
            <Icon name="external-link" size={16} color={colors.muted} />
          )}
        </View>
        
        <Text style={styles.title} numberOfLines={2}>
          {post.title}
        </Text>
        
        <Text style={styles.excerpt} numberOfLines={3}>
          {post.excerpt}
        </Text>
        
        <View style={styles.footer}>
          <Text style={styles.author}>{post.author}</Text>
          <Text style={styles.date}>{post.date}</Text>
        </View>
        
        {post.tags.length > 0 && (
          <View style={styles.tagsContainer}>
            {post.tags.slice(0, 3).map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surfaceElevated,
    borderRadius: 24,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
    marginBottom: 16,
  },
  content: {
    padding: 20,
  },
  header: {
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
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 12,
    lineHeight: 24,
  },
  excerpt: {
    fontSize: 14,
    color: colors.muted,
    marginBottom: 16,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  author: {
    fontSize: 12,
    color: colors.muted,
  },
  date: {
    fontSize: 12,
    color: colors.muted,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
    gap: 8,
  },
  tag: {
    backgroundColor: colors.background,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 10,
    color: colors.muted,
  },
});