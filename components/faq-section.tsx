"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Que experiencia profesional tienes?",
    answer:
      "He trabajado como Fullstack Junior en un sistema ERP empresarial, donde desarrolle modulos completos tanto en frontend (React) como en backend (Laravel), manejando bases de datos SQL y APIs REST.",
  },
  {
    question: "Que tecnologias dominas?",
    answer:
      "Mi stack principal incluye HTML, CSS, JavaScript, TypeScript, React en el frontend, y PHP con Laravel, Python y SQL en el backend. Tambien tengo experiencia con Git, herramientas de diseño y desarrollo de videojuegos con Unity.",
  },
  {
    question: "Trabajas en equipo?",
    answer:
      "Definitivamente. Como presidente de DEVA, una agrupacion de mas de 20 estudiantes, coordino equipos multidisciplinarios en proyectos de desarrollo de videojuegos y arte digital. La colaboracion es parte fundamental de mi flujo de trabajo.",
  },
  {
    question: "Estas disponible para trabajar?",
    answer:
      "Si, actualmente estoy abierto a oportunidades de trabajo como desarrollador fullstack, ya sea freelance, medio tiempo o tiempo completo. No dudes en contactarme para discutir proyectos o colaboraciones.",
  },
  {
    question: "Que tipo de proyectos te interesan?",
    answer:
      "Me interesan proyectos de desarrollo web, aplicaciones empresariales, plataformas SaaS y por supuesto, el desarrollo de videojuegos. Disfruto los retos tecnicos que me permiten aprender nuevas tecnologias y crecer profesionalmente.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm text-primary">05. FAQ</p>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="border-border"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
