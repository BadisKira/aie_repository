import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Snackbar } from "@mui/material";
import emailjs from '@emailjs/browser';

// import '../styles/ContactUs.css';

import { useRef, useState } from 'react';
const showAlertTime = 4000;

const ContactUsForm = (props) => {
  const refForm = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();
    // SERVICE ID , Template id , template params=" ce sont nos valeurs envoyer  " , userID  
    emailjs.send("service_11frsrf", "template_9ao3e8l", formVal, "b5gIP-xe9eO-E6IsL")
      .then(response => {
        setAlertInfo({ open: true, message: "Message envoyé avec succes", type: "success" });

        setTimeout(() => {
          setAlertInfo((prev) => ({ ...prev, open: false }));
        }, showAlertTime);

      })
      .catch(err => {
        setAlertInfo({ open: true, message: "Erreur , Message non envoyé", type: "error" });
        setTimeout(() => {
          setAlertInfo((prev) => ({ ...prev, open: false }));
        }, showAlertTime);
      })
  };

  const [formVal, setFormVal] = useState({
    fullname: "",
    email: "",
    message: ""

  });
  const [alertInfo, setAlertInfo] = useState({ open: false, message: "", type: "" });
  const handelChange = (e) => {
    setFormVal((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <form action=""
        className="formContactUs"
        ref={refForm}
        onSubmit={handelSubmit}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <label>
            <p> Nom complet *</p>
            <input
              required
              className="contactUsTextField"
              placeholder="Ecrivez votre nom et prénom"
              type="text"
              name="fullname"
              value={formVal.name}
            />
          </label>

          <label>
            <p> E-mail * </p>
            <input
              required
              placeholder="Votre adresse e-mails"
              className="contactUsTextField"
              type="email"
              name="email"
              onChange={handelChange}
              value={formVal.email}
            />
          </label>

          <label>
            <p> Commentaire / questions *</p>
            <TextareaAutosize
              required
              placeholder="Ecrivez votre message ici"
              className="contactUsTextField"
              name="message"
              onChange={handelChange}
              value={formVal.message}
              maxRows={4}
              style={{
                height: "17vh", resize: "none",
                fontFamily: "Helvetica, sans-serif"
              }}
            />
          </label>

          <Button
            variant="outlined"
            size="large"
            type="submit"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              borderWidth: "2px",
              width: "30vw",
              borderRadius: "15px",
            }}
          >
            Envoyer
          </Button>
        </Stack>


      </form>
      {alertInfo.open &&
        <Snackbar open={alertInfo.open} anchorOrigin={{ vertical: 'top', horizontal: "center" }} autoHideDuration={showAlertTime} onClose={() => { setAlertInfo((prev) => ({ ...prev, open: false })); }}>
          <Alert severity={alertInfo.type} sx={{ width: '100%' }}>
            {alertInfo.message}
          </Alert>
        </Snackbar>
      }
    </>
  );
};

export default ContactUsForm;
