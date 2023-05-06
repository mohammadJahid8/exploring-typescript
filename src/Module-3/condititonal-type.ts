type a1 = null;
type a2 = number;
type a3 = boolean;
type a4 = null;

type d = a1 extends null
  ? null
  : a2 extends number
  ? number
  : a3 extends string
  ? string
  : a4 extends boolean
  ? boolean
  : never;

type Sheikh = {
  wife1: string;
  wife2: string;
};

type A = keyof Sheikh;

type CheckSheikhWife<T, K> = K extends keyof T ? true : false;

type CheckWIfe1 = CheckSheikhWife<Sheikh, "wife1">;

type Friendss = "jahid" | "zifat" | "zidan";

type RemoveFriends<T, K> = T extends K ? never : T;

type CurrentFriends = RemoveFriends<Friendss, "jahid">;
