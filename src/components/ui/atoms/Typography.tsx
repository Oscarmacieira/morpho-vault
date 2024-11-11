/* eslint-disable @typescript-eslint/no-empty-object-type */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/cn";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ComponentPropsWithRef, ElementType, ForwardedRef } from "react";

import React, { forwardRef } from "react";

// Source : https://www.totaltypescript.com/pass-component-as-prop-react
type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

const fixedForwardRef = forwardRef as FixedForwardRef;

type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any
  ? Omit<T, TOmitted>
  : never;

export const typographyVariants = cva("", {
  variants: {
    variant: {
      buttonSmall: "text-buttonSmall",
      link: "text-link",
      body: "text-body",
      header: "text-header",
      caption: "text-caption",
      secondary: "text-secondary",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});
type TypographyCvaProps = VariantProps<typeof typographyVariants>;

const defaultElementMapping = {
  buttonSmall: "p",
  link: "p",
  body: "p",
  header: "h1",
  caption: "p",
  secondary: "p",
} satisfies Record<NonNullable<TypographyCvaProps["variant"]>, ElementType>;

type ElementMapping = typeof defaultElementMapping;

type ElementTypeForVariant<TVariant extends keyof ElementMapping> =
  ElementMapping[TVariant];

/**
 * The Typography component is useful to add Text to your page
 *
 * Usage :
 *
 * ```tsx
 * <Typography variant="h1">Hello World</Typography>
 * <Typography variant="h2" as="a" href="#">Hello World</Typography>
 * <Typography variant="large" as={Link} href="#">Hello World</Typography>
 * ```
 *
 * You can use the `as` prop to define the element type of the component
 * `as` can be a string or a component
 *
 * @param params The parameters of the component
 * @param ref The ref of the element. Untyped because it's a generic
 * @returns
 */
const InnerTypography = <
  TAs extends ElementType,
  TVariant extends TypographyCvaProps["variant"] = "body",
>(
  {
    variant = "body",
    className,
    as,
    ...props
  }: {
    as?: TAs;
    variant?: TVariant;
  } & DistributiveOmit<
    ComponentPropsWithRef<
      ElementType extends TAs
        ? ElementTypeForVariant<NonNullable<TVariant>>
        : TAs
    >,
    "as"
  >,
  ref: ForwardedRef<any>,
) => {
  const Comp = as ?? defaultElementMapping[variant ?? "body"];
  return (
    <Comp
      {...props}
      className={cn(typographyVariants({ variant }), className)}
      ref={ref}
    ></Comp>
  );
};

export const Typography = fixedForwardRef(InnerTypography);
