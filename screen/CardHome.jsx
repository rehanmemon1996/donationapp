import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const CustomCard = ({ title, description, imageUrl }) => {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: imageUrl }} style={styles.cardImage} />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  cardImage: {
    height: 200, // Set the desired height of the card image
  },
});

export default CustomCard;
