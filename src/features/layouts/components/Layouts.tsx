import { cn } from "@/lib/cn";
import { ComponentProps } from "react";

export const PageLayout = ({ children, className }: ComponentProps<"div">) => {
  return (
    <div className={cn("flex flex-col min-h-screen", className)}>
      {children}
    </div>
  );
};

export const PageContent = ({ children, className }: ComponentProps<"div">) => {
  return (
    <main
      className={cn(
        "fixed left-1/2 top-[200px] transform -translate-x-1/2 max-w-[350px] w-full",
        className,
      )}
    >
      {children}
    </main>
  );
};
