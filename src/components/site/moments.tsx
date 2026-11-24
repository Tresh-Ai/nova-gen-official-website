import { MOMENTS } from "@/content/nova-gen";
import { cn } from "@/lib/utils";

/**
 * Community photo gallery. Two wide cards open the grid, three standard cards
 * close it, so the row never leaves a hole.
 */
export function MomentGallery({ className }: { className?: string }) {
  return (
    <div className={cn("mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6", className)}>
      {MOMENTS.map((item) => (
        <figure
          key={item.src}
          className={cn(
            "overflow-hidden rounded-xl surface-card",
            item.wide ? "sm:col-span-2 lg:col-span-3" : "lg:col-span-2",
          )}
        >
          <img
            src={item.src}
            alt={item.caption}
            className={cn(
              "w-full object-cover transition duration-500 hover:scale-[1.03]",
              item.wide ? "h-64 sm:h-80" : "h-56",
            )}
            loading="lazy"
          />
          <figcaption className="p-4">
            <span className="font-mono text-[0.62rem] tracking-widest text-primary uppercase">
              {item.meta}
            </span>
            <p className="mt-2 text-sm text-dim">{item.caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
