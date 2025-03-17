"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

import { cn } from "@/ui/lib";

const LogoImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("h-full w-full", className)}
    {...props}
    alt="danrevi logo"
  />
));
LogoImage.displayName = AvatarPrimitive.Image.displayName;

export { LogoImage };
