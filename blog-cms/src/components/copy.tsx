"use client";
import { useState } from "react";
import { FaLink, FaCheck } from "react-icons/fa6";
import { useCopyToClipboard } from "usehooks-ts";

export default function CopyButton({ link }: { link: string }) {
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState<boolean>(false);
  return (
    <div
      className="text-gray-500 cursor-pointer"
      onClick={() => {
        copy(link);
        setCopied(true);
      }}
      onMouseLeave={() => setCopied(false)}
    >
      {copied ? <FaCheck /> : <FaLink />}
    </div>
  );
}
