import React from 'react';
import Navigation from "./src/components/navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";

import { Provider as AuthProvider} from "./src/providers/AuthContext";
import { Provider as ShoppingCartProvider} from "./src/providers/ShoppingCartContext";
import { Provider as PersonalInformationProvider} from "./src/providers/PersonalInformationContext";
import { Provider as PurchaseProvider} from "./src/providers/PurchaseContext";
import {Provider as UserProvider} from "./src/providers/UserContext";

import { ThemeProvider } from "react-native-elements";
import theme from "./src/theme";
import LongTimers from "./src/utils/LongTimers";

export default function App() {

  LongTimers();

  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <PersonalInformationProvider>
          <PurchaseProvider>
            <UserProvider>
              <ThemeProvider theme={theme}>
                <SafeAreaProvider>
                  <Navigation/>
                </SafeAreaProvider>
              </ThemeProvider>
            </UserProvider>
          </PurchaseProvider>
        </PersonalInformationProvider>
      </ShoppingCartProvider>
    </AuthProvider>
  );
}


