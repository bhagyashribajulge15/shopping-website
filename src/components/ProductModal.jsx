import useStore from "@/store/useStore";

const ProductModal = () => {
  const { modalProduct, setModalProduct, addToCart } = useStore();

  if (!modalProduct) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded max-w-md w-full relative">
        <button
          onClick={() => setModalProduct(null)}
          className="absolute top-2 right-2 text-xl"
        >
          &times;
        </button>
        <img
          src={modalProduct.image}
          alt=""
          className="w-full h-60 object-contain mb-4"
        />
        <h2 className="font-bold text-xl mb-2">{modalProduct.title}</h2>
        <p className="mb-2">{modalProduct.description}</p>
        <p className="font-bold text-lg mb-2">${modalProduct.price}</p>
        <button
          onClick={() => {
            addToCart(modalProduct);
            setModalProduct(null);
          }}
          className="bg-amber-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
