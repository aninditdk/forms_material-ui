import React from 'react'
import { QueryClient,QueryClientProvider } from 'react-query'
import FormData from './FormData'
import Tabledata from './Tabledata';

const queryClient = new QueryClient();
function App() {
  return (
  <div>
  <QueryClientProvider client={queryClient}>
    <FormData />
  </QueryClientProvider>
  </div>
  );
}

export default App;