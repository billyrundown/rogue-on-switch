import { getCollection, type CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';
import { games, type Game } from './games';

export type ResearchGame = CollectionEntry<'games'>;
export type ResearchGameAsset = { entry: ResearchGame; cover?: string };

const coverModules = import.meta.glob('../content/games/**/cover.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, ImageMetadata>;

// Research has two intentional edition names that differ from the public directory.
const researchAliases: Record<string, string> = {
  'the-binding-of-isaac-repentance': 'the-binding-of-isaac-afterbirth-plus',
  'monster-train': 'monster-train-first-class',
};

export async function getResearchBySiteSlug() {
  const entries = await getCollection('games');
  const byResearchSlug = new Map(entries.map((entry) => [entry.data.slug, entry]));
  return new Map(games.flatMap((game) => {
    const entry = byResearchSlug.get(researchAliases[game.slug] ?? game.slug);
    return entry ? [[game.slug, entry] as const] : [];
  }));
}

export async function getResearchAssetsBySiteSlug() {
  const researchBySiteSlug = await getResearchBySiteSlug();

  return new Map<string, ResearchGameAsset>(
    [...researchBySiteSlug].map(([siteSlug, entry]) => [
      siteSlug,
      {
        entry,
        cover: Object.entries(coverModules).find(([path]) => path.includes(`/${entry.data.id}-`))?.[1].src,
      },
    ]),
  );
}

export function researchFacts(game: Game, research?: ResearchGame) {
  if (!research) return null;
  return {
    ...game,
    title: research.data.name,
    summary: research.data.short_description,
    price: `$${research.data.price_usd.toFixed(2)}`,
    genre: research.data.genres.join(', '),
    sourceUrl: research.data.nintendo_switch_url,
    lastChecked: research.data.last_verified,
  };
}
