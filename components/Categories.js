import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryData from '../data/workoutCategories.json';

import Category from './Category';

const Categories = () => {
    return (
        <View>
            {CategoryData.map(cateogry => {
                if (cateogry.favorite === true) {
                    return <Category key={cateogry.id} data={cateogry} />
                }
            })}
        </View>
    )
};

export default Categories