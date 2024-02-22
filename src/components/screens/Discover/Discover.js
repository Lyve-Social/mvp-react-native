import React, { useLayoutEffect } from 'react'
import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Video } from 'expo-av'
import { useTheme, EmptyStateView } from '../../../core/dopebase'
import dynamicStyles from './styles'

export default function Discover(props) {
  const { onCategoryPress, onCategoryItemPress, feed, emptyStateConfig } = props

  const navigation = useNavigation()

  const { theme, appearance } = useTheme()
  const styles = dynamicStyles(theme, appearance)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: theme.colors[appearance].primaryBackground,
      },
      headerTintColor: theme.colors[appearance].primaryText,
    })
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      {feed && feed.length > 0 && (
        <ScrollView style={styles.scrollContainer}>
          {feed.map((category, index) => (
            <View key={index.toString()} style={styles.categoryPrimary}>
              <View style={styles.categoryMain}>
                <View style={styles.categoryHashtagIcon}>
                  <Image
                    style={styles.icon}
                    source={theme.icons.hashtagSymbol}
                  />
                </View>
                <View style={styles.categoryDetail}>
                  <Text style={styles.categoryName}>{category.hashtag}</Text>
                  <Text style={styles.categoryDescription}>
                    {category.description ?? 'Trending'}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => onCategoryPress(category.videos)}
                  style={styles.categoryRightIcon}>
                  <Image style={styles.icon} source={theme.icons.rightArrow} />
                </TouchableOpacity>
              </View>
              <View style={styles.categoryVideo}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {category.videos.map((video, key) =>
                    video?.postMedia?.length < 1 ||
                    !video?.postMedia[0].url ? null : (
                      <TouchableOpacity
                        key={video.id ?? key}
                        onPress={() =>
                          onCategoryItemPress(category.videos, key)
                        }>
                        <Video
                          style={styles.video}
                          rate={1.0}
                          volume={1.0}
                          shouldPlay={false}
                          useNativeControls={false}
                          source={{ uri: video?.postMedia[0].url }}
                          resizeMode={'cover'}
                        />
                      </TouchableOpacity>
                    ),
                  )}
                </ScrollView>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
      {!feed ||
        (feed.length == 0 && (
          <EmptyStateView emptyStateConfig={emptyStateConfig} />
        ))}
    </SafeAreaView>
  )
}
