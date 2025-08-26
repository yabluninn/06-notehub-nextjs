import TanstackProvider from "./providers/TanstackProvider";

export const metadata = {
  title: "Notehub",
  description: "Notes CRUD with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
