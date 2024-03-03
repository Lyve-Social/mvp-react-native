import { StyleSheet } from 'react-native'

const dynamicStyles = (theme, appearance) => {
  return StyleSheet.create({
    tabContainer: {
      position: 'absolute',
      bottom: 0,
      height: 90,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTopWidth: 0.2,
      borderTopColor: appearance === 'dark' ? '#fff' : '#000',
      backgroundColor: theme.colors[appearance].primaryBackground,
      width: '100%',
      maxWidth: 1024,
      alignSelf: 'center',
    },
    buttonContainer: {
      width: '20%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16,
    },
    title: {
      fontSize: 10,
      color: theme.colors[appearance].primaryText,
      paddingTop: 2,
    },
    addContainer: {
      width: '70%',
      padding: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      backgroundColor: '#D9D9D9',
    },
    icon: {
      height: 28,
      width: 28,
    },
    addIcon: {
      height: 18,
      width: 18,
      tintColor: '#000',
      fontWeight: 700
    },
    focusTintColor: {
      tintColor: '#000',
      // tintColor: '#f5f5f5',
    },
    unFocusTintColor: {
      // tintColor: '#fff',
      tintColor: appearance === 'dark' ? 'lightgrey' : 'grey',
    },
  })
}

export default dynamicStyles
