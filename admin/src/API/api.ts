import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../App";

export async function postEnglishMovie(
  backendUrl: any,
  token: any,
  formData: any
) {
  const response = await fetch(`${backendUrl}/api/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function postMovie(
  backendUrl: any,
  token: any,
  formData: any
) {
  const response = await fetch(`${backendUrl}/api/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function postBanglaMovie(
  backendUrl: any,
  token: any,
  formData: any
) {
  const response = await fetch(`${backendUrl}/api/bangla-movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function postHindiMovie(
  backendUrl: any,
  token: any,
  formData: any
) {
  const response = await fetch(`${backendUrl}/api/hindi-movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function postOtherMovie(
  backendUrl: any,
  token: any,
  formData: any
) {
  const response = await fetch(`${backendUrl}/api/other-movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export const getEnglishMovieCount = (moviePath: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchMovieCount = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/movies/${moviePath}-movies`

        );

        setCount(response.data.movies.length);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovieCount();
  }, []);

  return count;
};
