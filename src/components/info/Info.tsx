import { Button } from "@mui/material";
import { email, fullname, linkedin, profession, siteLink } from "../../constants";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { Route } from "react-router-dom";

const Info = () => {
  const handleOnClickEmail = () => {
    navigator.clipboard.writeText(email);
    window.alert("email copied to clipboard");
  };
  const handleOnClickLinkedin = () => {
    window.alert("redirect");
  };

  return (
    <div className="info--box">
      <img src="/images/profile-image.PNG" alt="profileimage" width="125px" />
      <h1>{fullname}</h1>
      <h3>{profession}</h3>
      <h4>
        <a>{siteLink}</a>
      </h4>
      <div className="buttongroup">
        <Button sx={{ bgcolor: "white" }} onClick={handleOnClickEmail}>
          <EmailOutlinedIcon />
          <h5>Email</h5>
        </Button>
        <Button sx={{ bgcolor: "white" }} onClick={handleOnClickLinkedin}>
          <LanguageOutlinedIcon />
          <h5>Linkedin</h5>
        </Button>
      </div>
    </div>
  );
};

export default Info;
