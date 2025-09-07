import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { colors } from '@/styles/colors';

export interface Category {
  id: string;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.categoryButton,
            activeCategory === category.id ? styles.activeButton : styles.inactiveButton
          ]}
          onPress={() => onCategoryChange(category.id)}
        >
          <Text style={[
            styles.categoryText,
            activeCategory === category.id ? styles.activeText : styles.inactiveText
          ]}>
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  contentContainer: {
    paddingHorizontal: 4,
    gap: 12,
  },
  categoryButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 12,
  },
  activeButton: {
    backgroundColor: colors.filterActive,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  inactiveButton: {
    backgroundColor: colors.filterInactive,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
  },
  activeText: {
    color: colors.white,
  },
  inactiveText: {
    color: colors.white,
  },
});