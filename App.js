import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./screens/Home";
import SafeView from "./screens/SafeView";

export default function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <SafeView>
        <Home />
      </SafeView>
    </QueryClientProvider>
  );
}
