import type { IconName } from '../components/Icon.astro';

export const navLinks: { text: string; route: string; icon: IconName }[] = [
    { text: "Definicje", route: "/definicje/", icon: "chart-relationship" },
    { text: "Poradnik", route: "/poradnik", icon: "user-simulation" },
    { text: "Opowieści", route: "/opowiesci/", icon: "voice-activate" },
    { text: "Historia", route: "/historia", icon: "notebook" },
    { text: "Reprezentacja", route: "/reprezentacja/", icon: "identification" },
    { text: "Kontakt", route: "/#kontakt", icon: "email" },
];
