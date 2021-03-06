import { Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h1">Home</Typography>
            <Link href="create">Create a new card</Link>
          </Grid>
          <Grid item xs={12}></Grid>

          <Grid item xs={12}>
            <Image
              src="/lean-coffee.jpg"
              alt="Lean Coffe"
              width={640}
              height={428}
              layout="responsive"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
