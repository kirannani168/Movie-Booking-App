import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import artists from '../../Assets/Artists';
import genres from '../../Assets/Genres';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Filter() {
    return (
        <div style={{ textAlign: 'center' }}>
            

            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <h3 style={{ color: 'skyblue' }}>FIND MOVIES BY: </h3>
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
                        id="Genres"
                        select
                        label=" Genres"
                        defaultValue="Genres"
                        variant="standard"
                    >
                        {genres.map((option) => (
                            <MenuItem key={option.id} value={option.name}>
                                {option.name}
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
                        {artists.map((option) => (
                            <MenuItem key={option.id} value={option.first_name}>
                                {option.first_name}
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
            <Button variant="contained">Apply</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Filter