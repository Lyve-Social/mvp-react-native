import { StyleSheet } from 'react-native'

const dynamicStyles = (theme, appearance) => {
  const colorSet = theme.colors[appearance]
  return StyleSheet.create({
    tabBarContainer: {
      backgroundColor: colorSet.primaryBackground,
      flexDirection: 'row',
      borderTopWidth: 0.5,
      borderTopColor: colorSet.hairline,
    },
    tabContainer: {
      backgroundColor: colorSet.primaryBackground,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabIcon: {
      width: 25,
      height: 25,
    },
    focusTintColor: {
      tintColor: colorSet.primaryForeground,
    },
    unFocusTintColor: {
      tintColor: colorSet.secondaryText,
    },
  })
}

export default dynamicStyles
