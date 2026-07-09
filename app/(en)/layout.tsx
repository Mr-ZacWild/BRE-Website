import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { en } from "@/lib/i18n/dictionaries/en";

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav lang="en" dict={en} />
      <main className="flex-1">{children}</main>
      <Footer lang="en" dict={en} />
      <WhatsAppFloat lang="en" />
    </>
  );
}
