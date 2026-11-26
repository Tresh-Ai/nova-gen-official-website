import { MOMENTS } from "@/content/nova-gen";
import { cn } from "@/lib/utils";

/**
 * Community photos in an editorial grid with descriptions available to screen readers.
 */
export function MomentGallery({ className }: { className?: string }) {
  return (
    <div className={cn("mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6", className)}>
      {MOMENTS.map((item) => (
        <figure
          key={item.src}
          className={cn(
            "overflow-hidden rounded-md",
            item.wide ? "sm:col-span-2 lg:col-span-3" : "lg:col-span-2",
          )}
        >
          <img
            src={item.src}
            alt={item.alt}
            className={cn(
              "aspect-[3/2] w-full object-cover",
            )}
            loading="lazy"
            decoding="async"
          />
        </figure>
      ))}
    </div>
  );
}
