import Heading from "@/components/heading";
import { MusicIcon } from "lucide-react";

export default function Music() {
  return (
    <div className="">
      <Heading
        title="Music"
        description="Our most advanced Music"
        icon={MusicIcon}
        iconColor="text-emerald-400"
        bgColor="bg-emerald-400/10"
      />
    </div>
  )
}