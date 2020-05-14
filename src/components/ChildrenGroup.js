import React from 'react';
import Person from "./Person";
import styles from './ChildrenGroup.module.css';

const wrap = {'flex-wrap': 'wrap'};
const wrapReverse = {'flex-wrap': 'wrap-reverse'};

export const ChildrenGroup = ({children = [], isReverse}) => {
    return (
        <div className={styles.containerChildren} style={isReverse ? wrapReverse : wrap}>
            {children.map((child, index) => <Person key={index} {...child} />)}
        </div>
    );
};