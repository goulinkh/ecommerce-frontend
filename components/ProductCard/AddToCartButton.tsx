import { motion } from 'framer-motion';
import AddSVG from 'public/icons/plus.svg';

type props = {
  hover: boolean;
  enStock: boolean;
  onAddToCart: any;
};
const AddToCartButton: React.FC<props> = ({ hover, enStock, onAddToCart }) => {
  return (
    <motion.div
      initial="hidden"
      animate={hover && enStock ? 'show' : 'hidden'}
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      onClick={onAddToCart}
      role="button"
      aria-hidden
    >
      <AddSVG className="w-8 h-8 rounded-full border border-gray-400 text-gray-400 p-1 hover:border-gray-700 hover:text-gray-600 transition-all" />
    </motion.div>
  );
};

export default AddToCartButton;
