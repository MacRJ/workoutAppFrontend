import React from 'react';
import renderer from 'react-test-renderer';
import { beforeAll, expect } from '@jest/globals';
import Categories from '../components/Categories.js';
import Category from '../components/Category.js'
import CategoryData from '../data/workoutCategories.json';

let testInstance;
const categoryCount = CategoryData.filter(filterCategory => filterCategory.favorite === true).length;

beforeAll(() => {
    const testRenderer = renderer.create(<Categories />);
    testInstance = testRenderer.root;
});

fit('should render favorite categories', () => {
    let test = testInstance.findAllByType(Category);
    console.log(categoryCount)
    expect(test.length).toEqual(categoryCount);
});