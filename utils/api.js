const API_URL = `https://node-express-posts-users-api.onrender.com`;

// para obtener los post
export async function getAllPosts() {
  const response = await fetch(`${API_URL}/posts`);

  const data = await response.json();
  //   console.log("Fetched data:", data);

  if (data.success) {
    console.log("Fetched data:", JSON.stringify(data.data.post, null, 2));
  } else {
    console.error("Error fetching data:", data.message);
  }

  return data.data?.post;
}

// para obtener los post con ID
export async function getPost(id) {
  const response = await fetch(`${API_URL}/posts/${id}`);

  if (!response.ok) {
    throw new Error(`Error fetching post: ${response.statusText}`);
  }

  const data = await response.json();

  console.log("Fetched post data:", data);

  return data.data?.post;
}

// para hacer lgin del usuario
export async function login(email, password) {
  const response = await fetch(`${API_URL}/user/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  return data.data?.token;
}

// para registrar el usuario
export async function signUp(name, email, password, profilePic) {
  const response = await fetch(`${API_URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password, profilePic }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }

  const data = await response.json();
  return data;
}

// Función para crear un post

export async function CreatePost(postData) {
  const token = localStorage.getItem("token");
  console.log("Token:", token);

  const response = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const result = await response.json();
  console.log("Post created successfully:", result);
  return result;
}

// traerse el usuriario atravez de su token

export async function getUserToken() {
  try {
    const response = await fetch(`${API_URL}/user/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const result = await response.json();

    if (result.success) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
