"use client";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { setHeader } from "../states/createWebSlice";

export default function CollapsibleHeader() {
  const dispatch = useDispatch();

  const handleHeader = (value) => {
    if (value == 0) {
      dispatch(setHeader("default"));
    } else {
      dispatch(setHeader("one"));
    }
  };

  return (
    <Collapsible className="w-full space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Header</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <button
          className="rounded-md border px-4 py-3 font-mono text-sm w-full text-left hover:bg-black hover:text-white"
          onClick={() => handleHeader(0)}
        >
          Header Default
        </button>
        <button
          className="rounded-md border px-4 py-3 font-mono text-sm w-full text-left hover:bg-black hover:text-white"
          onClick={() => handleHeader(1)}
        >
          Header Design #1
        </button>
      </CollapsibleContent>
    </Collapsible>
  );
}
