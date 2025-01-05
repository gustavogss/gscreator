import Heading from "@/components/heading";
import { SettingsIcon } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="">
      <Heading
        title="Settings"
        description="Settings Platform"
        icon={SettingsIcon}
        iconColor="text-gray-900"
        bgColor="bg-gray-900/10"
      />
    </div>
  )
}