import { Mail, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    name: "IMDb",
    href: "https://www.imdb.com/name/nm18068801/",
    icon: ExternalLink,
    description: "Моя фильмография",
  },
  {
    name: "Email",
    href: "mailto:daniil.kornilov.06@gmail.com",
    icon: Mail,
    description: "daniil.kornilov.06@gmail.com",
  },
  {
    name: "Telegram",
    href: "https://t.me/sdoll4ik",
    icon: Send,
    description: "@sdoll4ik",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-card/50">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Связаться со мной</h2>
          <p className="text-muted-foreground text-lg">
            Открыт для новых проектов и сотрудничества
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-6 rounded-xl bg-secondary border border-border hover:border-primary/50 transition-all duration-300 hover:glow-sm text-center h-full">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {contact.name}
                </h3>
                <p className="text-sm text-muted-foreground">{contact.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-sm"
          >
            <a href="mailto:daniil.kornilov.06@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Написать письмо
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
