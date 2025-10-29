import { FaqSection } from "@/components/faq-section";

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">الأسئلة الشائعة</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          أجوبة عن أكثر الأسئلة التي تردنا من الطلاب والمهتمين بالانضمام إلى مجتمعنا التعليمي.
        </p>
      </section>

      <FaqSection />
    </div>
  );
}
