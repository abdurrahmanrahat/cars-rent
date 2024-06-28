"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const signUpUser = async (prev: FormData, formData: FormData) => {
  try {
    const formattedData = JSON.stringify(Object.fromEntries(formData));

    // send to backed request
    const res = await fetch(`${process.env.BACKED_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formattedData,
    });
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (prev: FormData, formData: FormData) => {
  try {
    const formattedData = JSON.stringify(Object.fromEntries(formData));

    // send to backed request
    const res = await fetch(`${process.env.BACKED_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formattedData,
    });
    const data = await res.json();

    // save into cookie
    if (data.success) {
      cookies().set("accessToken", data.data.accessToken);
      cookies().set("refreshToken", data.data.refreshToken);
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export const userInfo = async () => {
  try {
    const accessToken = cookies().get("accessToken")?.value;

    let decodedData = null;
    if (accessToken) {
      decodedData = jwtDecode(accessToken) as any;
    }
  } catch (error) {
    throw error;
  }
};
