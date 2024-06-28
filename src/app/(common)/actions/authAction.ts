"use server";

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
