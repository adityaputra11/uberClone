import React from 'react';
import {Text} from 'react-native';

export function split(string, length = 15) {
  // Split text into individual words and count length
  const words = string.split(' ');
  const count = words.length;

  // Prepare elements and position tracker
  const elements = [];
  let position = 0;

  // Loop through words whilst position is less than count
  while (position < count) {
    // Prepare text for specified length and increment position
    const text = words.slice(position, length).join(' ');
    position += length;

    // Append text element
    elements.push(<Text>{text}.</Text>);
  }

  return elements;
}
