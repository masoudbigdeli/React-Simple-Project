import { makeStyles } from "@mui/styles";

export default makeStyles({
    navbarItems: {
      direction: 'rtl',
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      marginTop: "0.6rem",
      fontSize: '1.2rem',
    },
    navItem:{
        margin: "10px",
        "&:hover":{
            transform: "scale(1.2)" 
        }
    }
  });

