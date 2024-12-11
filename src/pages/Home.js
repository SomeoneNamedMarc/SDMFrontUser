import React, {useState} from "react";
import Chart from "../components/RadarChart.tsx";
import Slider from "../components/Slider.tsx";
import "../styles/index.css";

function Home() {
    const [sliderValues, setSliderValues] = useState({
        slider1: 1,
        slider2: 1,
        slider3: 1,
        slider4: 1,
        slider5: 1,
        slider6: 1,
      });
    
      const handleSliderChange = (sliderName) => (event, newValue) => {
        setSliderValues((prevValues) => ({
          ...prevValues,
          [sliderName]: newValue,
        }));
      };

    const data = {
        labels: ["Personnel", "Dynamism", "Culture", "Size", "Criticality"],
        datasets: [
          {
            label: "Profile Area",
            data: [sliderValues.slider2-(sliderValues.slider1-1), sliderValues.slider3, sliderValues.slider4, sliderValues.slider5, sliderValues.slider6],
            backgroundColor: "rgba(34, 202, 236, 0.2)",
            borderColor: "rgba(34, 202, 236, 1)",
            borderWidth: 3,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
                font: {
                  size: 16,
                },
              },
          },
        },
        // To get tick-text for each label, a new scale is needed for each label
        scales: {
          r: {
            min: 0,
            max: 5,
            grid: {
                color: "rgba(100, 100, 100, 0.5)",
                lineWidth: 2,
            },
            ticks: {
              beginAtZero: true,
              display: false,
              stepSize: 1,
              font: {
                size: 14,
              },
            },
            pointLabels: {
                color: "rgba(50, 50, 50, 1)",
                font: {
                  size: 16,
                  weight: "bold",
                },
            },
          },
        },
      };

    return (
        <div className="home">
            <h1>Home</h1>
            <ul className="ul-no-styletype">
                <li>
                <label htmlFor="slider1" style={{ display: "block", marginBottom: "3px", fontWeight:"bold", fontSize:"18px"}}>
                Personnel (Lv. 1)
                </label>
                    <Slider sliderValue={sliderValues.slider1} min={1} max={5} marks={[
                        {value: 1, label: "0"},
                        {value: 2, label: "10"},
                        {value: 3, label: "20"},
                        {value: 4, label: "30"},
                        {value: 5, label: "40"},
                    ]} 
                    step="1" 
                    onChange={handleSliderChange("slider1")}/>
                </li>
                <li>  
                <label htmlFor="slider1" style={{ display: "block", marginBottom: "3px", fontWeight:"bold", fontSize:"18px"}}>
                Personnel (Lv. 2/3)
                </label>
                    <Slider sliderValue={sliderValues.slider2} min={1} max={5} marks={[
                        {value: 1, label: "35"},
                        {value: 2, label: "30"},
                        {value: 3, label: "25"},
                        {value: 4, label: "20"},
                        {value: 5, label: "15"},
                    ]} 
                    step="1" 
                    onChange={handleSliderChange("slider2")}/>
                </li>
                <li>
                <label htmlFor="slider1" style={{ display: "block", marginBottom: "3px", fontWeight:"bold", fontSize:"18px"}}>
                Dynamism
                </label>
                    <Slider sliderValue={sliderValues.slider3} min={1} max={5} marks={[
                        {value: 1, label: "50"},
                        {value: 2, label: "30"},
                        {value: 3, label: "10"},
                        {value: 4, label: "5"},
                        {value: 5, label: "1"},
                    ]} 
                    step="1" 
                    onChange={handleSliderChange("slider3")}/>
                </li>
                <li>
                <label htmlFor="slider1" style={{ display: "block", marginBottom: "3px", fontWeight:"bold", fontSize:"18px"}}>
                Culture
                </label>
                    <Slider sliderValue={sliderValues.slider4} min={1} max={5} marks={[
                        {value: 1, label: "90"},
                        {value: 2, label: "70"},
                        {value: 3, label: "50"},
                        {value: 4, label: "30"},
                        {value: 5, label: "10"},
                    ]} 
                    step="1" 
                    onChange={handleSliderChange("slider4")}/>
                </li> 
                <li>
                <label htmlFor="slider1" style={{ display: "block", marginBottom: "3px", fontWeight:"bold", fontSize:"18px"}}>
                Size
                </label>
                    <Slider sliderValue={sliderValues.slider5} min={1} max={5} marks={[
                        {value: 1, label: "3"},
                        {value: 2, label: "10"},
                        {value: 3, label: "30"},
                        {value: 4, label: "100"},
                        {value: 5, label: "300+"},
                    ]} 
                    step="1" 
                    onChange={handleSliderChange("slider5")}/>
                </li>
                <li>
                <label htmlFor="slider1" style={{ display: "block", marginBottom: "3px", fontWeight:"bold", fontSize:"18px"}}>
                Criticality
                </label>
                    <Slider sliderValue={sliderValues.slider6} min={1} max={5} marks={[
                        {value: 1, label: "Comfort"},
                        {value: 2, label: "Discretionary Funds"},
                        {value: 3, label: "Essential Funds"},
                        {value: 4, label: "Single Life"},
                        {value: 5, label: "Many Lives"},
                    ]} 
                    step="1" 
                    onChange={handleSliderChange("slider6")}/>
                </li>
            </ul>
            <div className="chart-container">
                <Chart data={data} options={options} />
            </div>
        </div>

    )
}

export default Home;