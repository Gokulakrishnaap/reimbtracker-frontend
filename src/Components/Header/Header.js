import "./Header.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import PollIcon from "@mui/icons-material/Poll";

export function Header() {
  const history = useNavigate();
  return (
    <div className="header">
      <div className="titleAndIcon">
        <PollIcon sx={{ fontSize: 30 }} />
        <p className="appTitle" onClick={() => history("/")}>
          RI-Tracker
        </p>
      </div>
      <Button
        variant="contained"
        color="success"
        size="small"
        style={{ fontSize: "10px", fontFamily: "Montserrat, sans-serif" }}
        onClick={() => history("/login")}
      >
        Logout
      </Button>
    </div>
  );
}
