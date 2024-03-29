import { Platform } from 'react-native'

const HORIZONTAL_SPACING_BASE = Platform.OS === 'web' ? 4 : 2
const VERTICAL_SPACING_BASE = 4

const icons = {
  logo: require('../assets/images/logo.png'),
  userAvatar: require('../assets/icons/default-avatar.jpg'),
  backArrow: require('../assets/icons/arrow-back-icon.png'),
  menuHamburger: require('../assets/icons/menu-hamburger.png'),
  homeUnfilled: require('../assets/icons/home-unfilled.png'),
  homefilled: require('../assets/icons/home-filled.png'),
  home_android: require('../assets/icons/home-icon-24.png'),
  hashtagSymbol: require('../assets/icons/hashtag-symbol.png'),
  rightArrow: require('../assets/icons/right-arrow-angle.png'),
  search: require('../assets/icons/search.png'),
  magnifier: require('../assets/icons/magnifier.png'),
  commentUnfilled: require('../assets/icons/comment-unfilled.png'),
  commentFilled: require('../assets/icons/comment-filled.png'),
  friendsUnfilled: require('../assets/icons/friends-unfilled.png'),
  friendsFilled: require('../assets/icons/friends-filled.png'),
  profileUnfilled: require('../assets/icons/profile-unfilled.png'),
  profileFilled: require('../assets/icons/profile-filled.png'),
  camera: require('../assets/icons/camera.png'),
  cameraFilled: require('../assets/icons/camera-filled.png'),
  inscription: require('../assets/icons/inscription.png'),
  more: require('../assets/icons/more.png'),
  send: require('../assets/icons/send.png'),
  pinpoint: require('../assets/icons/pinpoint.png'),
  checked: require('../assets/icons/checked.png'),
  checkedRed: require('../assets/icons/checked-red.png'),
  bell: require('../assets/icons/bell.png'),
  surprised: require('../assets/icons/wow.png'),
  laugh: require('../assets/icons/crylaugh.png'),
  cry: require('../assets/icons/crying.png'),
  thumbsupUnfilled: require('../assets/icons/thumbsup-unfilled.png'),
  heartUnfilled: require('../assets/icons/heart-unfilled.png'),
  heartFilled: require('../assets/icons/filled-heart.png'),
  blueLike: require('../assets/icons/blue-like.png'),
  love: require('../assets/icons/red-heart.png'),
  angry: require('../assets/icons/anger.png'),
  share: require('../assets/icons/share.png'),
  add: require('../assets/icons/add.png'),
  cameraRotate: require('../assets/icons/camera-rotate.png'),
  videoCamera: require('../assets/icons/video-camera.png'),
  libraryLandscape: require('../assets/icons/library-landscape.png'),
  playButton: require('../assets/icons/play-button.png'),
  logout: require('../assets/icons/logout-drawer.png'),
  sound: require('../assets/icons/sound.png'),
  musicalNotes: require('../assets/icons/musical-notes.png'),
  soundMute: require('../assets/icons/sound_mute.png'),
  users_android: require('../assets/icons/users-icon-48.png'),
  user_android: require('../assets/icons/account-detail.png'),
  delete: require('../assets/icons/delete.png'),
  chat: require('../assets/images/chat.png'),
  file: require('../assets/images/file.png'),
  like: require('../assets/images/like.png'),
  notification: require('../assets/images/notification.png'),
  photo: require('../assets/images/photo.png'),
  pin: require('../assets/images/pin.png'),
}

const lightColors = {
  primaryBackground: '#4455EC',
  secondaryBackground: '#1A1A1A',
  primaryForeground: '#292929',
  secondaryForeground: '#8442bd',
  foregroundContrast: 'white',
  primaryText: '#1A1A1A',
  secondaryText: '#FFF',
  hairline: '#e0e0e0',
  grey0: '#fafafa',
  grey3: '#f5f5f5',
  grey6: '#d6d6d6',
  grey9: '#939393',
  red: '#ea0606',
}

const navContainerTheme = {
  dark: {
    colors: {
      primary: '#ffffff',
      background: '#4455EC',
      card: '#000000',
      text: '#ffffff',
      border: '#f5f5f5',
      notification: '#ea0606',
    },
    dark: true,
    light: false,
  },
  light: {
    colors: {
      primary: '#ffffff',
      background: '#864EFE',
      card: '#ffffff',
      text: '#000000',
      border: '#d6d6d6',
      notification: '#ea0606',
    },
    dark: false,
    light: true,
  },
}

const LyveTheme = {
  navContainerTheme,
  colors: {
    light: lightColors,
    'no-preference': lightColors,
    dark: {
      primaryBackground: '#121212',
      secondaryBackground: '#000000',
      primaryForeground: '#aaaaaa',
      secondaryForeground: '#8442bd',
      foregroundContrast: 'white',
      primaryText: '#dddddd',
      secondaryText: '#f5f5f5',
      hairline: '#222222',
      grey0: '#0a0a0a',
      grey3: '#2a2a2a',
      grey6: '#f5f5f5',
      grey9: '#eaeaea',
      red: '#ea0606',
    },
  },
  spaces: {
    horizontal: {
      s: 2 * HORIZONTAL_SPACING_BASE,
      m: 4 * HORIZONTAL_SPACING_BASE,
      l: 6 * HORIZONTAL_SPACING_BASE,
      xl: 8 * HORIZONTAL_SPACING_BASE,
    },
    vertical: {
      s: 2 * VERTICAL_SPACING_BASE,
      m: 4 * VERTICAL_SPACING_BASE,
      l: 6 * VERTICAL_SPACING_BASE,
      xl: 8 * VERTICAL_SPACING_BASE,
    },
  },
  fontSizes: {
    xxs: 8,
    xs: 12,
    s: 14,
    m: 16,
    l: 18,
    xl: 24,
    xxl: 32,
  },
  fontWeights: {
    s: '400',
    m: '600',
    l: '800',
  },
  icons: icons,
  // color, font size, space / margin / padding, vstack / hstack
  button: {
    borderRadius: 8,
  },
  webContainerStyle: {
    // backgroundColor: '#FFFFFF',
    maxWidth: 1024,
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
}

export default LyveTheme
