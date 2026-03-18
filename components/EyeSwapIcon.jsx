import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

export const EyeSwapIcon = ({visibility, setVisibility}) => {
  return visibility ? (
    <Entypo className='mb-1' name="eye" size={24} color="white" onPress={() => setVisibility(false)} />
  ) : (
    <Entypo className='mb-1' name="eye-with-line" size={24} color="white" onPress={() => setVisibility(true)} />
  )
}
