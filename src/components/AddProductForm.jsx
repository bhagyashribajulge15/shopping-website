"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  title: z.string().min(1),
  price: z.string(),
  description: z.string(),
  category: z.string(),
  image: z.string().url(),
});

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Product added (mock):", data);
    alert("Product added (mock)!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <input
        {...register("title")}
        placeholder="Title"
        className="border p-2 w-full"
      />
      {errors.title && (
        <span className="text-red-500">{errors.title.message}</span>
      )}

      <input
        {...register("price")}
        placeholder="Price"
        className="border p-2 w-full"
      />
      <input
        {...register("description")}
        placeholder="Description"
        className="border p-2 w-full"
      />
      <input
        {...register("category")}
        placeholder="Category"
        className="border p-2 w-full"
      />
      <input
        {...register("image")}
        placeholder="Image URL"
        className="border p-2 w-full"
      />

      <button className="bg-amber-500 text-white px-4 py-2 rounded">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
