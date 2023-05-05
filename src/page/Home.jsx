import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

export default function Home() {
  const [name, setName] = useState("");
  useEffect(() => {
    const why = localStorage.getItem("name");
    setName(why);
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" color="initial">
        WELCOME
      </Typography>
      <Typography variant="h1" color="initial">
        {name}
      </Typography>
    </Box>
  );
}
