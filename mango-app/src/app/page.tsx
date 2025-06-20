'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { color } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('ProductsTable')
        .select('*');

      if (error) {
        setError(error.message);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-primary text-center py-8">
          Welcome to MangoHeadquarter!
        </h1>
      
        <h1 className="text-4xl font-bold text-primary text-center py-8">
          Premium from farm !
        </h1>
        <div className="w-full max-w-xl mt-8">
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          {loading && <p>Loading products...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}
          {!loading && !error && (
            <ul className="space-y-2">
              {products.length === 0 && <li>No products found.</li>}
              {products.map((product, idx) => (
                <li key={product.id || idx} className="border p-2 rounded">
                  {Object.entries(product).map(([key, value]) => (
                    <div key={key}><strong>{key}:</strong> {String(value)}</div>
                  ))}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
