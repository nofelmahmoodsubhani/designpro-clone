'use client';

import React, { useState, useEffect } from 'react';
import { Testimonial } from '@/types/testimonials';
import { getAllTestimonials, filterTestimonials, sortTestimonials } from '@/lib/testimonials';

export default function TestimonialAdmin() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<Testimonial>>({});
  const [filters, setFilters] = useState({
    company: '',
    rating: 0,
    featured: undefined as boolean | undefined
  });
  const [sort, setSort] = useState({ field: 'id' as const, direction: 'desc' as const });

  useEffect(() => {
    loadTestimonials();
  }, [filters, sort]);

  const loadTestimonials = () => {
    let filtered = filterTestimonials(filters);
    filtered = sortTestimonials(filtered, sort);
    setTestimonials(filtered);
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditingId(testimonial.id);
    setFormData(testimonial);
  };

  const handleSave = () => {
    if (editingId) {
      // In a real app, you'd save to a database
      const updated = testimonials.map(t => 
        t.id === editingId ? { ...t, ...formData } : t
      );
      setTestimonials(updated);
      setEditingId(null);
      setFormData({});
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({});
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      setTestimonials(testimonials.filter(t => t.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Testimonial Management</h1>
      
      {/* Filters */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-3">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Filter by company..."
            value={filters.company}
            onChange={(e) => setFilters({ ...filters, company: e.target.value })}
            className="px-3 py-2 border rounded-md"
          />
          <select
            value={filters.rating}
            onChange={(e) => setFilters({ ...filters, rating: Number(e.target.value) })}
            className="px-3 py-2 border rounded-md"
          >
            <option value={0}>All Ratings</option>
            <option value={5}>5 Stars</option>
            <option value={4}>4+ Stars</option>
            <option value={3}>3+ Stars</option>
          </select>
          <select
            value={filters.featured === undefined ? 'all' : filters.featured.toString()}
            onChange={(e) => setFilters({ 
              ...filters, 
              featured: e.target.value === 'all' ? undefined : e.target.value === 'true'
            })}
            className="px-3 py-2 border rounded-md"
          >
            <option value="all">All Testimonials</option>
            <option value="true">Featured Only</option>
            <option value="false">Not Featured</option>
          </select>
        </div>
      </div>

      {/* Sort */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-3">Sort</h2>
        <div className="flex gap-4">
          <select
            value={sort.field}
            onChange={(e) => setSort({ ...sort, field: e.target.value as any })}
            className="px-3 py-2 border rounded-md"
          >
            <option value="id">ID</option>
            <option value="name">Name</option>
            <option value="company">Company</option>
            <option value="rating">Rating</option>
          </select>
          <select
            value={sort.direction}
            onChange={(e) => setSort({ ...sort, direction: e.target.value as any })}
            className="px-3 py-2 border rounded-md"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      {/* Testimonials List */}
      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="border rounded-lg p-4 bg-white">
            {editingId === testimonial.id ? (
              // Edit Form
              <div className="space-y-3">
                <textarea
                  value={formData.text || ''}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  rows={3}
                  placeholder="Testimonial text..."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="p-2 border rounded-md"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    value={formData.title || ''}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="p-2 border rounded-md"
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    value={formData.company || ''}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="p-2 border rounded-md"
                    placeholder="Company"
                  />
                  <input
                    type="text"
                    value={formData.avatar || ''}
                    onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                    className="p-2 border rounded-md"
                    placeholder="Avatar path"
                  />
                </div>
                <div className="flex gap-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.featured || false}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="rounded"
                    />
                    Featured
                  </label>
                  <select
                    value={formData.rating || 5}
                    onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                    className="px-2 py-1 border rounded"
                  >
                    {[1, 2, 3, 4, 5].map(r => (
                      <option key={r} value={r}>{r} Star{r > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              // Display Mode
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.title}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">★</span>
                    <span>{testimonial.rating}</span>
                    {testimonial.featured && (
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{testimonial.text}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(testimonial)}
                    className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(testimonial.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
