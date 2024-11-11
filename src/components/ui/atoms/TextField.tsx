import * as React from "react";

import { AlertIcon } from "@/components/icons/AlertIcon";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { cn } from "@/lib/cn";
import { VariantProps, cva } from "class-variance-authority";
import { LoadingSpinner } from "./LoadingSpinner";

export const textFieldVariants = cva(
  cn(
    "flex items-center w-full",
    "bg-background-secondary",
    "text-text-body !text-link ",
    "file:border-0 file:text-sm file:font-medium",
    "placeholder:text-text-interactive-disabled",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:text-text-interactive-disabled",
    "border border-transparent focus-within:border-constant-color-active",
    "rounded-[6px]",
    "px-[12px] py-[8px]",
  ),
);

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textFieldVariants> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  error?: boolean;
  success?: boolean;
  loading?: boolean;
  label?: string;
}

const TextFieldEndContent = ({
  endContent,
  loading,
  error,
  success,
}: TextFieldProps) => {
  if (success) return <CheckIcon className="size-[20px]" />;
  if (loading) return <LoadingSpinner className="size-[20px]" />;
  if (error) return <AlertIcon className="size-[20px]" />;
  return endContent ?? null;
};

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      startContent,
      endContent,
      error,
      loading,
      label,
      success,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="relative flex flex-col gap-[8px]">
        {label && <p className="text-caption !text-text-secondary">{label}</p>}
        <div className={cn(textFieldVariants({ className }), className)}>
          {startContent && (
            <span className="text-muted-foreground pointer-events-none flex items-center">
              {startContent}
            </span>
          )}
          <input
            ref={ref}
            {...props}
            className={cn(
              "w-full bg-transparent outline-none focus-visible:outline-none",
              "whitespace-pre-wrap text-ellipsis overflow-hidden",
              {
                "pl-1.5": !!startContent,
                "pr-1.5": !!endContent,
                "!text-text-interactive-error": error,
              },
            )}
          />
          <span className="pointer-events-none flex items-center pl-[8px]">
            <TextFieldEndContent
              endContent={endContent}
              error={error}
              loading={loading}
              success={success}
            />
          </span>
        </div>
      </div>
    );
  },
);
TextField.displayName = "TextField";

export { TextField };
