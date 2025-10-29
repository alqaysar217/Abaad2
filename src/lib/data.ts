import type { Course, Trainer, Book, Testimonial, NewsArticle } from './types';

export const ALL_COURSES: Course[] = [
  {
    id: 'c1',
    slug: 'web-development-bootcamp',
    title: 'دورة تطوير الويب الشاملة',
    category: 'البرمجة',
    trainerName: 'علي حسن',
    trainerSlug: 'ali-hassan',
    duration: '8 أسابيع',
    rating: 4.9,
    tags: ['popular', 'discount'],
    imageId: 'course-programming',
    description: 'تعلم تطوير وبناء مواقع وتطبيقات الويب الحديثة من الصفر إلى الاحتراف باستخدام أحدث التقنيات مثل React و Node.js.',
    outline: ['مقدمة في HTML, CSS, JavaScript', 'أساسيات React', 'بناء واجهات تفاعلية', 'التعامل مع APIs', 'قواعد بيانات MongoDB', 'نشر المشاريع'],
    studentReviews: [
      { id: 'sr1', name: 'سارة خالد', quote: 'دورة ممتازة غيرت مساري المهني!', rating: 5, imageId: 'testimonial-2' },
    ],
  },
  {
    id: 'c2',
    slug: 'graphic-design-masterclass',
    title: 'ماستر كلاس التصميم الجرافيكي',
    category: 'التصميم والرسم',
    trainerName: 'فاطمة الزهراء',
    trainerSlug: 'fatima-alzahraa',
    duration: '6 أسابيع',
    rating: 4.8,
    tags: ['popular'],
    imageId: 'course-design',
    description: 'أتقن فنون التصميم الجرافيكي باستخدام Adobe Photoshop و Illustrator. تعلم تصميم الشعارات، الهويات البصرية، والمزيد.',
    outline: ['مبادئ التصميم', 'استخدام Photoshop', 'إتقان Illustrator', 'تصميم الهوية البصرية', 'مشروع التخرج'],
    studentReviews: [],
  },
  {
    id: 'c3',
    slug: 'project-management-professional',
    title: 'إدارة المشاريع الاحترافية (PMP)',
    category: 'إدارة',
    trainerName: 'محمد عبدالله',
    trainerSlug: 'mohammed-abdullah',
    duration: '5 أسابيع',
    rating: 4.7,
    imageId: 'course-management',
    description: 'دورة تحضيرية لشهادة PMP العالمية. تعلم كيفية إدارة المشاريع بكفاءة وفعالية من البداية إلى النهاية.',
    outline: ['مقدمة لإدارة المشاريع', 'دورة حياة المشروع', 'إدارة النطاق والوقت والتكلفة', 'إدارة المخاطر', 'التحضير للاختبار'],
    studentReviews: [],
  },
  {
    id: 'c4',
    slug: 'english-for-business',
    title: 'اللغة الإنجليزية للأعمال',
    category: 'اللغات',
    trainerName: 'فاطمة الزهراء',
    trainerSlug: 'fatima-alzahraa',
    duration: '12 أسبوعًا',
    rating: 4.8,
    tags: ['popular'],
    imageId: 'course-languages',
    description: 'طور مهاراتك في اللغة الإنجليزية لتتناسب مع بيئة العمل. تعلم كتابة الايميلات، تقديم العروض، والتواصل بثقة.',
    outline: ['المحادثات المهنية', 'كتابة التقارير والايميلات', 'مهارات التفاوض', 'تقديم العروض التقديمية'],
    studentReviews: [],
  },
  {
    id: 'c5',
    slug: 'first-aid-basics',
    title: 'مبادئ الإسعافات الأولية',
    category: 'الطب',
    trainerName: 'علي حسن',
    trainerSlug: 'ali-hassan',
    duration: 'أسبوع واحد',
    rating: 4.9,
    imageId: 'course-medicine',
    description: 'تعلم المهارات الأساسية لتقديم الإسعافات الأولية في حالات الطوارئ. دورة ضرورية للجميع.',
    outline: ['تقييم الحالة', 'التعامل مع الجروح والكسور', 'الإنعاش القلبي الرئوي (CPR)', ' حالات الاختناق'],
    studentReviews: [],
  },
  {
    id: 'c6',
    slug: 'kids-programming-scratch',
    title: 'البرمجة للأطفال باستخدام سكراتش',
    category: 'الأطفال',
    trainerName: 'محمد عبدالله',
    trainerSlug: 'mohammed-abdullah',
    duration: '4 أسابيع',
    rating: 5.0,
    tags: ['popular'],
    imageId: 'course-kids',
    description: 'دع طفلك يكتشف عالم البرمجة بطريقة ممتعة وتفاعلية من خلال منصة Scratch الشهيرة.',
    outline: ['مقدمة إلى سكراتش', 'بناء القصص التفاعلية', 'تصميم الألعاب البسيطة', 'مشاركة المشاريع'],
    studentReviews: [],
  },
];

