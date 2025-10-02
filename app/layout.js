export const metadata = { title: "Portfólio do Dilsomar" };
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{margin: 0}}>{children}</body>
    </html>
  );
}