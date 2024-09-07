
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="NexelCraft - Web & Design Studio"
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-violet-200 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