export const LATEST_COURSES = ALL_COURSES.slice(0, 3);

export const ALL_TRAINERS: Trainer[] = [
  {
    id: 't1',
    slug: 'ali-hassan',
    name: 'علي حسن',
    field: 'برمجة وطب',
    rating: 4.9,
    imageId: 'trainer-1',
    bio: 'مدرب معتمد وخبير في تطوير الويب وتطبيقات الهاتف. شغوف بتبسيط المفاهيم المعقدة وجعل البرمجة في متناول الجميع. حاصل على شهادات في الإسعافات الأولية المتقدمة.',
    qualifications: ['ماجستير في علوم الحاسوب', 'شهادة مدرب معتمد من Google'],
    accreditations: ['مدرب معتمد من Microsoft', 'مدرب إسعافات أولية معتمد'],
    coursesCount: 25,
    studentsCount: 1500,
    socials: { linkedin: 'https://www.linkedin.com/in/ali-hassan', twitter: 'https://twitter.com/ali_hassan', facebook: 'https://www.facebook.com/ali.hassan', instagram: 'https://www.instagram.com/ali.hassan' },
    reviews: [
      { id: 'tr1', studentName: 'أحمد ياسين', rating: 5, comment: 'مدرب متمكن وشرحه واضح جداً. استفدت منه الكثير.', imageId: 'testimonial-1' },
      { id: 'tr2', studentName: 'نورة سالم', rating: 4, comment: 'كاريزما عالية وقدرة على إيصال المعلومة بسهولة.', imageId: 'testimonial-2' },
    ],
    whatsapp: '967776999568'
  },
  {
    id: 't2',
    slug: 'fatima-alzahraa',
    name: 'فاطمة الزهراء',
    field: 'تصميم ولغات',
    rating: 4.8,
    imageId: 'trainer-2',
    bio: 'مصممة جرافيك ومترجمة لغات بخبرة تزيد عن 10 سنوات. أعمل على تمكين المتدربين من التعبير عن إبداعهم والتواصل بفعالية عبر الثقافات.',
    qualifications: ['بكالوريوس في الفنون الجميلة', 'شهادة TESOL لتدريس الإنجليزية'],
    accreditations: ['Adobe Certified Expert (ACE)', 'عضو جمعية المترجمين'],
    coursesCount: 40,
    studentsCount: 2200,
    socials: { linkedin: 'https://linkedin.com/in/fatima-alzahraa', website: 'https://fatima-designs.com', facebook: 'https://www.facebook.com/fatima.alzahraa', instagram: 'https://www.instagram.com/fatima.alzahraa' },
    reviews: [
        { id: 'tr3', studentName: 'سارة خالد', rating: 5, comment: 'المدربة فاطمة رائعة وملهمة، تجعل التعلم ممتعًا.', imageId: 'testimonial-2' }
    ],
    whatsapp: '967776999568'
  },
  {
    id: 't3',
    slug: 'mohammed-abdullah',
    name: 'محمد عبدالله',
    field: 'إدارة وأطفال',
    rating: 4.7,
    imageId: 'trainer-3',
    bio: 'استشاري إدارة مشاريع معتمد ومطور برامج تعليمية للأطفال. أؤمن بأهمية بناء جيل قيادي ومبدع منذ الصغر.',
    qualifications: ['شهادة PMP', 'دبلوم في التربية'],
    accreditations: ['Project Management Institute (PMI)', 'LEGO® Education Academy Certified'],
    coursesCount: 30,
    studentsCount: 1800,
    socials: { twitter: 'https://twitter.com/mohammed_abdullah', website: 'https://mohammed-abdullah.com', facebook: 'https://www.facebook.com/mohammed.abdullah', instagram: 'https://www.instagram.com/mohammed.abdullah' },
    reviews: [
      { id: 'tr4', studentName: 'عمر الصالح', rating: 5, comment: 'خبرة كبيرة في مجاله وقدرة على تبسيط أعقد المفاهيم. شكراً مهندس محمد.', imageId: 'testimonial-3' },
    ],
    whatsapp: '967776999568'
  },
];

