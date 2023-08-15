import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound"
import Header from "./components/Header";
import Banner from "./components/Banner";

const Photo = React.lazy(() => import('./features/Photo'))

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header/>

          <Routes>
            <Route path="/" element={<Navigate to="/photos"/>}/>
            <Route path="/photos/*" element={<Photo/>}/>
            <Route path="/" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
