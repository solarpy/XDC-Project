import { Inter } from "next/font/google";
import Navbar from "../components/global/navbar";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="m-6">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
