import { IconNames } from "./icon";

export type Service = {
  reverse?: boolean;
  icon?: IconNames;
  title: string;
  description: string;
  image?: string;
  id: number;
  href?: string;
};
