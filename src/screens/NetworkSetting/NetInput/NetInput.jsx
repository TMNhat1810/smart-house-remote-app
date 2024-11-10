import React, { useContext, useState } from 'react'
import { Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { styles, textStyles } from './style'
import { AppContext } from '../../../contexts'

function IPPortFromURL(URL) {
  if (!URL) return { ip: '', port: '' }
  return {
    ip: URL.split('//')[1].split(':')[0],
    port: URL.split('//')[1].split(':')[1] ?? '80',
  }
}

function IPPortToURL(data) {
  return (
    'http://' +
    data.ip +
    (data.port ? (data.port === '80' ? '' : ':' + data.port) : '')
  )
}

export default function NetInput() {
  const { setServerURL, setEspURL, setCamURL, serverURL, espURL, camURL } =
    useContext(AppContext)

  const [server, setServer] = useState(IPPortFromURL(serverURL))
  const [esp, setEsp] = useState(IPPortFromURL(espURL))
  const [cam, setCam] = useState(IPPortFromURL(camURL))
  const [changing, setChanging] = useState(false)

  const handleCancel = () => {
    setServer(IPPortFromURL(serverURL))
    setEsp(IPPortFromURL(espURL))
    setCam(IPPortFromURL(camURL))
    setChanging(false)
  }

  const handleSave = async () => {
    setServerURL(IPPortToURL(server))
    setEspURL(IPPortToURL(esp))
    setCamURL(IPPortToURL(cam))
    setChanging(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.pannel}>
        <Text style={[textStyles.pannelTitle]}>Server</Text>
        <View style={styles.inputContainer}>
          <TextInput
            label="IP"
            mode="outlined"
            inputMode="decimal"
            activeOutlineColor="#4c7380"
            style={[styles.ipInput, styles.input]}
            value={server.ip}
            onChangeText={(text) => {
              setChanging(true)
              setServer({ ...server, ip: text })
            }}
          />
          <TextInput
            label="Port"
            mode="outlined"
            inputMode="decimal"
            activeOutlineColor="#4c7380"
            style={[styles.portInput, styles.input]}
            value={server.port}
            onChangeText={(text) => {
              setChanging(true)
              setServer({ ...server, port: text })
            }}
          />
        </View>
      </View>
      <View style={styles.pannel}>
        <Text style={[textStyles.pannelTitle]}>ESP</Text>
        <View style={styles.inputContainer}>
          <TextInput
            label="IP"
            mode="outlined"
            inputMode="decimal"
            activeOutlineColor="#4c7380"
            style={[styles.ipInput, styles.input]}
            value={esp.ip}
            onChangeText={(text) => {
              setChanging(true)
              setEsp({ ...esp, ip: text })
            }}
          />
          <TextInput
            label="Port"
            mode="outlined"
            inputMode="decimal"
            activeOutlineColor="#4c7380"
            activeUnderlineColor="#4c7380"
            style={[styles.portInput, styles.input]}
            value={esp.port}
            onChangeText={(text) => {
              setChanging(true)
              setEsp({ ...esp, port: text })
            }}
          />
        </View>
      </View>
      <View style={styles.pannel}>
        <Text style={[textStyles.pannelTitle]}>Camera</Text>
        <View style={styles.inputContainer}>
          <TextInput
            label="IP"
            mode="outlined"
            inputMode="decimal"
            activeOutlineColor="#4c7380"
            style={[styles.ipInput, styles.input]}
            value={cam.ip}
            onChangeText={(text) => {
              setChanging(true)
              setCam({ ...cam, ip: text })
            }}
          />
          <TextInput
            label="Port"
            mode="outlined"
            inputMode="decimal"
            activeOutlineColor="#4c7380"
            activeUnderlineColor="#4c7380"
            style={[styles.portInput, styles.input]}
            value={cam.port}
            onChangeText={(text) => {
              setChanging(true)
              setCam({ ...cam, port: text })
            }}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          icon="marker-cancel"
          style={[styles.button, styles.buttonCancel]}
          mode="outlined"
          textColor="#9a7265"
          disabled={!changing}
          onPress={handleCancel}
        >
          <Text style={[textStyles.button]}>Hủy</Text>
        </Button>
        <Button
          icon="check-bold"
          style={[styles.button, styles.buttonOK]}
          mode="contained"
          buttonColor="#659a6e"
          disabled={!changing}
          onPress={handleSave}
        >
          <Text style={[textStyles.button]}>Lưu</Text>
        </Button>
      </View>
    </View>
  )
}
