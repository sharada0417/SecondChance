import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCreateProductMutation } from '@/lib/api/productApi';

const PostAdd = () => {
  const [categoryId, setCategoryId] = useState('');
  const [subid, setSubid] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [recycledate, setRecycledate] = useState('');
  const [createProduct, { isLoading, isSuccess, error }] = useCreateProductMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!categoryId || !subid || !imageFile || !name || !description || !price || !recycledate) {
      alert('Please fill in all required fields.');
      return;
    }

    const formData = new FormData();
    formData.append('categoryId', categoryId);
    formData.append('subid', subid);
    formData.append('image', imageFile);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('recycledate', recycledate);

    try {
      await createProduct(formData).unwrap();
      setCategoryId('');
      setSubid('');
      setImageFile(null);
      setName('');
      setDescription('');
      setPrice('');
      setRecycledate('');
    } catch (err) {
      console.error('Create product failed:', err);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h1 className="text-2xl font-semibold text-center mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <Label htmlFor="category">Category ID</Label>
          <Input
            id="category"
            type="text"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            placeholder="e.g. 11"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="subid">Subcategory ID</Label>
          <Input
            id="subid"
            type="text"
            value={subid}
            onChange={(e) => setSubid(e.target.value)}
            placeholder="e.g. 1"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="image">Product Image</Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. The Headset"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="description">Description</Label>
          <textarea
            id="description"
            className="block w-full mt-1 rounded-md border-gray-300 p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="It is comfortable and stylish"
            rows={3}
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="price">Price (USD)</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="100.00"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="recycledate">Recycle Date</Label>
          <Input
            id="recycledate"
            type="date"
            value={recycledate}
            onChange={(e) => setRecycledate(e.target.value)}
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white"
          disabled={isLoading}
        >
          {isLoading ? 'Uploading…' : 'Add Product'}
        </Button>
        {isSuccess && <p className="text-green-600 mt-2">Product created!</p>}
        {error && (
          <p className="text-red-600 mt-2">
            Failed to create product: {error.data?.message || 'Unknown error'}
          </p>
        )}
      </form>
    </div>
  );
};

export default PostAdd;