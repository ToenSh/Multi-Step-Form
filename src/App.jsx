import { useState } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Steps from "./Components/Steps";
import AddOns from "./Components/AddOns";
import Personal from "./Components/Personal";
import Plan from "./Components/Plan";
import FinishingUp from "./Components/FinishingUp";
import ThankYou from "./Components/ThankYou";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Steps />}>
      <Route path="/" element={<Personal />} />
      <Route path="/select-plan" element={<Plan />} />
      <Route path="/add-ons" element={<AddOns />} />
      <Route path="/finishing-up" element={<FinishingUp />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
