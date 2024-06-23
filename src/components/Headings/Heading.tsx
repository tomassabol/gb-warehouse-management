import React from "react";

import { cn } from "~/lib/utils";

export function Heading({
  variant,
  children,
  className,
  ...rest
}: {
  variant: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4">) {
  const Component = variant;

  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap text-2xl font-semibold tracking-tight text-primary",
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
