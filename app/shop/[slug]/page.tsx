import { SHOP_PRODUCTS, ShopProduct } from "@/data/products";
import ProductClient from "./ProductClient";
import { notFound } from "next/navigation";

// Generuje statyczne ścieżki dla każdego produktu w sklepie
export async function generateStaticParams() {
  return SHOP_PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

// Metadata dla SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = SHOP_PRODUCTS.find((p) => p.slug === slug);

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
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    collection?: string;
  }>;
}

export default async function ProductPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const searchParamsData = await searchParams;

  const product: ShopProduct | undefined = SHOP_PRODUCTS.find(
    (p) => p.slug === slug,
  );

  if (!product) {
    // Zrobione po stronie serwera - bezpieczne wywołanie notFound
    notFound();
  }

  return (
    <ProductClient
      product={product!}
      collectionParam={searchParamsData.collection || null}
    />
  );
}
