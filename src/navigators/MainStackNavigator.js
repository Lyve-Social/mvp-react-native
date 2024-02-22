import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNavigator from './BottomTabNavigator'
import { useTheme, useTranslations } from '../core/dopebase'
import {
  IMEditProfileScreen,
  IMUserSettingsScreen,
  IMContactUsScreen,
  IMProfileSettingsScreen,
  IMBlockedUsersScreen,
} from '../core/profile'
import { IMAllFriendsScreen } from '../core/socialgraph/friendships'
import { IMChatScreen, IMViewGroupMembersScreen } from '../core/chat'
import { IMNotificationScreen } from '../core/notifications'
import {
  CustomFeedScreen,
  CommentsScreen,
  ProfileScreen,
  HomeScreen,
  FeedSearchScreen,
  CameraScreen,
  NewPostScreen,
  SongPickerScreen,
} from '../screens'
// import { Camera, NewPost, ComposerSongs } from '../components';
import { InnerFriendsSearchNavigator } from './InnerStackNavigators'
import useNotificationOpenedApp from '../core/helpers/notificationOpenedApp'

const cardStyleInterpolator = ({ current, layouts }) => {
  return {
    cardStyle: {
      transform: [
        {
          translateY: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.height, 0],
          }),
        },
      ],
    },
  }
}

const MainStack = createStackNavigator()
const MainStackNavigator = () => {
  useNotificationOpenedApp()
  const { localized } = useTranslations()
  const { theme } = useTheme()

  return (
    <MainStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerBackTitle: localized('Back'),
        cardStyle: theme.webContainerStyle,
      }}
      initialRouteName="NavStack">
      <MainStack.Screen
        name="NavStack"
        options={{
          headerShown: false,
          cardStyle: {
            ...theme.webContainerStyle,
            maxWidth: '100%',
          },
        }}
        component={BottomTabNavigator}
      />
      <MainStack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerTintColor: '#fff',
        }}
        name="DiscoverFeed"
        component={HomeScreen}
      />
      <MainStack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerTintColor: '#fff',
        }}
        name="CustomFeedScreen"
        component={CustomFeedScreen}
      />
      <MainStack.Screen name="Comments" component={CommentsScreen} />
      <MainStack.Screen
        name="FeedSearch"
        component={FeedSearchScreen}
        options={{
          headerTitle: localized('Hashtags'),
        }}
      />
      <MainStack.Screen
        options={{
          headerTitle: null,
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <MainStack.Screen
        name="ProfileEditProfile"
        component={IMEditProfileScreen}
      />
      <MainStack.Screen
        name="ProfileAppSettings"
        component={IMUserSettingsScreen}
      />
      <MainStack.Screen
        name="ProfileSettings"
        component={IMProfileSettingsScreen}
      />
      <MainStack.Screen
        name="ProfileBlockedSettings"
        component={IMBlockedUsersScreen}
      />
      <MainStack.Screen name="ProfileContactUs" component={IMContactUsScreen} />
      <MainStack.Screen name="AllFriends" component={IMAllFriendsScreen} />
      <MainStack.Screen
        name="Friends"
        options={{ headerShown: false }}
        component={InnerFriendsSearchNavigator}
      />
      <MainStack.Screen
        name="Camera"
        options={{
          headerShown: false,
          cardStyleInterpolator,
          gestureDirection: 'vertical',
        }}
        component={CameraScreen}
      />
      <MainStack.Screen
        name="SongPicker"
        options={{
          headerShown: false,
          title: 'Sounds',
          cardStyleInterpolator,
          gestureDirection: 'vertical',
        }}
        component={SongPickerScreen}
      />
      <MainStack.Screen
        name="NewPost"
        options={{
          headerShown: false,
          cardStyleInterpolator,
          gestureDirection: 'vertical',
        }}
        component={NewPostScreen}
      />
      <MainStack.Screen name="PersonalChat" component={IMChatScreen} />
      <MainStack.Screen
        name="ViewGroupMembers"
        component={IMViewGroupMembersScreen}
      />
      <MainStack.Screen name="Notification" component={IMNotificationScreen} />
      <MainStack.Screen name="ContactUs" component={IMContactUsScreen} />
    </MainStack.Navigator>
  )
}

export default MainStackNavigator
