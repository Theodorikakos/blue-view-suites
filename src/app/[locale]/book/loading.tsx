import { Skeleton, SkeletonText } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center gap-6">
          <Skeleton className="h-3 w-24 rounded-sm" />
          <Skeleton className="h-12 md:h-16 w-3/4 rounded-sm" />
        </div>

        <div className="flex items-center justify-center mb-16 md:mb-20 gap-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="w-12 h-12 rounded-full" />
              {i < 2 && <Skeleton className="w-16 md:w-24 h-px" />}
            </div>
          ))}
        </div>

        <div className="bg-white p-8 md:p-12 border border-stone-100">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Skeleton className="h-2 w-20 rounded-sm" />
                <Skeleton className="h-11 w-full rounded-sm" />
              </div>
              <div className="space-y-3">
                <Skeleton className="h-2 w-20 rounded-sm" />
                <Skeleton className="h-11 w-full rounded-sm" />
              </div>
            </div>
            <div className="space-y-3">
              <Skeleton className="h-2 w-16 rounded-sm" />
              <Skeleton className="h-11 w-full rounded-sm" />
            </div>
            <div className="pt-8 border-t border-stone-100">
              <SkeletonText lines={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
