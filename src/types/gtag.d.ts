// src/types/gtag.d.ts
interface Gtag {
    (command: 'config', targetId: string, params?: { page_path: string }): void;
}

declare var gtag: Gtag;
