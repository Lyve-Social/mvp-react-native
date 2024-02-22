import React, { useCallback, useLayoutEffect, useState } from 'react'
import { BackHandler } from 'react-native'
import { useDispatch } from 'react-redux'
import { useFocusEffect } from '@react-navigation/core'
import { useTheme, useTranslations } from '../../../dopebase'
import { setUserData } from '../../../onboarding/redux/auth'
import { updateUser } from '../../../users'
import IMFormComponent from '../IMFormComponent/IMFormComponent'
import { useCurrentUser } from '../../../onboarding'

export default function IMUserSettingsScreen(props) {
  const { navigation, route } = props
  let screenTitle = route.params.screenTitle || localized('Settings')

  const { localized } = useTranslations()
  const { theme, appearance } = useTheme()
  const currentUser = useCurrentUser()
  const dispatch = useDispatch()

  const form = route.params.form
  const initialValuesDict = currentUser.settings || {}

  // const [form] = useState(props.form);
  const [alteredFormDict, setAlteredFormDict] = useState({})

  useLayoutEffect(() => {
    const colorSet = theme.colors[appearance]
    navigation.setOptions({
      headerTitle: screenTitle,
      headerStyle: {
        backgroundColor: colorSet.primaryBackground,
      },
      headerTintColor: colorSet.primaryText,
    })
  }, [])

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener(
        'hardwareBackPress',
        onBackButtonPressAndroid,
      )
      return () => {
        BackHandler.removeEventListener(
          'hardwareBackPress',
          onBackButtonPressAndroid,
        )
      }
    }, []),
  )

  const onBackButtonPressAndroid = () => {
    navigation.goBack()
    return true
  }

  const onFormSubmit = () => {
    var newSettings = currentUser.settings || {}

    form.sections.forEach(section => {
      section.fields.forEach(field => {
        const newValue = alteredFormDict[field.key]
        if (newValue != null) {
          newSettings[field.key] = alteredFormDict[field.key]
        }
      })
    })

    let newUser = { ...currentUser, settings: newSettings }
    updateUser(currentUser.id, newUser)
    dispatch(setUserData({ user: newUser }))
    navigation.goBack()
  }

  const onFormChange = alteredFormDict => {
    setAlteredFormDict(alteredFormDict)
  }

  const onFormButtonPress = buttonField => {
    onFormSubmit()
  }

  return (
    <IMFormComponent
      form={form}
      initialValuesDict={initialValuesDict}
      onFormChange={onFormChange}
      navigation={navigation}
      onFormButtonPress={onFormButtonPress}
    />
  )
}
