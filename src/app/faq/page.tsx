import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const staticFaqs = [
    {
      question: "ما هي مواعيد الدوام في المعهد؟",
      answer: "مواعيد الدوام الرسمي في المعهد هي من السبت إلى الخميس، من الساعة 8 صباحًا حتى 8 مساءً."
    },
    {
      question: "هل الشهادات التي يمنحها المعهد معتمدة؟",
      answer: "نعم، جميع شهاداتنا معتمدة من وزارة التعليم الفني والتدريب المهني، بالإضافة إلى اعتمادات دولية لبعض الدورات المتخصصة."
    },
    {
      question: "كيف يمكنني التسجيل في إحدى الدورات؟",
      answer: "يمكنك التسجيل إلكترونيًا عبر موقعنا، أو من خلال التواصل معنا عبر واتساب، أو بزيارة مقر المعهد مباشرة في قسم التسجيل."
    },
    {
        question: "ما هي طرق الدفع المتاحة؟",
        answer: "نوفر طرق دفع متعددة تشمل الدفع نقدًا في المعهد، أو عبر الإيداع في حسابنا لدى الصرافات البنكية."
    },
    {
      question: "هل هناك دورات متاحة عبر الإنترنت (أونلاين)؟",
      answer: "نعم، نقدم مجموعة من الدورات التدريبية عبر الإنترنت. يمكنك الاطلاع على الدورات المتاحة وتصنيفها كـ 'أونلاين' في صفحة الدورات."
    },
    {
        question: "أين يقع المعهد؟",
        answer: "يقع المعهد في المكلا - فوه - الانشاءات - مقابل رئاسة الجامعة - مبنى مركز الانشاءات الطبي - الدور الثالث."
    },
    {
        question: "ماذا يقدم المعهد من خدمات؟",
        answer: "نقدم مجموعة متكاملة من الخدمات التعليمية التي تشمل دورات تدريبية حضورية وأونلاين، أمسيات ثقافية، كتب تعليمية من إعداد مدربينا، بالإضافة إلى خدمات الاستشارات والتأهيل المهني."
    }
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">الأسئلة الشائعة</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          أجوبة عن أكثر الأسئلة التي تردنا من الطلاب والمهتمين بالانضمام إلى مجتمعنا التعليمي.
        </p>
      </section>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
        {staticFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-right">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
            </AccordionContent>
            </AccordionItem>
        ))}
        </Accordion>
      </div>
    </div>
  );
}
