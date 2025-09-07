import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '@/styles/colors';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onFiltersClick: () => void;
}

export const SearchBar = ({ searchTerm, onSearchChange, onFiltersClick }: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color={colors.white} style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          value={searchTerm}
          onChangeText={onSearchChange}
        />
      </View>
      <TouchableOpacity style={styles.filterButton} onPress={onFiltersClick}>
        <Icon name="sliders" size={20} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceOverlay,
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 56,
  },
  searchIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: colors.white,
    fontSize: 16,
    fontWeight: '400',
  },
  filterButton: {
    width: 56,
    height: 56,
    backgroundColor: colors.surfaceOverlay,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});