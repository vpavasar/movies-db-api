import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
    root: {
        width: 200 + theme.spacing(3) * 2
    },
    margin: {
        height: theme.spacing(3)
    }
}));

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired
};

const iOSBoxShadow =
    "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const marks = [
    {
        value: 0,
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
    },
];

const IOSSlider = withStyles({
    root: {
        color: "#3880ff",
        height: 2,
        padding: "15px 0"
    },
    thumb: {
        height: 28,
        width: 28,
        backgroundColor: "#fff",
        boxShadow: iOSBoxShadow,
        marginTop: -14,
        marginLeft: -14,
        "&:focus, &:hover, &$active": {
            boxShadow:
                "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                boxShadow: iOSBoxShadow
            }
        }
    },
    active: {},
    valueLabel: {
        left: "calc(-50% + 12px)",
        top: -22,
        "& *": {
            background: "transparent",
            color: "#000"
        }
    },
    track: {
        height: 2
    },
    rail: {
        height: 2,
        opacity: 0.5,
        backgroundColor: "#bfbfbf"
    },
    mark: {
        backgroundColor: "#bfbfbf",
        height: 8,
        width: 1,
        marginTop: -3
    },
    markActive: {
        opacity: 10,
        backgroundColor: "currentColor"
    }
})(Slider);

export default function CustomizedSlider() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <IOSSlider
                aria-label="ios slider"
                defaultValue={10}
                marks={marks}
                valueLabelDisplay="on"
            />
        </div>
    );
}
