
export type NavLink = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  category: string;
  trainerName: string;
  trainerSlug: string;
  duration: string;
  rating: number;
  tags?: ('popular' | 'discount' | 'online')[];
  imageId: string;
  description: string;
  outline: string[];
  studentReviews: {
    id: string;
    name: string;
    quote: string;
    rating: number;
    imageId: string;
  }[];
};

export type TrainerReview = {
  id: string;
  studentName: string;
  rating: number;
  comment: string;
  imageId:string;
};

export type Trainer = {
  id: string;
  slug: string;
  name: string;
  field: string;
  rating: number;
  imageId: string;
  bio: string;
  qualifications: string[];
  accreditations: string[];
  coursesCount: number;
  studentsCount: number;
  socials: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    website?: string;
  };
  reviews: TrainerReview[];
  whatsapp: string;
};

export type BookReview = {
  id: string;
  name: string;
  rating: number;
  quote: string;
  imageId: string;
};

export type Book = {
  id: string;
  slug: string;
  title: string;
  author: string;
  rating: number;
  imageId: string;
  description: string;
  topics: string[];
  pages: number;
  reviews: BookReview[];
};

export type Testimonial = {
  id: string;
  name: string;
  course: string;
  quote: string;
  imageId: string;
};

export type NewsArticle = {
  id: string;
  slug: string;
  title: string;
  date: string;
  type: 'event' | 'announcement' | 'offer';
  imageId: string;
  summary: string;
  content: string;
};

