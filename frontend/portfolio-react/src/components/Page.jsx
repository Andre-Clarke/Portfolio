import { Container } from "@mui/material";

function Page({ children, variant }) {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          borderLeft: "solid",
          borderRight: "solid",
          borderColor:
            variant === "primary.dark" ? "secondary.dark" : "success.dark",
        }}
      >
        {children}
      </Container>
    </>
  );
}
export default Page;
