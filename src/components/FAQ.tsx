 import { HelpCircle } from "lucide-react";
 import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from "@/components/ui/accordion";
 
 const faqItems = [
   {
     question: "Какие задачи вы берёте в работу?",
     answer:
       "В основном специализируюсь на клинапе (удаление нежелательных объектов, проводов, маркеров), интеграции CGI в отснятый материал, ротоскопинге и кеинге. Также могу помочь с цветокоррекцией и matchmove.",
   },
   {
     question: "Какие сроки выполнения работы?",
     answer:
       "Сроки зависят от сложности и объёма проекта. Обычно небольшие задачи занимают 1-3 дня, средние проекты — около недели. Точные сроки обсуждаем после оценки материала.",
   },
   {
     question: "Как происходит оплата?",
     answer:
       "Работаю с предоплатой 50% для новых клиентов. Для постоянных партнёров возможна постоплата. Принимаю переводы на карту и криптовалюту.",
   },
   {
     question: "Можно ли увидеть примеры работ?",
     answer:
       "Да, мой showreel находится в начале страницы. Также могу показать дополнительные примеры по запросу — некоторые работы под NDA и не могут быть опубликованы.",
   },
 ];
 
 const FAQ = () => {
   return (
     <section id="faq" className="py-16 md:py-24 px-4">
       <div className="container max-w-3xl mx-auto">
         <div className="flex items-center gap-3 mb-8 md:mb-12">
           <div className="p-2 rounded-lg bg-primary/10">
             <HelpCircle className="w-5 h-5 md:w-6 md:h-6 text-primary" />
           </div>
           <h2 className="text-2xl md:text-4xl font-bold">Частые вопросы</h2>
         </div>
 
         <Accordion type="single" collapsible className="space-y-3">
           {faqItems.map((item, index) => (
             <AccordionItem
               key={index}
               value={`item-${index}`}
               className="bg-card/50 border border-border rounded-xl px-4 md:px-6 data-[state=open]:border-primary/30 transition-colors"
             >
               <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:text-primary py-4 md:py-5">
                 {item.question}
               </AccordionTrigger>
               <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4 md:pb-5 leading-relaxed">
                 {item.answer}
               </AccordionContent>
             </AccordionItem>
           ))}
         </Accordion>
       </div>
     </section>
   );
 };
 
 export default FAQ;