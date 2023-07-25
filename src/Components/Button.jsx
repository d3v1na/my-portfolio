import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import { color } from "framer-motion";

export const Button = styled(MuiButton)(({ pill }) => ({
    borderRadius: pill ? 50 : 4
    
  }));