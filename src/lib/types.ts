export type NavLink = {
  href: string;
  label: string;
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
  tags?: ('popular' | 'discount')[];
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
    website?: string;
  };
};

export type Book = {
  id: string;
  title: string;
  author: string;
  rating: number;
  imageId: string;
  description: string;
  topics: string[];
  pages: number;
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
