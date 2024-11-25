import { signOut } from "@/server/auth";

export const logOut = async () => {
  await signOut();
};
