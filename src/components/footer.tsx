export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t py-4 text-center text-sm text-muted-foreground">
      <p>
        &copy; {currentYear} T & E Empaques y Soluciones. Todos los derechos reservados.
      </p>
    </footer>
  );
}
