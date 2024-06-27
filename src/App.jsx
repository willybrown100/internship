import { BrowserRouter, Form, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Analytics from "./pages/Analytics"
import Customers from "./pages/Customers"
import Home from "./pages/Home"
import Income from "./pages/Income"
import More from "./pages/More"
import Mystore from "./pages/Mystore"
import AppLayout from "./components/AppLayout"
import StoreItems from "./components/StoreItems"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Ford from "./pages/FormContainer"
import FormContainer from "./pages/FormContainer"

const queryClient=new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:60 * 1000
    }
  }
 })

function App() {
return   <>

<QueryClientProvider client={queryClient}>

<BrowserRouter>
<Routes>
  <Route  element={<AppLayout/>}>
  <Route path="/" index element={<Home />} />
  {/* <Route path="contact" element={<Contact/>} /> */}
  <Route path="mystore" element={<Mystore />} >
  <Route index  element={<StoreItems/>}/>
  </Route>
  <Route path="form" element={<FormContainer/>}/>
  <Route path="income" element={<Income />} />
  <Route path="Analytics" element={<Analytics />} />
  <Route path="customer" element={<Customers />} />
  <Route path="more" element={<More />} />
  </Route>
</Routes>

</BrowserRouter>
</QueryClientProvider>
</>
}

export default App
