import Heading from "@/components/heading";
import { VideoIcon } from "lucide-react";

export default function VideoPage() {
  return (
    <div className="">
      <Heading
        title="Video"
        description="Our most advanced Video"
        icon={VideoIcon}
        iconColor="text-rose-400"
        bgColor="bg-rose-400/10"
      />
    </div>
  )
}