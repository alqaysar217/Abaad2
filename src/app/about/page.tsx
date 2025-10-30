
import Image from 'next/image';
import { Award, Target, Eye, Users, BookOpen, ShieldCheck, MessageCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { TESTIMONIALS } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'مدربون معتمدون',
    description: 'نخبة من أفضل المدربين الخبراء والمعتمدين في مجالاتهم لضمان أعلى جودة تعليمية.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'شهادات رسمية',
    description: 'شهادات معتمدة ومعترف بها تساعدك على تعزيز سيرتك الذاتية وفتح أبواب الفرص الوظيفية.',
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: 'تدريب عملي وتطبيقي',
    description: 'نركز على الجانب العملي والتطبيقي لضمان اكتسابك المهارات التي يتطلبها سوق العمل.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'بيئة تعليمية محفزة',
    description: 'قاعات مجهزة بأحدث التقنيات ومجتمع طلابي داعم يساعد على تبادل المعرفة والخبرات.',
  },
];

const aboutHeroImage = PlaceHolderImages.find(p => p.id === 'about-hero');

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
            {aboutHeroImage && <Image src={aboutHeroImage.imageUrl} alt="About Abaad Institute" layout="fill" objectFit="cover" className="absolute inset-0 opacity-20" data-ai-hint={aboutHeroImage.imageHint} />}
            <div className="relative">
                <h1 className="text-4xl md:text-5xl font-headline mb-4">عن معهد أبعاد</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">
                نحن مؤسسة تعليمية رائدة متخصصة في تقديم برامج تدريبية وتأهيلية عالية الجودة تهدف إلى بناء مستقبل مشرق لطلابنا.
                </p>
            </div>
        </div>
      </section>
      
      {/* Vision, Mission, Goals */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Eye className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-headline mb-2">رؤيتنا</h2>
              <p className="text-muted-foreground">أن نكون المعهد الرائد في صناعة المعرفة وبناء كفاءات المستقبل في المنطقة.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-headline mb-2">رسالتنا</h2>
              <p className="text-muted-foreground">تقديم تجربة تعليمية مبتكرة وعملية تمكّن الأفراد من تحقيق طموحاتهم المهنية والشخصية.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-headline mb-2">أهدافنا</h2>
              <p className="text-muted-foreground">تطوير مهارات المتدربين، مواكبة سوق العمل، تعزيز الإبداع، وبناء شراكات فعالة.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline text-primary">لماذا تختار معهد أبعاد؟</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              نحن نقدم أكثر من مجرد دورات تدريبية، نحن نقدم لك طريقًا للنجاح.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm text-center transform transition-transform duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline text-primary">من داخل المعهد</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              شاهد لمحات من بيئتنا التعليمية وقاعاتنا المجهزة وأنشطتنا التفاعلية.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {PlaceHolderImages.filter(p => p.id.startsWith('gallery-')).map((img, index) => (
                <div key={img.id} className="overflow-hidden rounded-lg shadow-md">
                    <Image 
                        src={img.imageUrl} 
                        alt={`Abaad gallery image ${index + 1}`} 
                        width={400} 
                        height={400} 
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                        data-ai-hint={img.imageHint}
                    />
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline text-primary">ماذا يقول طلابنا عنا؟</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              نفخر بثقة طلابنا ونسعد بمشاركة قصص نجاحهم وتجاربهم الملهمة في معهد أبعاد.
            </p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {TESTIMONIALS.map(testimonial => {
              const testimonialImage = PlaceHolderImages.find(p => p.id === testimonial.imageId);
              return (
                <div key={testimonial.id} className="break-inside-avoid">
                  <Card className="h-full bg-background">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        {testimonialImage && (
                          <Image
                            src={testimonialImage.imageUrl}
                            alt={testimonial.name}
                            width={56}
                            height={56}
                            className="rounded-full border-2 border-accent"
                            data-ai-hint={testimonialImage.imageHint}
                          />
                        )}
                        <div>
                          <h3 className="font-bold text-lg">{testimonial.name}</h3>
                          <p className="text-sm text-primary">{testimonial.course}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground italic relative pr-8">
                        <MessageCircle className="absolute right-0 top-0 h-5 w-5 text-accent" />
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
