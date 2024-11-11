import { cn } from "@/lib/cn";
import { Loader2 } from "lucide-react";
import { SVGProps } from "react";

export const LoadingSpinner = ({ className }: SVGProps<SVGSVGElement>) => {
  return <Loader2 className={cn("size-[20px] animate-spin", className)} />;
};
