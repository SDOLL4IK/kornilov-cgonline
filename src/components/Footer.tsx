const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Даниил Корнилов. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
