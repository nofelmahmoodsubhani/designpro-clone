export interface Testimonial {
  id: number;
  text: string;
  name: string;
  title: string;
  avatar: string;
  company: string;
  rating: number;
  featured: boolean;
}

export interface TestimonialFilters {
  company?: string;
  rating?: number;
  featured?: boolean;
}

export interface TestimonialSort {
  field: 'name' | 'company' | 'rating' | 'id';
  direction: 'asc' | 'desc';
}
