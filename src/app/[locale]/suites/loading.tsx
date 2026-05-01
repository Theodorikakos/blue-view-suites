import { Skeleton, SkeletonText } from "@/components/Skeleton";

export default function Loading() {
  return (
    <>
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-stone-200" />
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              <Skeleton
                className={`aspect-[4/3] w-full ${i % 2 === 1 ? "lg:order-2" : ""}`}
              />
              <div className={`space-y-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <Skeleton className="h-3 w-40 rounded-sm" />
                <Skeleton className="h-10 w-3/4 rounded-sm" />
                <SkeletonText lines={3} />
                <div className="grid grid-cols-2 gap-3 max-w-md pt-2">
                  {[0, 1, 2, 3].map((j) => (
                    <Skeleton key={j} className="h-3 w-full rounded-sm" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
