import { Routes, Route } from "react-router-dom";
import "./globals.css";
import { Shop, Home, Leasing } from "./_root/pages";
import RootLayout from "./_root/pages/RootLayout";
import Tenant from "./_root/pages/Tenant";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="leasing" element={<Leasing />} />
          <Route path="tenant" element={<Tenant />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
