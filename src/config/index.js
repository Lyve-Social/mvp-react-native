import React, { useContext } from 'react'
import { Platform } from 'react-native'
import { useTheme, useTranslations } from '../core/dopebase'

const regexForNames = /^[a-zA-Z]{2,25}$/
const regexForPhoneNumber = /\d{9}$/

export const ConfigContext = React.createContext({})

export const ConfigProvider = ({ children }) => {
  const { theme } = useTheme()
  const { localized } = useTranslations()
  const config = {
    isSMSAuthEnabled: true,
    isGoogleAuthEnabled: true,
    isAppleAuthEnabled: true,
    isFacebookAuthEnabled: true,
    forgotPasswordEnabled: true,
    appIdentifier: `rn-tik-tok-${Platform.OS}`,
    facebookIdentifier: '285315185217069',
    webClientId:
      '525472070731-mg8m3q8v9vp1port7nkbq9le65hp917t.apps.googleusercontent.com',
    expoClientId:
      '1099201876026-almgdid9mhj3utt9rqhmhpp2vv6j9kch.apps.googleusercontent.com',
    videoMaxDuration: 15,
    onboardingConfig: {
      welcomeTitle: localized('Welcome to Lyve!'),
      walkthroughScreens: [
        {
          icon: require('../assets/images/photo.png'),
          title: localized('Lyve Videos'),
          description: localized(
            'Compose videos with with friends at meetups.',
          ),
        },
        {
          icon: require('../assets/images/file.png'),
          title: localized('Watch'),
          description: localized('See what your friends are up to.'),
        },
        {
          icon: require('../assets/images/like.png'),
          title: localized('Likes'),
          description: localized('Encourage your friends to socialize'),
        },
        {
          icon: require('../assets/images/chat.png'),
          title: localized('Chat'),
          description: localized(
            'Communicate with your friends via private messages.',
          ),
        },
        {
          icon: require('../assets/icons/friends-unfilled.png'),
          title: localized('Group Chats'),
          description: localized('Have fun with your gang in group chats.'),
        },
        {
          icon: require('../assets/images/instagram.png'),
          title: localized('Send Photos & Videos'),
          description: localized(
            'Have fun with your connections by sending photos and videos to each other.',
          ),
        },
        {
          icon: require('../assets/images/notification.png'),
          title: localized('Get Notified'),
          description: localized(
            'Receive notifications when you get new messages.',
          ),
        },
      ],
    },
    tabIcons: {
      Feed: {
        focus: theme.icons.homefilled,
        unFocus: theme.icons.homeUnfilled,
      },
      Discover: {
        focus: theme.icons.search,
        unFocus: theme.icons.search,
      },
      Inbox: {
        focus: theme.icons.commentFilled,
        unFocus: theme.icons.commentUnfilled,
      },
      Friends: {
        focus: theme.icons.friendsFilled,
        unFocus: theme.icons.friendsUnfilled,
      },
      Profile: {
        focus: theme.icons.profileFilled,
        unFocus: theme.icons.profileUnfilled,
      },
    },
    drawerMenu: {
      upperMenu: [
        {
          title: localized('Home'),
          icon: theme.icons.homeUnfilled,
          navigationPath: 'Feed',
        },
        {
          title: localized('Discover'),
          icon: theme.icons.search,
          navigationPath: 'Discover',
        },
        {
          title: localized('Chat'),
          icon: theme.icons.commentUnfilled,
          navigationPath: 'Chat',
        },
        {
          title: localized('Friends'),
          icon: theme.icons.friendsUnfilled,
          navigationPath: 'Friends',
        },
        {
          title: localized('Profile'),
          icon: theme.icons.search,
          navigationPath: 'Profile',
        },
      ],
      lowerMenu: [
        {
          title: localized('Logout'),
          icon: theme.icons.logout,
          action: 'logout',
        },
      ],
    },
    tosLink: 'Terms and conditions go here',
    isUsernameFieldEnabled: true,
    smsSignupFields: [
      {
        displayName: localized('First Name'),
        type: 'ascii-capable',
        editable: true,
        regex: regexForNames,
        key: 'firstName',
        placeholder: 'First Name',
      },
      {
        displayName: localized('Last Name'),
        type: 'ascii-capable',
        editable: true,
        regex: regexForNames,
        key: 'lastName',
        placeholder: 'Last Name',
      },
      {
        displayName: localized('Username'),
        type: 'default',
        editable: true,
        regex: regexForNames,
        key: 'username',
        placeholder: 'Username',
        autoCapitalize: 'none',
      },
    ],
    signupFields: [
      {
        displayName: localized('First Name'),
        type: 'ascii-capable',
        editable: true,
        regex: regexForNames,
        key: 'firstName',
        placeholder: 'First Name',
      },
      {
        displayName: localized('Last Name'),
        type: 'ascii-capable',
        editable: true,
        regex: regexForNames,
        key: 'lastName',
        placeholder: 'Last Name',
      },
      {
        displayName: localized('Username'),
        type: 'default',
        editable: true,
        regex: regexForNames,
        key: 'username',
        placeholder: 'Username',
        autoCapitalize: 'none',
      },
      {
        displayName: localized('E-mail Address'),
        type: 'email-address',
        editable: true,
        regex: regexForNames,
        key: 'email',
        placeholder: 'E-mail Address',
        autoCapitalize: 'none',
      },
      {
        displayName: localized('Password'),
        type: 'default',
        secureTextEntry: true,
        editable: true,
        regex: regexForNames,
        key: 'password',
        placeholder: 'Password',
        autoCapitalize: 'none',
      },
    ],
    editProfileFields: {
      sections: [
        {
          title: localized('PUBLIC PROFILE'),
          fields: [
            {
              displayName: localized('First Name'),
              type: 'text',
              editable: true,
              regex: regexForNames,
              key: 'firstName',
              placeholder: 'Your first name',
            },
            {
              displayName: localized('Last Name'),
              type: 'text',
              editable: true,
              regex: regexForNames,
              key: 'lastName',
              placeholder: 'Your last name',
            },
            {
              displayName: localized('Username'),
              type: 'text',
              editable: false,
              regex: regexForNames,
              key: 'username',
              placeholder: 'Your username',
            },
          ],
        },
        {
          title: localized('PRIVATE DETAILS'),
          fields: [
            {
              displayName: localized('E-mail Address'),
              type: 'text',
              editable: true,
              key: 'email',
              placeholder: 'Your email address',
            },
            {
              displayName: localized('Phone Number'),
              type: 'text',
              editable: true,
              regex: regexForPhoneNumber,
              key: 'phone',
              placeholder: 'Your phone number',
            },
          ],
        },
      ],
    },
    userSettingsFields: {
      sections: [
        {
          title: localized('GENERAL'),
          fields: [
            {
              displayName: localized('Allow Push Notifications'),
              type: 'switch',
              editable: true,
              key: 'push_notifications_enabled',
              value: true,
            },
            {
              ...(Platform.OS === 'ios'
                ? {
                    displayName: localized('Enable Face ID / Touch ID'),
                    type: 'switch',
                    editable: true,
                    key: 'face_id_enabled',
                    value: false,
                  }
                : {}),
            },
          ],
        },
        {
          title: localized('Feed'),
          fields: [
            {
              displayName: localized('Autoplay Videos'),
              type: 'switch',
              editable: true,
              key: 'autoplay_video_enabled',
              value: true,
            },
            {
              displayName: localized('Always Mute Videos'),
              type: 'switch',
              editable: true,
              key: 'mute_video_enabled',
              value: true,
            },
          ],
        },
        {
          title: '',
          fields: [
            {
              displayName: localized('Save'),
              type: 'button',
              key: 'savebutton',
            },
          ],
        },
      ],
    },
    contactUsFields: {
      sections: [
        {
          title: localized('CONTACT'),
          fields: [
            {
              displayName: localized('Address'),
              type: 'text',
              editable: false,
              key: 'push_notifications_enabled',
              value: 'Sydney, Australia',
            },
            {
              displayName: localized('E-mail us'),
              value: 'jatin.waichal@gmail.com',
              type: 'text',
              editable: false,
              key: 'email',
              placeholder: 'Your email address',
            },
          ],
        },
        {
          title: '',
          fields: [
            {
              displayName: localized('Call Us'),
              type: 'button',
              key: 'savebutton',
            },
          ],
        },
      ],
    },
    contactUsPhoneNumber: '+61451 250 725',
    adsConfig: {
      facebookAdsPlacementID:
        Platform.OS === 'ios'
          ? '834318260403282_834914470343661'
          : '834318260403282_834390467062728',
      adSlotInjectionInterval: 10,
    },
  }

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  )
}

export const useConfig = () => useContext(ConfigContext)
