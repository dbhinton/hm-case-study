import { Paper, styled } from "@mui/material";



const Root = styled('div')({
    flexGrow: 1,
    padding: '16px',
  });
  
  const Section = styled(Paper)(({ theme }) => ({
    padding: '16px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '@media (max-width: 600px)': {
      padding: '8px',
    },
  }));


  export { Root, Section }