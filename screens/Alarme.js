import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

import Constants from 'expo-constants'

import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  })
})

export default function AlarmeScreen() {

  const [token, setToken] = useState()

  async function scheduleNotification() {
    console.log('Agendando notificação')

    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Opa',
        body: 'Vamos usar o app!'
      },
      trigger: {
        seconds: 2,
        repeats: true
      }
    })

    console.log('Fim do agendamento, Token: ', token)
    setToken(token)
  }

  async function cancelNotification() {
    console.log('Cancelando notificação')

    await Notifications.cancelScheduledNotificationAsync(token)
    setToken(null)
  }

  return (
    <View style={styles.container}>
      <Text>Alarme Screen</Text>
      <Button 
        title="Press to schedule a notification"
        onPress={async () => await scheduleNotification()}
      />

      {
        token && <Button
                    title='Cancel schedule notification'
                    onPress={async () => await cancelNotification()}
                 />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  }
})