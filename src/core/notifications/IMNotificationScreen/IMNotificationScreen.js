import React, { useEffect, useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTheme, useTranslations } from '../../dopebase'
import IMNotification from '../Notification/IMNotification'
import {
  subscribeNotifications,
  updateNotification,
} from '../../notifications/firebase/notification'
import { getPost } from '../../socialgraph/feed/api'
import { setNotifications } from '../redux'
import { useCurrentUser } from '../../onboarding'

const IMNotificationScreen = props => {
  const { localized } = useTranslations()
  const { theme, appearance } = useTheme()

  const user = useCurrentUser()
  const notifications = useSelector(state => state.notifications.notifications)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    const colorSet = theme.colors[appearance]
    props.navigation.setOptions({
      headerTitle: localized('Notifications'),
      headerStyle: {
        backgroundColor: colorSet.primaryBackground,
        borderBottomColor: colorSet.hairline,
      },
      headerTintColor: colorSet.primaryText,
    })
  }, [dispatch])

  useEffect(() => {
    const notificationUnsubscribe = subscribeNotifications(
      user.id,
      onNotificationCollection,
    )

    return () => {
      notificationUnsubscribe()
    }
  }, [])

  const onNotificationCollection = notifications => {
    dispatch(setNotifications(notifications))
  }

  const onNotificationPress = async notification => {
    updateNotification({
      ...notification,
      seen: true,
    })

    const res = await getPost(notification.id)
    if (res.error) {
      alert(res.error)
    }

    if (res.success) {
      const lastScreenTitle = props.route.params.lastScreenTitle
        ? props.route.params.lastScreenTitle
        : 'Profile'

      if (res?.data?.id) {
        props.navigation.navigate(lastScreenTitle + 'SinglePostNavigator', {
          item: res.data,
          lastScreenTitle: lastScreenTitle,
        })
      }
    }
  }

  const emptyStateConfig = {
    title: localized('No Notifications'),
    description: localized(
      'You currently do not have any notifications. Your notifications will show up here.',
    ),
  }

  return (
    <IMNotification
      onNotificationPress={onNotificationPress}
      notifications={notifications}
      emptyStateConfig={emptyStateConfig}
    />
  )
}

export default IMNotificationScreen
