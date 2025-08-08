"use client";

import { Copy } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EmailProtectionProps {
  email: string;
}

export function EmailProtection({ email }: EmailProtectionProps) {
  const [showEmail, setShowEmail] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("Copy to clipboard");

  const actualEmail = email.replace(/ at /g, "@").replace(/ dot /g, ".");

  const handleCopy = () => {
    navigator.clipboard.writeText(actualEmail);
    setTooltipContent("Copied!");
    setTimeout(() => {
      setTooltipContent("Copy to clipboard");
    }, 2000);
  };

  return (
    <span className="inline-flex items-center gap-1">
      {showEmail ? (
        <>
          <span className="text-primary">{actualEmail}</span>
          <TooltipProvider>
            <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 rounded-full"
                  onClick={handleCopy}
                >
                  <Copy className="h-3 w-3" />
                  <span className="sr-only">Copy email</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltipContent}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </>
      ) : (
        <button
          className="text-primary hover:underline"
          onClick={() => setShowEmail(true)}
        >
          {email}
        </button>
      )}
    </span>
  );
}
