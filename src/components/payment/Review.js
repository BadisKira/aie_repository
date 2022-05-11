import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const rooms = [
  {
    name: "Chambre Single",
    qte: 1,
    price: "15000",
  },
  {
    name: "Chambre Suite",
    qte: 0,

    price: "35000",
  },
];

const payments = [
  { name: "Type de paiement", detail: "CCP" },
  { name: "Nom et prénom", detail: "Gorge Blanco" },
  { name: "Num compte + clé", detail: "xxxx-xxxx-xxxx-1234" },
];

export default function Review() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Details de la reservation
      </Typography>
      <List disablePadding>
        {rooms.map((room) => (
          <ListItem key={room.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={room.name} secondary={room.qte} />
            <Typography variant="body2">{room.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            15000.00 DZD
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Details de paiement
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
