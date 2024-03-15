import Header from "../components/header";

export default function HoomLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
