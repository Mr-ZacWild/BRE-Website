import { HomeView } from "@/components/home-view";
import { en } from "@/lib/i18n/dictionaries/en";

export default function Home() {
  return <HomeView lang="en" dict={en} />;
}
