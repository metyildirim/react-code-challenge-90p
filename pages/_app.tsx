import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import getConfig from "next/config";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Provider } from "react-redux";
import store from "../app/store";

const { publicRuntimeConfig } = getConfig();

const httpLink = createHttpLink({
  uri: publicRuntimeConfig.graphqlEndpoint,
});

const authLink = setContext((_, { headers }) => {
  const secret = publicRuntimeConfig.graphqlAdminSecret;
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": secret,
    },
  };
});

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Admin dashboard for users" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Provider>
    </>
  );
}

export default MyApp;
