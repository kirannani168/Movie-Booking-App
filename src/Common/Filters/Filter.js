import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function Filter() {
    const generies = [

    ]
    return (
        <div style={{textAlign: 'center'}}>
        <h3 style={{color: 'skyblue'}}>Filter Movies by</h3>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField style={{width:'100%'}}
                        required
                        id="filled-required"
                        label="Movie Name"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField style={{width:'100%'}}
                        id="standard-select-currency"
                        select
                        label="Genres"
                        defaultValue="EUR"
                        variant="standard"
                    >
                        {generies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div>
                    <TextField style={{width:'100%'}}
                        id="standard-select-currency"
                        select
                        label=" Artist"
                        defaultValue="Artist"
                        variant="standard"
                    >
                        {generies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField style={{width:'100%'}}
                    date
                    defaultValue="Release Date"
                    >
                    </TextField>
                    <TextField style={{width:'100%'}}
                    date
                    defaultValue="End Date"
                    >
                    </TextField>
                </div>
            </Box>
            <button type='submit'>Submit</button>
        </div>
    )
}

export default Filter