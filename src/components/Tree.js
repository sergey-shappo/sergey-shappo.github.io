import React from 'react';
import Person from "./Person";
import { ChildrenGroup } from "./ChildrenGroup";
import styles from './Tree.module.css';

const f1 = [
        {id: 'I178', hideIndex: 12 },
        {id: 'I185', hideIndex: 11 },
        {id: 'I186', hideIndex: 10 },
        {id: 'I213', hideIndex: 9 },
        {id: 'I224', hideIndex: 8 },
        {id: 'I225', hideIndex: 7 },
        {id: 'I43', hideIndex: 1 },
];
const f2 = [
        {id: 'I12', hideIndex: 1 },
        {id: 'I183', hideIndex: 7 },
        {id: 'I202', hideIndex: 8 },
];
const f3 = [
        {id: 'I208', hideIndex: 7 },
        {id: 'I44', hideIndex: 1 },
];
const f4 = [
        {id: 'I15', hideIndex: 1 },
        {id: 'I58', hideIndex: 7 },
];
const f5 = [
        {id: 'I132', hideIndex: 7 },
        {id: 'I67', hideIndex: 1 },
];
const f6 = [
        {id: 'I66', hideIndex: 1 },
        {id: 'I103', hideIndex: 7 },
        {id: 'I104', hideIndex: 8 },
];
const f7 = [
        {id: 'I110', hideIndex: 7 },
        {id: 'I53', hideIndex: 1 },
];
const f8 = [
        {id: 'I14', hideIndex: 1 },
        {id: 'I56', hideIndex: 7 },
        {id: 'I57', hideIndex: 8 },
];
const f9 = [
        {id: 'I184', hideIndex: 4 },
        {id: 'I136', hideIndex: 3 },
        {id: 'I137', hideIndex: 2 },
        {id: 'I8', hideIndex: 1 },
];
const f10 = [
        {id: 'I9', hideIndex: 1 },
        {id: 'I59', hideIndex: 2 },
        {id: 'I60', hideIndex: 3 },
];
const f11 = [
        {id: 'I105', hideIndex: 2 },
        {id: 'I10', hideIndex: 1 },
];
const f12 = [
        {id: 'I11', hideIndex: 1 },
        {id: 'I45', hideIndex: 2 },
        {id: 'I46', hideIndex: 3 },
        {id: 'I47', hideIndex: 4 },
        {id: 'I48', hideIndex: 5 },
        {id: 'I98', hideIndex: 6 },
];
const f13 = [
        {id: 'I18', hideIndex: 2 },
        {id: 'I21', hideIndex: 1 },
        {id: 'I20', hideIndex: 1 },
        {id: 'I19', hideIndex: 1 },
        {id: 'I7', hideIndex: 1 },
];
const f14 = [
        {id: 'I6', hideIndex: 1 },
        {id: 'I16', hideIndex: 1 },
        {id: 'I17', hideIndex: 1 },
];
const f15 = [
        {id: 'I13', hideIndex: 1 },
        {id: 'I5', hideIndex: 1 },
];
const f16 = [
        {id: 'I180', hideIndex: 1 },
];

export const Tree = () => {
        return (
            <div className={styles.tree}>
                <div className={styles.containerGeneration}>
                    <ChildrenGroup children={f1}/>
                    <ChildrenGroup children={f2} />
                    <ChildrenGroup children={f3} />
                    <ChildrenGroup children={f4} />
                    <ChildrenGroup children={f5} />
                    <ChildrenGroup children={f6} />
                    <ChildrenGroup children={f7}  />
                    <ChildrenGroup children={f8} />
                </div>

                <div className={styles.containerGeneration}>
                    <ChildrenGroup children={f9}/>
                    <ChildrenGroup children={f10}/>
                    <ChildrenGroup children={f11}/>
                    <ChildrenGroup children={f12}/>
                </div>

                <div className={styles.containerGeneration}>
                    <ChildrenGroup children={f13}/>
                    <ChildrenGroup children={f14}/>
                </div>

                <div className={styles.containerGeneration}>
                    <ChildrenGroup children={f15}/>
                </div>
                <div className={styles.containerGeneration}>
                    <ChildrenGroup children={f16}/>
                </div>
            </div>
        );
};