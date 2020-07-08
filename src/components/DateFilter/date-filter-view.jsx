import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const DateFilterView = (props) => {
    const {
        handleDateChangeDateFrom,
        handleDateChangeDateTo,
        selectedDateFrom,
        selectedDateTo
    } = props;

    return (
        <div className='date-filter'>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container direction='column'>
                    <p>Release Dates</p>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="from"
                        value={selectedDateFrom}
                        onChange={handleDateChangeDateFrom}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="to"
                        value={selectedDateTo}
                        onChange={handleDateChangeDateTo}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default DateFilterView;
