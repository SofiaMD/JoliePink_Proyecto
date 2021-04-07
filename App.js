import React from 'react';
import Navigation from "./src/components/navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import { Provider as AuthProvider} from "./src/providers/AuthContext";
import { Provider as ShoppingCartProvider} from "./src/providers/ShoppingCartContext";
import { ThemeProvider } from "react-native-elements";
import theme from "./src/theme";
import LongTimers from "./src/utils/LongTimers";

export default function App() {

  LongTimers();

  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <Navigation/>
          </SafeAreaProvider>
        </ThemeProvider>
      </ShoppingCartProvider>
    </AuthProvider>
  );
}


