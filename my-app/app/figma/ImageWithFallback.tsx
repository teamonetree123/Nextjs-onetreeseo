"use client";

import * as React from "react";

type ImgWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export function ImageWithFallback({
  src,
  alt = "Image",
  fallbackSrc = ERROR_IMG_SRC,
  className,
  style,
  onError,
  ...rest
}: ImgWithFallbackProps) {
  return (
    <img
      src={typeof src === "string" ? src : undefined}
      alt={alt}
      className={className}
      style={style}
      data-original-url={src}
      onError={(e) => {
        const img = e.currentTarget;
        if (img.src !== fallbackSrc) img.src = fallbackSrc;
        onError?.(e);
      }}
      {...rest}
    />
  );
}
