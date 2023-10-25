const API_URL = "https://jsonplaceholder.typicode.com";

export async function fetchAllPosts() {
  const res = await fetch(`${API_URL}/posts`);
  if (!res.ok) {
    throw Error("Something went wrong!");
  }
  const data = await res.json();

  return data;
}

export async function fetchEachPost(id) {
  const res = await fetch(`${API_URL}/posts/${id}`);
  if (!res.ok) throw Error("Something went wrong!");
  const data = await res.json();

  return data;
}
