import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 1,
    },
    {
        value: 2,
    },
    {
        value: 3,
    },
    {
        value: 4,
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 6,
    },
    {
        value: 7,
    },
    {
        value: 8,
    },
    {
        value: 9,
    },
    {
        value: 10,
        label: '10',
    },
];

function UserScoreFilterView(props) {
    const {valuetext, handleChange, value} = props;
    const classes = useStyles();

    return (
        <div className='user-score-filter'>
            <Typography id="range-slider" gutterBottom>
                User Score
            </Typography>
            <Slider
                value={value}
                max={10}
                marks={marks}
                step={1}
                onChange={handleChange}
                valueLabelDisplay="off"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}

export default UserScoreFilterView;