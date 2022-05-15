import { Grid, TextField, Box, Paper } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import FileBase from "react-file-base64";



const ImageInput = ({ tabImg, setTabImg, index }) => {
    const handelInputChange = e => {

    };
    return (<>
        <Paper elevation={5} >
            <img
                src={tabImg[index] === "" ? process.env.PUBLIC_URL + '/assets/fondBlanc.png' : tabImg[index]}
                style={{ width: "100%", height: 'auto', maxHeight: '200px' }}
            />
            {/* <TextField type={'file'} size='small' sx={{}} onChange={handelInputChange} /> */}
            <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => {
                    tabImg[index] = base64;  // je pense pas que ca vas fonctionner
                }}
            />
        </Paper>
    </>)
};

function tabInput() {


}

const ImageStack = () => {
    const [nbrImg] = useState(15);
    const refImg1 = useRef();
    const [tabImg, setTabImg] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);

    return (
        <>

            {tabImg.map((elt, index) => {
                return <Grid item xs={12} sm={6} md={3} key={'r' + index} >
                    <ImageInput tabImg={tabImg} setTabImg={setTabImg} index={index} />
                </Grid>
            })}
        </>
    );
};


export default ImageStack; 