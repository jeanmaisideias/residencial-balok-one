export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-end h-14">
        <a
          href="#condições"
          className="text-sm font-semibold text-primary hover:text-whatsapp transition-colors"
        >
          Ver condições
        </a>
      </div>
    </header>
  );
}
