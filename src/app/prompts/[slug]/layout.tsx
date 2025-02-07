import Header from "@/components/Header";
import { Toaster } from "sonner";

export default function PromptsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Toaster position="top-center" duration={3000} />
      <Header />
      <main className=" mx-auto">{children}</main>
    </div>
  );
}
