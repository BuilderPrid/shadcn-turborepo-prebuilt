import Image from "next/image";
import { Card } from "@repo/ui/card";
import "@repo/shadcn/styles.css"
import {Button} from "@repo/shadcn/button"

export default function Page(): JSX.Element {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-red-400">
      <Button variant="default">Hello</Button>
    </div>
  );
}
