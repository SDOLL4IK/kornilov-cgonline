const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container max-w-4xl mx-auto text-center space-y-6">
        <p className="text-3xl md:text-5xl font-bold text-primary">
          Я люблю Дашу, и она любит меня ❤️
        </p>
        <p className="text-muted-foreground text-sm">
          © {currentYear} Корнилов Даниил. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
