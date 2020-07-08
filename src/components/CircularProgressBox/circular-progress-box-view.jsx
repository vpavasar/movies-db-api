import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const CircularProgressBoxView = (props) => {
    const {rating} = props;

    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="static" value={70} size={'60px'}/>
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color="with">{`${Math.round(
                    70,
                )}%`}</Typography>
            </Box>
        </Box>
    );
};

export default CircularProgressBoxView;
