import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
  image?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, size?: string, color?: string) => void;
  updateQuantity: (id: string, quantity: number, size?: string, color?: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const existingItemIndex = get().items.findIndex(
          (i) => i._id === item._id && i.size === item.size && i.color === item.color
        );
        
        if (existingItemIndex > -1) {
          set((state) => ({
            items: state.items.map((i, index) =>
              index === existingItemIndex
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          }));
        } else {
          set((state) => ({ items: [...state.items, item] }));
        }
      },
      removeItem: (id, size, color) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item._id === id && item.size === size && item.color === color)
          ),
        }));
      },
      updateQuantity: (id, quantity, size, color) => {
        if (quantity <= 0) {
          get().removeItem(id, size, color);
          return;
        }
        
        set((state) => ({
          items: state.items.map((item) =>
            item._id === id && item.size === size && item.color === color
              ? { ...item, quantity }
              : item
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      getTotalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
      getTotalPrice: () => get().items.reduce((total, item) => total + item.price * item.quantity, 0),
    }),
    {
      name: 'cart-storage',
    }
  )
);

// User store for authentication state
interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  profileCompleted: boolean;
}

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
  isAdmin: () => boolean;
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),
  isAdmin: () => get().user?.role === 'admin',
}));
