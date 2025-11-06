import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function ClientComponent({ children }: { children: React.ReactNode }) {
  return <BrowserOnly>{() => <>{children}</>}</BrowserOnly>;
}
