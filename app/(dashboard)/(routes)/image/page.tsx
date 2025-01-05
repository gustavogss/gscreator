import Heading from "@/components/heading";
import { ImageIcon } from "lucide-react";

export default function ImagePage() {
  return (
    <div className="">
      <Heading
        title="Image"
        description="Our most advanced Image"
        icon={ImageIcon}
        iconColor="text-orange-400"
        bgColor="bg-orange-400/10"
      />
    </div>
  )
}