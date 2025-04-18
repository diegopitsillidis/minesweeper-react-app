export const GameLevels: string[] = ['beginner', 'intermediate', 'expert'];

export type LevelNames = typeof GameLevels[number];

export type Settings = [number, number];

export const GameSettings: Record<LevelNames, Settings> = {
    beginner: [9, 10],
    intermediate: [16, 44],
    expert: [22, 99]
};