import { HeroButton } from "@/features/ui/hero";
import { PocketKnife } from "lucide-react";
import { extensionStore } from "../extension-store";

export const NewExtension = () => {
  return (
    <HeroButton
      title="Ny Extension"
      description="Opret en ny udvidelse med din egen interne API"
      icon={<PocketKnife />}
      onClick={() => extensionStore.newAndOpenSlider()}
    />
  );
};
