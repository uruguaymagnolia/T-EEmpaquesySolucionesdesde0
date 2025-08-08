'use server';

import { notFound } from 'next/navigation';
import { ProductDetailsClientPage } from './client-page';
import { getProductBySlug, getRelatedProducts } from '../actions';

type ProductDetailsPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(
    product.category,
    product.id
  );

  return (
    <ProductDetailsClientPage
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}
