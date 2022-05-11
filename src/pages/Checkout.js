import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import PaymentForm from "../components/payment/PaymentForm";
import Review from "../components/payment/Review";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import BanniereT2 from "../components/banniereType2";

const steps = ["Paiement", "Revoir la reservation"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PaymentForm />;
    case 1:
      return <Review />;
      throw new Error("erreur");
  }
}

const Checkout = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <NavBar />
      <BanniereT2 title="Finaliser la reservation" />
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Paiement
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Merci pour votre confiance.
                </Typography>
                <Typography variant="subtitle1">
                  Votre resevation vous attend, passez un bon moment.
                </Typography>
              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Retour
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1
                      ? "Enregistrer"
                      : "Suivant"}
                  </Button>
                </Box>
              </>
            )}
          </>
        </Paper>
      </Container>

      <Footer />
    </>
  );
};
export default Checkout;
