"use client";

import { cn } from "@/lib/cn";
import { Button } from "../atoms/Button";
import { Card, CardContent, CardFooter } from "../atoms/Card";

export interface InfoCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  buttonText: string;
  className?: string;
  buttonDisabled?: boolean;
  onButtonClick?: () => void;
}

export const InfoCard = ({
  icon: Icon,
  title,
  description,
  buttonText,
  onButtonClick,
  buttonDisabled = false,
  className,
}: InfoCardProps) => {
  return (
    <Card
      size="large"
      className={cn(
        "w-[350px] aspect-square mx-auto fixed left-1/2 top-1/4 transform -translate-x-1/2 items-center justify-center",
        className,
      )}
    >
      <CardContent className="text-center">
        {Icon && <Icon className="text-center size-[24px] mx-auto" />}
        <h1 className="text-header !text-text-body">{title}</h1>
        <p className="text-body !text-text-secondary">{description}</p>
      </CardContent>
      <CardFooter className="w-full">
        <Button
          onClick={onButtonClick}
          disabled={buttonDisabled}
          className="w-full"
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};
