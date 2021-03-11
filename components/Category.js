import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Category = ({data}) => {
    return (
        <Text>
            {data.name}
        </Text>
    )
};

export default Category