import "../styles/globals.css";
import { DBProvider } from "../utils/dbStorage";

import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../styletron";

function MyApp({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <DBProvider>
          <Component {...pageProps} />
        </DBProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
