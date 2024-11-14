"use client"

import { store } from "@/redux/store";
import { Provider } from "react-redux";

interface ReduxProvidersProps {
  children: React.ReactNode;
}

const ReduxProviders = ({ children }: ReduxProvidersProps) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ReduxProviders;
