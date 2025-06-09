// src/pages/CategoryManagement.jsx
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useCreateCategoryMutation } from '@/lib/api/categoryApi';

const CategoryManagement = () => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [createCategory, { isLoading, isSuccess, error }] = useCreateCategoryMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCategory({ category, subcategory }).unwrap();
      setCategory('');
      setSubcategory('');
    } catch (err) {
      console.error('Failed to create:', err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Add Subcategory</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="category">Category Name</Label>
          <Input
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g. Furniture"
            required
          />
        </div>
        <div>
          <Label htmlFor="subcategory">Subcategory Name</Label>
          <Input
            id="subcategory"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            placeholder="e.g. Chair"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white"
          disabled={isLoading}
        >
          {isLoading ? 'Adding…' : 'Add Subcategory'}
        </Button>
        {isSuccess && <p className="text-green-600 mt-2">Created successfully!</p>}
        {error && <p className="text-red-600 mt-2">Error creating category.</p>}
      </form>
    </div>
  );
};

export default CategoryManagement;
