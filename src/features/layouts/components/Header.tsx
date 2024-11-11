"use client";

import { MorphoIcon } from "@/components/icons/MorphoIcon";
import { Typography } from "@/components/ui/atoms/Typography";
import { AccountButton } from "@/features/auth/components/AccountButton";
import { ThemeToggle } from "@/features/theme/components/ThemeToggle";
import { cn } from "@/lib/cn";

export const Header = () => {
  return (
    <header
      className={cn(
        "w-full absolute top-0 left-0",
        "border-b-[0.5px] border-border-primary",
        "backdrop-blur-header",
        "px-[32px]",
        "h-[50px]",
      )}
    >
      <div className="flex h-full items-center justify-between">
        <div className="flex items-center gap-[32px]">
          <MorphoIcon />
          <Typography as="h1" variant="secondary" className="!text-text-body">
            Morpho Test
          </Typography>
        </div>
        <div className="flex items-center gap-[16px]">
          <ThemeToggle />
          <AccountButton />
        </div>
      </div>
    </header>
  );
};
