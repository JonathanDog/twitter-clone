import '../styles.css'
import { Container } from "@mui/material"
// Add Pretier
function MyApp({ Component, pageProps }) {
  return <Container><Component {...pageProps} /></Container>
}

export default MyApp
