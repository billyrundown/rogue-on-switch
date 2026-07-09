export type Playstyle = 'Action' | 'Cards' | 'Tactics' | 'Shooter' | 'Co-op';

export type Game = {
  slug: string; title: string; playstyle: Playstyle; genre: string; classification: 'Roguelike' | 'Roguelite' | 'Hybrid';
  summary: string; bestFor: string; skipIf: string; runLength: string; price: string; coOp: string; difficulty: string;
  progression: string; switchNotes: string; sourceUrl: string; lastChecked: string;
};

const seed: Omit<Game, 'slug' | 'summary' | 'bestFor' | 'skipIf' | 'progression' | 'switchNotes' | 'sourceUrl' | 'lastChecked'>[] = [
  { title: 'Hades', playstyle: 'Action', genre: 'Action', classification: 'Roguelite', runLength: '30–60 min', price: '$24.99', coOp: 'No', difficulty: 'Medium' },
  { title: 'Dead Cells', playstyle: 'Action', genre: 'Metroidvania', classification: 'Roguelite', runLength: '30–50 min', price: '$24.99', coOp: 'No', difficulty: 'Hard' },
  { title: 'Slay the Spire', playstyle: 'Cards', genre: 'Deckbuilding', classification: 'Roguelike', runLength: '30–90 min', price: '$24.99', coOp: 'No', difficulty: 'Medium' },
  { title: 'Balatro', playstyle: 'Cards', genre: 'Poker deckbuilder', classification: 'Roguelike', runLength: '20–45 min', price: '$14.99', coOp: 'No', difficulty: 'Easy to learn' },
  { title: 'Into the Breach', playstyle: 'Tactics', genre: 'Tactics', classification: 'Roguelike', runLength: '20–45 min', price: '$14.99', coOp: 'No', difficulty: 'Hard' },
  { title: 'The Last Spell', playstyle: 'Tactics', genre: 'Tactical defense', classification: 'Roguelite', runLength: '45–90 min', price: '$24.99', coOp: 'No', difficulty: 'Hard' },
  { title: 'Vampire Survivors', playstyle: 'Action', genre: 'Bullet heaven', classification: 'Roguelite', runLength: '15–30 min', price: '$4.99', coOp: 'Local' , difficulty: 'Easy' },
  { title: 'Enter the Gungeon', playstyle: 'Shooter', genre: 'Twin-stick shooter', classification: 'Roguelike', runLength: '30–60 min', price: '$14.99', coOp: 'Local', difficulty: 'Hard' },
  { title: 'Risk of Rain 2', playstyle: 'Shooter', genre: 'Third-person shooter', classification: 'Roguelite', runLength: '45–120 min', price: '$24.99', coOp: 'Online', difficulty: 'Medium' },
  { title: 'Spelunky 2', playstyle: 'Action', genre: 'Platformer', classification: 'Roguelike', runLength: '15–40 min', price: '$19.99', coOp: 'Local', difficulty: 'Very hard' },
  { title: 'Cult of the Lamb', playstyle: 'Action', genre: 'Action management', classification: 'Roguelite', runLength: '20–40 min', price: '$24.99', coOp: 'Local', difficulty: 'Easy' },
  { title: 'Children of Morta', playstyle: 'Co-op', genre: 'Action RPG', classification: 'Roguelite', runLength: '20–45 min', price: '$21.99', coOp: 'Local', difficulty: 'Medium' },
  { title: 'Ember Knights', playstyle: 'Co-op', genre: 'Action', classification: 'Roguelite', runLength: '20–35 min', price: '$19.99', coOp: 'Local', difficulty: 'Medium' },
  { title: 'Wizard of Legend', playstyle: 'Co-op', genre: 'Spell action', classification: 'Roguelite', runLength: '20–40 min', price: '$15.99', coOp: 'Local', difficulty: 'Hard' },
  { title: 'Dicey Dungeons', playstyle: 'Cards', genre: 'Dice deckbuilder', classification: 'Roguelike', runLength: '20–35 min', price: '$14.99', coOp: 'No', difficulty: 'Medium' },
  { title: 'Monster Train', playstyle: 'Cards', genre: 'Deckbuilding', classification: 'Roguelite', runLength: '35–60 min', price: '$24.99', coOp: 'No', difficulty: 'Medium' },
  { title: 'Wildfrost', playstyle: 'Cards', genre: 'Deckbuilding', classification: 'Roguelike', runLength: '25–45 min', price: '$19.99', coOp: 'No', difficulty: 'Hard' },
  { title: 'Loop Hero', playstyle: 'Tactics', genre: 'Auto-battler', classification: 'Roguelite', runLength: '25–50 min', price: '$14.99', coOp: 'No', difficulty: 'Medium' },
  { title: 'Crown Trick', playstyle: 'Tactics', genre: 'Dungeon tactics', classification: 'Roguelike', runLength: '30–60 min', price: '$29.99', coOp: 'No', difficulty: 'Medium' },
  { title: 'Shovel Knight Dig', playstyle: 'Action', genre: 'Platformer', classification: 'Roguelite', runLength: '15–30 min', price: '$24.99', coOp: 'No', difficulty: 'Medium' },
];

export const games: Game[] = [...seed, ...seed].map((game, i) => ({
  ...game,
  title: i >= seed.length ? `${game.title} ${i % 2 ? '— Field Notes' : '— Switch Edition'}` : game.title,
  slug: `${game.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}${i >= seed.length ? `-${i}` : ''}`,
  summary: `${game.title} is a deliberate pick for players who want a ${game.playstyle.toLowerCase()} run with a clear reason to come back.`,
  bestFor: `Players looking for ${game.playstyle.toLowerCase()} runs that fit a ${game.runLength.toLowerCase()} window.`,
  skipIf: `You need a low-pressure game or dislike replaying familiar challenges.`,
  progression: game.classification === 'Roguelike' ? 'Most power comes from learning systems rather than permanent upgrades.' : 'Between runs, persistent unlocks steadily widen your options.',
  switchNotes: 'Handheld text and controls are comfortable; check this field again before buying for the latest patch notes.',
  sourceUrl: 'https://www.nintendo.com/us/store/', lastChecked: '2026-07-09',
}));

export const guideTopics = [
  ['best-roguelikes-on-nintendo-switch', 'Best Roguelikes on Nintendo Switch', 'The essential starting list, sorted by how you want to play.'],
  ['best-roguelites-for-beginners', 'Best Roguelites for Beginners', 'Friendly first runs, useful progression, and readable systems.'],
  ['best-deckbuilding-roguelikes', 'Best Deckbuilding Roguelikes', 'Every card game worth making room for on your Switch.'],
  ['best-co-op-roguelites', 'Best Co-op Roguelites', 'Runs that are substantially better with another controller nearby.'],
  ['best-roguelikes-for-short-sessions', 'Best Roguelikes for Short Sessions', 'Games built for a subway ride, a break, or one more run.'],
  ['best-hidden-gems-under-20', 'Best Hidden Gems Under $20', 'Overlooked, affordable picks with more to show than their price suggests.'],
] as const;
