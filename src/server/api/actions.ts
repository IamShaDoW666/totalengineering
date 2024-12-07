import { uploadImage } from "@/lib/server-utils";
import { signOut } from "@/server/auth";
import { api } from "@/trpc/server";

export const logOut = async () => {
  await signOut();
};

export const createSliderAction = async (
  title: string,
  description: string,
  image: File,
) => {
  await api.slider.create({
    title,
    description,
    image: await uploadImage(image),
  });
};
