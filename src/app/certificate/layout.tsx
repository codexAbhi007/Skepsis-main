import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function CertificateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
     

      {/* Main content grows */}
      <main className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>

      {/* Footer  */}
      
    </div>
  );
}
