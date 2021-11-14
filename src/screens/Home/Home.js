import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import { BackupButton, Button } from '../../components';
import { color } from '../../theme';
import { wordPhrases } from '../../mockup';
import { scaleW } from '../../utils';

export const Home = () => {
  const { width } = useWindowDimensions();
  const buttonWidth = (width - 16 * 2) / 2 - 8;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <View style={styles.header}>
          <Text
            style={styles.headerTitleText}
            // numberOfLines={1}
            adjustsFontSizeToFit={true}>
            please save your 12-word pass phrase
          </Text>
          <Text style={styles.headerSubTitleText}>
            and keep it in a secure location
          </Text>
          <Text style={styles.headerSubTitleText}>
            so you can recover your wallet anytime
          </Text>
        </View>
        <FlatList
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={wordPhrases}
          keyExtractor={item => item.toString()}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item, index }) => (
            <BackupButton width={buttonWidth} order={index + 1} text={item} />
          )}
        />
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.linkText}>Copy all to clipboard</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>Send me a backup email</Text>
          </TouchableOpacity>
          <View style={styles.doneButtonWrapper}>
            <Button text="DONE" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 70,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  headerTitleText: {
    fontSize: scaleW(16),
    fontWeight: '700',
    lineHeight: scaleW(22),
    textAlign: 'center',
  },
  headerSubTitleText: {
    fontSize: scaleW(16),
    lineHeight: scaleW(22),
    textAlign: 'center',
  },
  listContainer: {
    paddingVertical: 18,
  },
  footer: {
    justifyContent: 'flex-end',
    paddingBottom: 16,
  },
  linkText: {
    color: color.primary,
    fontSize: scaleW(15),
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginVertical: 16,
  },
  doneButtonWrapper: {
    marginTop: 24,
  },
});
