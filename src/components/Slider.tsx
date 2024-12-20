import React from 'react';
import Box from '@mui/material/Box';
import MUISlider from '@mui/material/Slider';


const Slider = ({sliderValue, min, max, step, marks, onChange, sx }) => {
    return (
      <Box>
        <MUISlider           
          value={sliderValue}
          min={min}
          max={max}
          step={step}
          onChange={onChange}
          //valueLabelDisplay="auto"
          marks={marks}
          sx={{
            '& .MuiSlider-markLabel': {
              fontSize: '14px',
            },
            ...sx,
          }}
        />
      </Box>
    );
}

export default Slider; 