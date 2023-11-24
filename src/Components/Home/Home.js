import "./Home.css";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import PaymentsIcon from "@mui/icons-material/Payments";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const getStarted = () => {
    navigate("/form");
  };
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="top">
          <div className="topLeft">
            <p className="text">Reimbersements made Seamless</p>
            <p className="subText">
              For employees, submit claims and receipts easily via the
              RI-Tracker app. For finance teams, manage all reimbursement
              requests from a centralised dashboard. RI-Tracker's Reimbursement
              feature ensures that employees are kept happy with instant payouts
              once approved.
            </p>
            <button className="startButton" onClick={getStarted}>
              Get Started
            </button>
          </div>
          <div className="topRight">
            <img
              className="imageReimb"
              src="https://cdn-icons-png.flaticon.com/512/2419/2419651.png"
              alt=""
            />
          </div>
        </div>
        <div className="middle">
          <div className="midHeader">
            <p className="midTitle">KEY FEATURES</p>
          </div>
          <div className="midBody">
            <div className="midLeft">
              <div>
                <AssuredWorkloadIcon sx={{ fontSize: 100, color: "brown" }} />
              </div>
              <p className="innerText">Ensure in-policy spending</p>
              <p className="innerSubText">
                Our multi-level approval process ensures that only
                reimbursements that fall within company policies are approved.
                Automatically send reminders to employees to fill out any claims
                that are incorrect or incomplete.
              </p>
            </div>
            <div className="midCenter">
              <div>
                <PaymentsIcon sx={{ fontSize: 100, color: "green" }} />
              </div>
              <p className="innerText">Instant Payouts</p>
              <p className="innerSubText">
                No more waiting until the end of the month to be paid back.
                Shorten the time your employees remain out-of-pocket with
                instant payouts after approval.
              </p>
            </div>
            <div className="midRight">
              <div>
                <VerifiedUserIcon sx={{ fontSize: 100, color: "orange" }} />
              </div>
              <p className="innerText">Simple & Swift</p>
              <p className="innerSubText">
                Gain more visibility and control by reviewing, approving, and
                disbursing all reimbursement requests from a centralised
                dashboard.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottomHeader">
            <h3 className="bottomTitle">HOW IT WORKS</h3>
          </div>
          <div className="bottomBody">
            <div className="steps">
              <h4 className="bottomText">Step 1: Upload your receipt</h4>
              <p className="bottomSubText">
                Upload your receipt by taking a photo or upload an existing
                photo.
              </p>
            </div>
            <div className="steps">
              <h4 className="bottomText">Step 2: Fill up a short form</h4>
              <p className="bottomSubText">
                Fill up all the required fields and press 'Submit'.
              </p>
            </div>
            <div className="steps">
              <h4 className="bottomText">Step 3: Receive funds</h4>
              <p className="bottomSubText">
                Once your reimbursement request is approved, you will receive
                the funds in the bank account provided.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
