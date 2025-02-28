import { Container } from "@mui/material";

function Page({ children, variant }) {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "center",
          borderBottom: "dotted",
          textDecoration: "none",
        }}
      >
        {children}
      </Container>
    </>
  );
}
export default Page;
