"use client";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { setFooter } from "../states/createWebSlice";

export default function CollapsibleFooter() {
  const dispatch = useDispatch();

  const handleFooter = (value) => {
    if (value == 0) {
      dispatch(setFooter("default"));
    } else {
      dispatch(setFooter("one"));
    }
  };
  return (
    <Collapsible className="w-full space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Footer</h4>
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
          onClick={() => handleFooter(0)}
        >
          Banner Default
        </button>
        <button
          className="rounded-md border px-4 py-3 font-mono text-sm w-full text-left hover:bg-black hover:text-white"
          onClick={() => handleFooter(1)}
        >
          Banner Design #1
        </button>
      </CollapsibleContent>
    </Collapsible>
  );
}
