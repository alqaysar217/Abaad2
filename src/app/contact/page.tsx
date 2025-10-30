import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">تواصل معنا</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          نحن هنا لمساعدتك. سواء كان لديك استفسار عن دورة، أو اقتراح، أو ترغب في التسجيل، لا تتردد في التواصل معنا.
        </p>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>أرسل لنا رسالة</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="الاسم الكامل" />
                  <Input type="email" placeholder="البريد الإلكتروني" />
                </div>
                <Input placeholder="رقم الهاتف" />
                <Textarea placeholder="رسالتك..." rows={6} />
                <Button type="submit" className="w-full">إرسال الرسالة</Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info & Map */}
        <div className="lg:col-span-1 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>معلومات التواصل</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a href="https://wa.me/967776999568" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-md hover:bg-secondary">
                <MessageCircle className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">واتساب</p>
                  <p className="text-sm text-muted-foreground">+967 776 999 568</p>
                </div>
              </a>
              <a href="tel:+967776999568" className="flex items-center gap-3 p-3 rounded-md hover:bg-secondary">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">اتصال مباشر</p>
                  <p className="text-sm text-muted-foreground">+967 776 999 568</p>
                </div>
              </a>
              <a href="mailto:abaadinstitute24@gmail.com" className="flex items-center gap-3 p-3 rounded-md hover:bg-secondary">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">البريد الإلكتروني</p>
                  <p className="text-sm text-muted-foreground">abaadinstitute24@gmail.com</p>
                </div>
              </a>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>موقعنا</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
               <div className="aspect-w-16 aspect-h-9">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.9868953112347!2d44.1979440751152!3d15.349694985350865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1603db45f4318373%3A0x44604a11f51f50c0!2sAbaad%20Institute!5e0!3m2!1sen!2s" 
                width="100%" 
                height="350" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
