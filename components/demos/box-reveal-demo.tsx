
import { CoolMode } from "../magicui/cool-mode";
import BoxReveal from "../ui/box-reveal";
import Link from "next/link";

export async function BoxRevealDemo() {
  return (
    <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        
        <p className="text-3xl font-semibold">1. Connect</p>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">
          Connect with us via
          <CoolMode>
          <Link href={"/meeting"} className="text-[#3b82f6]">
            {" "}
            meeting{" "}
          </Link>
          </CoolMode>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <p className="text-3xl font-semibold">2. Collaborate</p>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">
          Outline the scope of the project
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <p className="text-3xl font-semibold">3. Create</p>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">Leave the rest to us</h2>
      </BoxReveal>

    </div>
  );
}
