
export const metadata = { title: "Lotus Clean" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">{children}</body>
    </html>
  );
}
