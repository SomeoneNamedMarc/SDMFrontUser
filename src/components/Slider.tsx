import React from 'react';
import Box from '@mui/material/Box';
import MUISlider from '@mui/material/Slider';


const Slider = ({sliderValue, min, max, step, marks, onChange }) => {
    return (
      <Box sx={{ width: "50%" }}>
        <MUISlider           
          value={sliderValue}
          min={min}
          max={max}
          step={step}
          onChange={onChange}
          //valueLabelDisplay="auto"
          marks={marks}
        />
      </Box>
    );
}

export default Slider; 