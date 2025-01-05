import Heading from "@/components/heading";
import { CodeIcon } from "lucide-react";

export default function CodePage() {
  return (
    <div className="">
      <Heading
        title="Code"
        description="Our most advanced Code"
        icon={CodeIcon}
        iconColor="text-slate-400"
        bgColor="bg-slate-400/10"
      />
    </div>
  )
}