export const getAge = (birthDate: string): number =>
  Math.floor(
    (new Date().getTime() - new Date(birthDate).getTime()) / 3.15576e10,
  );
