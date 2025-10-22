import { Navigate, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <iframe
            src="/dd.html"
            style={{ width: "100%", height: "100vh", border: "none" }}
            title="DD"
          />
        }
      />
    </Routes>
  )
}

