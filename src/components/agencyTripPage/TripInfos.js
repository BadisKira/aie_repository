import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TripInfos = () => {
  const [readMore, setReadMore] = useState(false);
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. A eaque nostrum eos commodi laudantium! Suscipit minus nemo ex ratione voluptate temporibus maiores tempora molestiae iste magni, deserunt aspernatur, amet, numquam aliquam excepturi iure quae reprehenderit vero similique sequi? Esse at temporibus repellat laborum tempore! Consequatur maiores corporis voluptate deleniti molestiae ea. Ratione, tenetur repellat! Accusamus sint dicta beatae voluptates recusandae quibusdam perferendis ea, laborum porro, libero, ratione nesciunt modi nostrum impedit iste officia eaque. A ab pariatur quod corrupti quis.";
  const programme =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. A eaque nostrum eos commodi laudantium! Suscipit minus nemo ex ratione voluptate temporibus maiores tempora molestiae iste magni, deserunt aspernatur, amet, numquam aliquam excepturi iure quae reprehenderit vero similique sequi? Esse at temporibus repellat laborum tempore! Consequatur maiores corporis voluptate deleniti molestiae ea. Ratione, tenetur repellat! Accusamus sint dicta beatae voluptates recusandae quibusdam perferendis ea, laborum porro, libero, ratione nesciunt modi nostrum impedit iste officia eaque. A ab pariatur quod corrupti quis.";

  return (
    <Box
      p={3}
      mt={3}
      mb={10}
      sx={{
        boxShadow: "3",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Typography variant="h5" color="primary.dark" sx={{ fontWeight: "bold" }}>
        {" "}
        Plus d'informations
      </Typography>
      <>
        <Typography
          sx={{
            mt: 4,
            mb: 2,
            borderBottom: 1,
            borderColor: "#808080",
            width: "50%",
          }}
          variant="h6"
          component="div"
        >
          A propos du voyage
        </Typography>
        <Typography sx={{ textAlign: "justify" }}>
          {readMore ? programme : `${description.substring(0, 250)}...`}

          <Button onClick={() => setReadMore(!readMore)}> Lire plus</Button>
        </Typography>
      </>
      <Box mt={2}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Voir le programme du voyage</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ textAlign: "justify" }}>
                {description}
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default TripInfos;
