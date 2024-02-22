import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { Audio } from 'expo-av'
import { OnboardingConfigProvider } from './core/onboarding/hooks/useOnboardingConfig'
import AppContainer from './screens/AppContainer'
import { useConfig } from './config'
import { ProfileConfigProvider } from './core/profile/hooks/useProfileConfig'

const MainNavigator =
    AppContainer
WebBrowser.maybeCompleteAuthSession()

const AppContent = () => {
  const config = useConfig()

  useEffect(() => {
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      playsInSilentLockedModeIOS: true,
      shouldDuckAndroid: true,
    })
  }, [])

  return (
    <ActionSheetProvider>
      <ProfileConfigProvider config={config}>
        <OnboardingConfigProvider config={config}>
          <StatusBar />
          <MainNavigator />
        </OnboardingConfigProvider>
      </ProfileConfigProvider>
    </ActionSheetProvider>
  )
}

export default AppContent
