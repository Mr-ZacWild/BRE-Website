// TODO: confirm the final production domain with Zac before launch.
export const SITE_URL = "https://www.buenrolloescapes.com";

// TODO: Zac is building this in Tally, connected to Notion. Once he sends
// the public form URL (tally.so/r/xxxxx or an embed src), drop it in here.
export const TALLY_FORM_URL: string | undefined = undefined;

// Opt-in ambient music toggle (see components/music-toggle.tsx) - off by
// default, visitor has to click. Deliberately left unset: the track Zac
// sent 2026-07-10 was "Manu Chao - Me Gustas Tu," a commercially released
// song. Playing a copyrighted commercial track on a public business site
// needs a sync/performance license - do not ship this specific file
// without Zac confirming he's licensed it. Point this at a royalty-free
// track (or a licensed one) under /public/audio/ instead.
export const AMBIENT_MUSIC_URL: string | undefined = undefined;
