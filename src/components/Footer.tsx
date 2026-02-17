const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Kornilov Daniil
        </p>
      </div>
    </footer>
  );
};

export default Footer;
