import { SHOP_PRODUCTS, ShopProduct } from "@/data/products";
import ProductClient from "./ProductClient";
import { notFound } from "next/navigation";

// Generuje statyczne ścieżki dla każdego produktu w sklepie
export function generateStaticParams() {
  return SHOP_PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

// Metadata dla SEO
export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = SHOP_PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Produkt nie znaleziony",
    };
  }

  return {
    title: `${product.name} | AuraLasu`,
    description: product.description,
  };
}

interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {
    collection?: string;
  };
}

export default function ProductPage({ params, searchParams }: PageProps) {
  const product: ShopProduct | undefined = SHOP_PRODUCTS.find(
    (p) => p.slug === params.slug,
  );

  if (!product) {
    // Zrobione po stronie serwera - bezpieczne wywołanie notFound
    notFound();
  }

  return (
    <ProductClient
      product={product!}
      collectionParam={searchParams.collection || null}
    />
  );
}
