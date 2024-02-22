import React, { useEffect, useRef } from 'react'
import { Platform } from 'react-native'
import { Video } from 'expo-av'

const VideoPlayer = ({ video, isMounted, paused, onTouchStart }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    playVideoIfShould()
  }, [paused, isMounted])

  const playVideoIfShould = () => {
    if (!isMounted || paused) {
      videoRef.current?.pauseAsync()
      return
    }
    videoRef.current?.playAsync()
  }

  if (!video.url) {
    return null
  }

  return (
    <Video
      ref={videoRef}
      removeClippedSubviews={true}
      key={video.url}
      style={{ height: '100%', width: '100%' }}
      volume={1.0}
      useNativeControls={false}
      rate={video.rate ?? 1.0}
      shouldCorrectPitch={true}
      source={isMounted ? { uri: video.url } : undefined}
      onTouchStart={onTouchStart}
      resizeMode={'contain'}
      isLooping={true}
      onLoad={playVideoIfShould}
      posterSource={{ uri: video.thumbnailURL }}
      posterStyle={{
        height: '100%',
        width: '100%',
        resizeMode: Platform.OS === 'web' ? 'cover' : 'contain',
      }}
      usePoster={true}
    />
  )
}

export default VideoPlayer
