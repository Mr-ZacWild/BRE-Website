import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { MusicToggle } from "@/components/music-toggle";
import { es } from "@/lib/i18n/dictionaries/es";

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav lang="es" dict={es} />
      <main className="flex-1 pt-16">{children}</main>
      <Footer lang="es" dict={es} />
      <WhatsAppFloat lang="es" />
      <MusicToggle />
    </>
  );
}
