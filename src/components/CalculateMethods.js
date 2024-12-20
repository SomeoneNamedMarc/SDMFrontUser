import React, { useState, useRef } from 'react';
import { Card, CardContent, Typography, Button, CardActionArea } from '@mui/material';
import { assignMethodologyToCurrentUser as assignMethod} from "./API/MethodologyHandlerAPI.js"
import { useAuth } from "./AuthContext.tsx";

const methodologies = [
  { name: 'Waterfall', score: 5.6, comment: 'Fully structured, sequential, and rigid.' },
  { name: 'Unified Process', score: 24.5, comment: 'Moderately agile, with some structured roots.' },
  { name: 'DSDM', score: 26.8, comment: 'Agile but retains structured qualities.' },
  { name: 'Scrum', score: 31.6, comment: 'Highly agile with minimal structure.' },
  { name: 'XP', score: 38.5, comment: 'Purely agile with engineering-focused practices.' },
];

const CalculateMethods = ({ personnel, culture, criticality, size, dynamism }) => {
  const { user, setUser, login } = useAuth();
  const [rankedMethods, setRankedMethods] = useState([]);
  const scrollToMax = useRef(null);
  const [myScore, setMyScore] = useState(0);

  // Weights
  const neutralWeights = [1.4, 1.2, 1.5, 1.1, 1.3];
  const agileWeights = [1.6, 1.5, 1.7, 1.3, 1.6];
  const structuredWeights = [1.3, 1.0, 1.2, 1.0, 1.1];

  const factoringPicker = (factoringList, values) => {
    const { personnel, culture, criticality, size, dynamism } = values;
    return (
      personnel * factoringList[0] +
      culture * factoringList[1] +
      criticality * factoringList[2] +
      size * factoringList[3] +
      dynamism * factoringList[4]
    );
  };

  const handleCalculate = () => {
    const selectedFactoring = agileWeights; // Change this if adding a "preferred" setting

    const calculatedScore = factoringPicker(selectedFactoring, {
      personnel,
      culture,
      criticality,
      size,
      dynamism,
    });
    setMyScore(Math.ceil(calculatedScore * 100) / 100);

    const ranked = methodologies
      .map((method) => ({
        ...method,
        difference: Math.abs(method.score - calculatedScore),
      }))
      .sort((a, b) => a.difference - b.difference);

    setRankedMethods(ranked);

    setTimeout(() => {
      if (scrollToMax.current) {
        scrollToMax.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  const handleCardClick = (method) => { 
    let methodId;
    switch (method.name) {
      case "Waterfall": methodId = 1; break;
      case "Unified Process": methodId = 2; break;
      case "DSDM": methodId = 3; break;
      case "Scrum": methodId = 4; break;
      case "XP": methodId = 5; break;
      default: methodId = 0; break;
    }
    assignMethod(methodId, user, setUser, login).then(() => {
      console.log("Updated user in AuthContext:", user);
    });
};
  
  

  return (
    <div className='full-width'>
      <Button variant="contained" onClick={handleCalculate}>
        Calculate
      </Button>
      {rankedMethods.length > 0 && (
        <div ref={scrollToMax} className="nav-bar-offset">
          <h1>Select your preferred method</h1>
          <p>Lowest score fits best to your profile</p>
        </div>
      )}
      <div className="cards-list">
        {rankedMethods.length > 0 &&
          rankedMethods.map((method, index) => (
            <Card key={index} style={{ marginTop: 20 }}>
              <CardActionArea onClick={() => handleCardClick(method)}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {index + 1}. {method.name}
                  </Typography>
                  <Typography variant="body1">
                    Your score: {myScore} - Method score: {method.score}
                  </Typography>
                  <Typography variant="body2">
                    Difference: {method.difference.toFixed(2)}
                  </Typography>
                  <Typography variant="caption">
                    {method.comment}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default CalculateMethods;
