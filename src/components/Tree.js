import React from 'react';
import Person from "./Person";
import { ChildrenGroup } from "./ChildrenGroup";
import styles from './Tree.module.css';

const f1 = [
        {id: 'I178', hideIndex: 7, top: 1, left: 1},
        {id: 'I185', hideIndex: 6, top: 1, left: 2},
        {id: 'I186', hideIndex: 5, top: 1, left: 3},
        {id: 'I213', hideIndex: 4, top: 1, left: 4},
        {id: 'I224', hideIndex: 3, top: 1, left: 5},
        {id: 'I225', hideIndex: 2, top: 1, left: 6},
        {id: 'I43', hideIndex: 1, top: 1, left: 7},
];
const f2 = [
        {id: 'I12', hideIndex: 1, top: 1, left: 9},
        {id: 'I183', hideIndex: 2, top: 1, left: 10},
        {id: 'I202', hideIndex: 3, top: 1, left: 11},
];
const f3 = [
        {id: 'I208', hideIndex: 2, top: 1, left: 13},
        {id: 'I44', hideIndex: 1, top: 1, left: 14},
];
const f4 = [
        {id: 'I15', hideIndex: 1, top: 1, left: 16},
        {id: 'I58', hideIndex: 2, top: 1, left: 17},
];
const f5 = [
        {id: 'I132', hideIndex: 2, top: 1, left: 19},
        {id: 'I67', hideIndex: 1, top: 1, left: 20},
];
const f6 = [
        {id: 'I66', hideIndex: 1, top: 1, left: 22},
        {id: 'I103', hideIndex: 2, top: 1, left: 23},
        {id: 'I104', hideIndex: 3, top: 1, left: 24},
];
const f7 = [
        {id: 'I110', hideIndex: 2, top: 1, left: 26},
        {id: 'I53', hideIndex: 1, top: 1, left: 27},
];
const f8 = [
        {id: 'I14', hideIndex: 1, top: 1, left: 29},
        {id: 'I56', hideIndex: 2, top: 1, left: 30},
        {id: 'I57', hideIndex: 3, top: 1, left: 31},
];

export const Tree = () => {
        return (
            <div className={styles.tree}>
                <div className={styles.containerGeneration}>
                    <ChildrenGroup children={f1} isReverse={false}/>
                    <ChildrenGroup children={f2} isReverse={true} />
                    <ChildrenGroup children={f3} isReverse={false} />
                    <ChildrenGroup children={f4} isReverse={true} />
                    <ChildrenGroup children={f5} isReverse={false} />
                    <ChildrenGroup children={f6} isReverse={true} />
                    <ChildrenGroup children={f7} isReverse={false}  />
                    <ChildrenGroup children={f8} isReverse={true} />
                </div>



                    <Person id="I184" top={2} left={7}/>
                    <Person id="I136" top={2} left={8}/>
                    <Person id="I137" top={2} left={9}/>
                    <Person id="I8" top={2} left={10}/>

                    <Person id="I9" top={2} left={12}/>
                    <Person id="I59" top={2} left={14}/>
                    <Person id="I60" top={2} left={16}/>

                    <Person id="I105" top={2} left={20}/>
                    <Person id="I10" top={2} left={22}/>

                    <Person id="I11" top={2} left={24}/>
                    <Person id="I45" top={2} left={25}/>
                    <Person id="I46" top={2} left={26}/>
                    <Person id="I47" top={2} left={27}/>
                    <Person id="I48" top={2} left={28}/>
                    <Person id="I98" top={2} left={29}/>


                    <Person id="I18" top={3} left={5}/>
                    <Person id="I21" top={3} left={8}/>
                    <Person id="I20" top={3} left={11}/>
                    <Person id="I19" top={3} left={14}/>
                    <Person id="I7" top={3} left={17}/>

                    <Person id="I6" top={3} left={19}/>
                    <Person id="I16" top={3} left={23}/>
                    <Person id="I17" top={3} left={27}/>


                    <Person id="I13" top={4} left={17}/>
                    <Person id="I5" top={4} left={19}/>

                    <Person id="I180" top={5} left={19}/>
            </div>
        );
};