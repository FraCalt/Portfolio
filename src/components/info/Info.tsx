import { Button, IconButton } from "@mui/material";
import {
  email,
  fullname,
  professionWeb as web,
  professionDance as dance,
  siteLink,
} from "../../constants";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import CachedIcon from "@mui/icons-material/Cached";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setProfession } from "../../redux/professionSlice";

const Info = () => {
  const profession = useSelector((state: RootState) => state.profession.value);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(profession);
  }, [profession]);

  const handleOnClickIcon = () => {
    dispatch(setProfession(!profession));
  };

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

      <h3>
        {profession ? dance : web}
        <span>
          <IconButton
            sx={{
              backgroundColor: "white",
              width: "20px",
              height: "20px",
              [":hover"]: { backgroundColor: "black", color: "cyan" },
            }}
            onClick={handleOnClickIcon}
          >
            <CachedIcon />
          </IconButton>
        </span>
      </h3>

      <h4>
        <a>{siteLink}</a>
      </h4>
      <div className="buttongroup">
        <Button
          sx={{
            bgcolor: "white",
            [":hover"]: { backgroundColor: "black", color: "cyan" },
          }}
          onClick={handleOnClickEmail}
        >
          <EmailOutlinedIcon />
          <h5>Email</h5>
        </Button>
        <Button
          sx={{
            bgcolor: "white",
            [":hover"]: { backgroundColor: "black", color: "cyan" },
          }}
          onClick={handleOnClickLinkedin}
        >
          <LanguageOutlinedIcon />
          <h5>Linkedin</h5>
        </Button>
      </div>
    </div>
  );
};

export default Info;
