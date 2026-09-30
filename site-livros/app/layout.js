import "./globals.css";

export const metadata = {
  title: "Trilogia Modo Ação",
  description: "Uma trilogia prática para sair da inércia, construir disciplina e transformar execução em direção de vida."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}