export const ALL_BOOKS: Book[] = [
  {
    id: 'b1',
    title: 'أساسيات البرمجة بلغة Python',
    author: 'علي حسن',
    rating: 4.9,
    imageId: 'book-1',
    description: 'دليل شامل للمبتدئين لتعلم البرمجة من الصفر باستخدام لغة بايثون، إحدى أسهل وأقوى لغات البرمجة.',
    topics: ['المتغيرات وأنواع البيانات', 'الحلقات التكرارية والشروط', 'الدوال والكائنات', 'مشاريع عملية'],
    pages: 350,
  },
  {
    id: 'b2',
    title: 'سيكولوجية الألوان في التصميم',
    author: 'فاطمة الزهراء',
    rating: 4.8,
    imageId: 'book-2',
    description: 'اكتشف كيف تؤثر الألوان على المشاعر والإدراك، وتعلم كيفية استخدامها بفعالية في مشاريعك التصميمية.',
    topics: ['نظرية الألوان', 'معاني الألوان في الثقافات المختلفة', 'تطبيقات عملية في العلامات التجارية', 'أمثلة ودراسات حالة'],
    pages: 220,
  },
  {
    id: 'b3',
    title: 'دليل القائد الصغير',
    author: 'محمد عبدالله',
    rating: 4.7,
    imageId: 'book-3',
    description: 'كتاب موجه للأطفال واليافعين لتنمية المهارات القيادية مثل حل المشكلات، اتخاذ القرار، والعمل الجماعي.',
    topics: ['ما هو القائد؟', 'كيف أثق بنفسي؟', 'فن الاستماع والتواصل', 'قصص قادة ملهمين'],
    pages: 150,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'tm1',
    name: 'أحمد ياسين',
    course: 'دورة تطوير الويب الشاملة',
    quote: 'كانت الدورة نقطة تحول في حياتي المهنية. المدرب كان رائعًا والمحتوى عملي ومباشر. أنصح بها بشدة!',
    imageId: 'testimonial-1',
  },
  {
    id: 'tm2',
    name: 'سارة خالد',
    course: 'ماستر كلاس التصميم الجرافيكي',
    quote: 'تعلمت الكثير في وقت قصير. البيئة التعليمية في المعهد محفزة جدًا، والمدربة فاطمة كانت ملهمة.',
    imageId: 'testimonial-2',
  },
  {
    id: 'tm3',
    name: 'عمر الصالح',
    course: 'إدارة المشاريع الاحترافية (PMP)',
    quote: 'بفضل هذه الدورة، تمكنت من اجتياز اختبار PMP من المحاولة الأولى. شكرًا لمعهد أبعاد.',
    imageId: 'testimonial-3',
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
    {
      id: 'n1',
      slug: 'new-partnership-announcement',
      title: 'معهد أبعاد يعقد شراكة استراتيجية مع أكاديمية ABC',
      date: '25 يوليو 2024',
      type: 'announcement',
      imageId: 'news-2',
      summary: 'في خطوة لتعزيز جودة التعليم، وقع معهد أبعاد اتفاقية شراكة مع أكاديمية ABC الرائدة لتبادل الخبرات وتطوير برامج مشتركة.',
      content: 'في خطوة تهدف إلى تعزيز جودة المخرجات التعليمية وتوسيع آفاق التعاون الأكاديمي، أعلن معهد أبعاد للدراسات والتدريب عن توقيع شراكة استراتيجية مع أكاديمية ABC الدولية. تتضمن هذه الشراكة تبادل الخبرات بين المدربين، وتطوير دورات تدريبية مشتركة، ومنح شهادات معتمدة من كلا الطرفين، مما يفتح فرصًا أوسع للمتدربين في سوق العمل المحلي والدولي.'
    },
    {
      id: 'n2',
      slug: 'summer-discounts-2024',
      title: 'لا تفوت عروض الصيف! خصومات تصل إلى 30% على دورات مختارة',
      date: '15 يوليو 2024',
      type: 'offer',
      imageId: 'news-3',
      summary: 'يقدم معهد أبعاد خصومات خاصة بمناسبة فصل الصيف على مجموعة من الدورات الأكثر طلباً في مجالات البرمجة والتصميم.',
      content: 'بمناسبة حلول فصل الصيف، يسر معهد أبعاد أن يعلن عن إطلاق حملة "صيفك مهارات" التي تقدم خصومات استثنائية تصل إلى 30% على باقة من الدورات التدريبية المتميزة. تشمل العروض دورات تطوير الويب، والتصميم الجرافيكي، والتسويق الرقمي. هذه فرصتكم لتطوير مهاراتكم واستثمار وقتكم بأفضل شكل ممكن. العروض سارية حتى نهاية شهر أغسطس.'
    },
    {
      id: 'n3',
      slug: 'graduation-ceremony-june',
      title: 'احتفالية تخرج دفعة يونيو 2024',
      date: '30 يونيو 2024',
      type: 'event',
      imageId: 'news-1',
      summary: 'نظم معهد أبعاد حفل تخرج بهيج لطلاب دفعة يونيو، بحضور المدربين وأهالي الخريجين.',
      content: 'في أجواء مليئة بالفخر والبهجة، احتفل معهد أبعاد بتخريج دفعة جديدة من طلابه لشهر يونيو 2024. أقيم الحفل في القاعة الرئيسية للمعهد وشهد حضورًا لافتًا من أهالي الخريجين وأصدقائهم. تخلل الحفل كلمات ملهمة من إدارة المعهد والمدربين، وتم توزيع الشهادات على الخريجين الذين عبروا عن سعادتهم وامتنانهم للتجربة التعليمية الفريدة التي حصلوا عليها.'
    }
  ];
