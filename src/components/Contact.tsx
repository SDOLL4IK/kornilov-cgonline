import { Mail, Send, ExternalLink, Check } from "lucide-react";
import { useState } from "react";

const contacts = [
  {
    name: "IMDb",
    href: "https://www.imdb.com/name/nm18068801/",
    icon: ExternalLink,
    description: "Filmography",
    isLink: true,
  },
  {
    name: "Email",
    href: "",
    icon: Mail,
    description: "daniil.kornilov.06@gmail.com",
    isLink: false,
    isCopyable: true,
  },
  {
    name: "Telegram",
    href: "https://t.me/sdoll4ik",
    icon: Send,
    description: "@sdoll4ik",
    isLink: true,
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("daniil.kornilov.06@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = "daniil.kornilov.06@gmail.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Open for new projects and collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {contacts.map((contact) => {
            const content = (
              <div className="p-4 md:p-6 rounded-xl bg-secondary border border-border hover:border-white/50 transition-[border-color] duration-300 ease-in-out text-center h-full flex sm:flex-col items-center sm:items-center gap-4 sm:gap-0">
                <div className="w-10 h-10 md:w-12 md:h-12 sm:mx-auto sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  {contact.isCopyable && copied ? (
                    <Check className="w-5 h-5 md:w-6 md:h-6 text-green-400 animate-scale-in" />
                  ) : (
                    <contact.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  )}
                </div>
                <div className="text-left sm:text-center">
                  <h3 className="font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300 text-sm md:text-base">
                    {contact.isCopyable && copied ? "Copied!" : contact.name}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground break-all sm:break-normal select-text">
                    {contact.description}
                  </p>
                </div>
              </div>
            );

            if (contact.isLink) {
              return (
                <a
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  {content}
                </a>
              );
            }

            if (contact.isCopyable) {
              return (
                <button
                  key={contact.name}
                  onClick={handleCopyEmail}
                  className="group cursor-pointer text-left"
                >
                  {content}
                </button>
              );
            }

            return (
              <div key={contact.name} className="group cursor-default">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
