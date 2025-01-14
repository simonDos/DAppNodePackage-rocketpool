export interface Config {
  network: string;
  brainAPIUrl: string;
  brainUIUrl: string;
  w3sUrl: string;
  rpExplorerUrl: string;
  explorerUrl: string;
  package: string;
}

const network = process.env.REACT_APP_NETWORK || "prater";
const apiBaseUrl = network === "mainnet" ? "http://rocketpool.dappnode:3000" : "http://rocketpool-testnet.public.dappnode:3000";
export default apiBaseUrl;