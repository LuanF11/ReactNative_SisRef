import { IconButton } from "@/components/icon-button";
import Ionicons from "@expo/vector-icons/Ionicons";

export const SuccessIconButtonExample = () => {
  return (
    <IconButton
      icon={{ name: "caret-up-outline", type: "Ionicons" }}
      variant="success"
    />
  );
};
