import React, { useState, useEffect } from "react";
import "../styles/index.css";
import { useAuth } from "../components/AuthContext.tsx";
import GetMethodAPI from "../components/API/GetMethodAPI.tsx";
import { Box, Paper, Typography } from "@mui/material";

function Method() {
  const { user } = useAuth();
  const [method, setMethod] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      setError("User not loaded.");
      setLoading(false);
      return;
    }

    if (user.method && user.method.id) {
      setLoading(true);
      GetMethodAPI(user.method.id)
        .then((data) => {
          setMethod(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    } else {
      setError("No method assigned to this user.");
      setLoading(false);
    }
  }, [user?.method?.id]);

  if (loading) return <div>Loading method data...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!method) return <div>No method data available.</div>;

  return (
    <div className="method">
      <Typography variant="h4" gutterBottom>
        {method.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {method.description}
      </Typography>
      <div className="method-list">
        <Box display="flex" justifyContent="space-around" gap={2} mt={3}>

          <Paper
            elevation={3}
            sx={{
              width: "30%",
              maxHeight: "300px",
              overflowY: "auto",
              padding: 2,
            }}>
                <Typography variant="h6" gutterBottom>
                <strong>Artifacts</strong>
                </Typography>
            {method.artifactList.map((artifact, index) => (
              <Box key={index} mb={4}>
                <Typography variant="subtitle1">{artifact.title}</Typography>
                <Typography variant="body2">{artifact.description}</Typography>
              </Box>
            ))}
          </Paper>

          <Paper
            elevation={3}
            sx={{
              width: "30%",
              maxHeight: "300px",
              overflowY: "auto",
              padding: 2,
            }}>
                <Typography variant="h6" gutterBottom>
                <strong>Actors</strong>
                </Typography>
            {method.actorList.map((actor, index) => (
              <Box key={index} mb={4}>
                <Typography variant="subtitle1">{actor.title}</Typography>
                <Typography variant="body2">{actor.description}</Typography>
              </Box>
            ))}
          </Paper>

          <Paper
            elevation={3}
            sx={{
              width: "30%",
              maxHeight: "300px",
              overflowY: "auto",
              padding: 2,
            }}>
                <Typography variant="h6" gutterBottom>
                <strong>To-Do List</strong>
                </Typography>
            {method.todoList.map((todo, index) => (
              <Box key={index} mb={4}>
                <Typography variant="subtitle1">{todo.title}</Typography>
                <Typography variant="body2">{todo.description}</Typography>
              </Box>
            ))}
          </Paper>
        </Box>
      </div>
    </div>
  );
}

export default Method;
