import { Skeleton, SkeletonText } from "@/components/Skeleton";

export default function Loading() {
  return (
    <>
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-stone-200" />
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-8">
              <Skeleton className="h-3 w-32 rounded-sm" />
              <Skeleton className="h-10 w-full rounded-sm" />
              <SkeletonText lines={4} />
            </div>
            <div className="bg-stone-100 p-8 md:p-12 space-y-8">
              <Skeleton className="h-8 w-1/2 rounded-sm" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Skeleton className="h-11 w-full rounded-sm" />
                <Skeleton className="h-11 w-full rounded-sm" />
              </div>
              <Skeleton className="h-11 w-full rounded-sm" />
              <Skeleton className="h-24 w-full rounded-sm" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
