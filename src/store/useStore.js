import { create } from "zustand";

const useStore = create((set) => ({
  search: "",
  category: "",
  cart: [],
  modalProduct: null,

  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ category }),

  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  setModalProduct: (modalProduct) => set({ modalProduct }),
}));

export default useStore;
