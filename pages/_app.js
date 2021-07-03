import "../styles/globals.css";
import { DBProvider } from "../utils/dbStorage";

function MyApp({ Component, pageProps }) {
  return (
    <DBProvider>
      <Component {...pageProps} />
    </DBProvider>
  );
}

export default MyApp;
