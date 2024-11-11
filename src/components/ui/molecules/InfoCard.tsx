"use client";

import { cn } from "@/lib/cn";
import { Button } from "../atoms/Button";
import { Card, CardContent, CardFooter } from "../atoms/Card";
import { Typography } from "../atoms/Typography";

export interface InfoCardProps {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
  buttonDisabled?: boolean;
  content?: React.ReactNode;
  onButtonClick?: () => void;
}

export const InfoCard = ({
  icon: Icon,
  title,
  description,
  buttonText,
  buttonDisabled = false,
  className,
  content,
  onButtonClick,
}: InfoCardProps) => {
  return (
    <Card
      size="large"
      className={cn("aspect-square justify-center", className)}
    >
      <CardContent className="text-center">
        {Icon && <Icon className="mx-auto size-[24px]" />}
        {title && (
          <Typography as="h1" variant="header">
            {title}
          </Typography>
        )}
        {description && (
          <Typography as="p" variant="body" className="!text-text-secondary">
            {description}
          </Typography>
        )}
        {content}
      </CardContent>
      <CardFooter className="w-full">
        {buttonText && (
          <Button
            onClick={onButtonClick}
            disabled={buttonDisabled}
            className="w-full"
          >
            {buttonText}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
