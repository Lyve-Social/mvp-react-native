import React from 'react'
import { Animated } from 'react-native'
import { Image } from 'expo-image'

export default function FacePileCircleItem(props) {
  const { imageStyle, circleSize, face, offset, dynamicStyle } = props
  const innerCircleSize = circleSize * 2
  const marginRight = circleSize * offset

  return (
    <Animated.View style={{ marginRight: -marginRight }}>
      <Image
        style={[
          dynamicStyle.facePileCircleImage,
          {
            width: innerCircleSize,
            height: innerCircleSize,
            borderRadius: circleSize,
          },
          imageStyle,
        ]}
        source={{ uri: face }}
      />
    </Animated.View>
  )
}
