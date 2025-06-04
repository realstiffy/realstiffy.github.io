import "../styles/globals.css";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <div className="page-wrapper">{children}</div>
      </body>
    </html>
  );
}
