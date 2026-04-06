import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import ProductDetailClient from "@/components/products/ProductDetailClient";

type Props = {
  params: { slug: string };
};

// Generate static paths for all products at build time (SSG)
export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

// Dynamic SEO metadata per product
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  return {
    title: `${product.name} — Anyaman Bambu AR Rahman`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image, width: 800, height: 600, alt: product.name }],
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <div
      className="pt-32 md:pt-40"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <ProductDetailClient product={product} />
    </div>
  );
}
