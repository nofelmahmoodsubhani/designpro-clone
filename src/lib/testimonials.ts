import testimonialsData from '@/data/testimonials.json';
import { Testimonial, TestimonialFilters, TestimonialSort } from '@/types/testimonials';

// Get all testimonials
export function getAllTestimonials(): Testimonial[] {
  return testimonialsData;
}

// Get featured testimonials only
export function getFeaturedTestimonials(): Testimonial[] {
  return testimonialsData.filter(testimonial => testimonial.featured);
}

// Get testimonials by company
export function getTestimonialsByCompany(company: string): Testimonial[] {
  return testimonialsData.filter(testimonial => 
    testimonial.company.toLowerCase().includes(company.toLowerCase())
  );
}

// Get testimonials by rating
export function getTestimonialsByRating(minRating: number): Testimonial[] {
  return testimonialsData.filter(testimonial => testimonial.rating >= minRating);
}

// Filter testimonials with multiple criteria
export function filterTestimonials(filters: TestimonialFilters): Testimonial[] {
  return testimonialsData.filter(testimonial => {
    if (filters.company && !testimonial.company.toLowerCase().includes(filters.company.toLowerCase())) {
      return false;
    }
    if (filters.rating && testimonial.rating < filters.rating) {
      return false;
    }
    if (filters.featured !== undefined && testimonial.featured !== filters.featured) {
      return false;
    }
    return true;
  });
}

// Sort testimonials
export function sortTestimonials(testimonials: Testimonial[], sort: TestimonialSort): Testimonial[] {
  return [...testimonials].sort((a, b) => {
    const aValue = a[sort.field];
    const bValue = b[sort.field];
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sort.direction === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sort.direction === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    return 0;
  });
}

// Get random testimonials (for variety)
export function getRandomTestimonials(count: number): Testimonial[] {
  const shuffled = [...testimonialsData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Search testimonials by text
export function searchTestimonials(query: string): Testimonial[] {
  const lowercaseQuery = query.toLowerCase();
  return testimonialsData.filter(testimonial =>
    testimonial.text.toLowerCase().includes(lowercaseQuery) ||
    testimonial.name.toLowerCase().includes(lowercaseQuery) ||
    testimonial.company.toLowerCase().includes(lowercaseQuery) ||
    testimonial.title.toLowerCase().includes(lowercaseQuery)
  );
}
