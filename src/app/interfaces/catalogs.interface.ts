export interface CatalogsInterface {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export type CatalogsPostInterface = Pick<
  CatalogsInterface,
  'name' | 'birth_year' | 'gender'
>;
