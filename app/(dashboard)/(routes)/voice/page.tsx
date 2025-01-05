import Heading from "@/components/heading";
import { VoicemailIcon } from "lucide-react";

export default function VoicePage() {
  return (
    <div className="">
      <Heading
        title="Voice"
        description="Our most advanced Voice"
        icon={VoicemailIcon}
        iconColor="text-amber-400"
        bgColor="bg-amber-400/10"
      />
    </div>
  )
}