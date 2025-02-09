import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "sonner";

export default function PromptsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Toaster position="top-center" duration={3000} />
        <Header />
        <main className="mx-auto">{children}</main>
      </div>
    </div>
  );
}
