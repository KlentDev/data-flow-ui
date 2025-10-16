import { cn } from "@/lib/utils";
import { Commet } from "react-loading-indicators";

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Commet color="#32cd32" size="medium" text="" textColor="" />
    </div>
  );
}
