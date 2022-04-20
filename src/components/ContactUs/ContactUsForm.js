import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
// import '../styles/ContactUs.css';

const ContactUsForm = (props) => {
  return (
    <form action="" className="formContactUs">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        s
      >
        <label>
          <p> Nom complet *</p>
          <input
            required
            className="contactUsTextField"
            placeholder="Ecrivez votre nom et prénom"
            type="text"
            name="fullname"
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
          />
        </label>

        <label>
          <p> Commentaire / questions *</p>
          <TextareaAutosize
            required
            placeholder="Ecrivez votre message ici"
            className="contactUsTextField"
            name="message"
            maxRows={4}
            style={{ height: "17vh", fontFamily: "Helvetica, sans-serif" }}
          />
        </label>

        <Button
          variant="outlined"
          size="large"
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
      {/*<Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
        </Alert>*/}
    </form>
  );
};

export default ContactUsForm;
