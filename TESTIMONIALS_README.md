# 🗣️ Testimonial Management System

This system allows you to manage customer testimonials for your DesignPro website. You can store, edit, and display testimonials with photos, text, job titles, and company information.

## 📁 File Structure

```
src/
├── data/
│   └── testimonials.json          # Main testimonials data
├── types/
│   └── testimonials.ts            # TypeScript interfaces
├── lib/
│   └── testimonials.ts            # Utility functions
└── components/
    ├── ReviewsSection.tsx         # Display component
    └── TestimonialAdmin.tsx       # Admin interface
```

## 🎯 How to Use

### 1. **Add New Testimonials**

Edit `src/data/testimonials.json` and add new entries:

```json
{
  "id": 7,
  "text": "Your testimonial text here...",
  "name": "John Doe",
  "title": "Senior Designer",
  "avatar": "/avatars/john-doe.jpg",
  "company": "Tech Company",
  "rating": 5,
  "featured": true
}
```

### 2. **Store Photos**

Place avatar images in the `public/avatars/` folder:
- Use consistent naming: `firstname-lastname.jpg`
- Recommended size: 200x200px (will be displayed as 48x48px)
- Supported formats: JPG, PNG, WebP
- Keep file sizes under 100KB for performance

### 3. **Update Avatar Paths**

In your testimonial data, reference photos like this:
```json
"avatar": "/avatars/john-doe.jpg"
```

**Note:** The path starts with `/` (not `/public/`) because Next.js serves the public folder at the root.

### 4. **Use the Admin Interface**

Import and use the `TestimonialAdmin` component for easy management:

```tsx
import TestimonialAdmin from '@/components/TestimonialAdmin';

// In your admin page
<TestimonialAdmin />
```

## 🔧 Features

### **Data Fields**
- `id`: Unique identifier
- `text`: The testimonial quote
- `name`: Person's full name
- `title`: Job title
- `avatar`: Path to photo
- `company`: Company name
- `rating`: Star rating (1-5)
- `featured`: Whether to show prominently

### **Utility Functions**
- `getAllTestimonials()` - Get all testimonials
- `getFeaturedTestimonials()` - Get featured ones only
- `filterTestimonials(filters)` - Filter by company, rating, etc.
- `sortTestimonials(testimonials, sort)` - Sort by various fields
- `searchTestimonials(query)` - Search text content

### **Admin Features**
- ✅ Edit testimonials inline
- ✅ Filter by company, rating, featured status
- ✅ Sort by various fields
- ✅ Delete testimonials
- ✅ Toggle featured status

## 🚀 Advanced Usage

### **Filtering Examples**

```typescript
import { filterTestimonials } from '@/lib/testimonials';

// Get testimonials from specific company
const uberTestimonials = filterTestimonials({ company: 'Uber' });

// Get only 5-star reviews
const fiveStarReviews = filterTestimonials({ rating: 5 });

// Get featured testimonials only
const featured = filterTestimonials({ featured: true });
```

### **Sorting Examples**

```typescript
import { sortTestimonials } from '@/lib/testimonials';

// Sort by name alphabetically
const sortedByName = sortTestimonials(testimonials, { 
  field: 'name', 
  direction: 'asc' 
});

// Sort by rating (highest first)
const sortedByRating = sortTestimonials(testimonials, { 
  field: 'rating', 
  direction: 'desc' 
});
```

### **Custom Display**

You can create custom testimonial displays:

```typescript
import { getRandomTestimonials } from '@/lib/testimonials';

// Get 3 random testimonials for a sidebar
const sidebarTestimonials = getRandomTestimonials(3);
```

## 📱 Responsive Design

The testimonial cards automatically:
- Adjust spacing on mobile devices
- Maintain proper typography hierarchy
- Handle long company names gracefully
- Scale avatars appropriately

## 🎨 Customization

### **Design Tokens**
All styling uses your design system tokens:
- Colors: `--color-testimonial-*`
- Spacing: `--space-testimonial-*`
- Typography: `--font-size-testimonial-*`
- Shadows: `--shadow-testimonial-*`

### **Adding New Fields**
To add new fields (like "industry" or "date"):

1. Update `src/types/testimonials.ts`
2. Add data to `src/data/testimonials.json`
3. Update the admin interface in `TestimonialAdmin.tsx`
4. Modify the display component in `ReviewsSection.tsx`

## 🔒 Security Notes

- The current system stores data locally in JSON files
- For production, consider using a database (PostgreSQL, MongoDB)
- Implement user authentication for the admin interface
- Validate and sanitize all input data
- Use environment variables for sensitive configuration

## 🚀 Next Steps

1. **Add Photos**: Place avatar images in `public/avatars/`
2. **Update Data**: Edit `testimonials.json` with real testimonials
3. **Customize**: Adjust styling using your design tokens
4. **Deploy**: Your testimonials will automatically appear on the website

## 📞 Support

If you need help:
1. Check that all file paths are correct
2. Ensure photos are in the right folder
3. Verify JSON syntax is valid
4. Check browser console for any errors

Your testimonial system is now ready to use! 🎉
