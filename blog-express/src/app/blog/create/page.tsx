import Wrapper from "@/components/wrapper";
import dynamic from "next/dynamic";

const TextEditor = dynamic(
  () => {
    return import("@/components/textEditor");
  },
  { ssr: false }
);

export default function CreateBlogPage() {
  return (
    <Wrapper>
      <div className="w-full">
        <div className="mt-2">
          <TextEditor />
        </div>
      </div>
    </Wrapper>
  );
}
