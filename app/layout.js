import "./globals.css";


export const metadata = {
  title: "Tethermax",
  description: "Tethermax",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
