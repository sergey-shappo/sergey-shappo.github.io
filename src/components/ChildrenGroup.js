import React from 'react';
import Person from "./Person";
import styles from './ChildrenGroup.module.css';

export const ChildrenGroup = ({children = []}) => {
    return (
        <div className={styles.containerChildren}>
            {children.map((child, index) => <Person key={index} {...child} />)}
        </div>
    );
};