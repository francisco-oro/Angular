export interface Hero {
  id: string;
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
  alt_img?: string;
}
export type Heroes = Hero[];
