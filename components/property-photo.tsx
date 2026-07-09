import Image from "next/image";
import { ImagePlaceholder } from "./image-placeholder";

export function PropertyPhoto({
  src,
  alt,
  className = "",
  tone,
}: {
  src?: string;
  alt: string;
  className?: string;
  tone?: "mint" | "sage" | "quetzal";
}) {
  if (!src) {
    return <ImagePlaceholder label={alt} className={className} tone={tone} />;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
