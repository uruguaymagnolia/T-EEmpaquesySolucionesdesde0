'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const LazyMap = dynamic(
  () => import('@/components/landing/map-section').then((mod) => mod.MapSection),
  {
    loading: () => <Skeleton className="h-[500px] w-full rounded-2xl" />,
    ssr: false,
  }
);

export default function LazyMapWrapper() {
  return <LazyMap />;
}
