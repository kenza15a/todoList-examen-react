const BASE_URL = "http://localhost:8000/api";

// ===== TASKS =====

export const getTasks = async (categoryId = null) => {
  let url = `${BASE_URL}/tasks/`;

  const params = new URLSearchParams();
  if (categoryId !== null && categoryId !== undefined) {
    params.append("category", categoryId);
  }

  if ([...params].length > 0) {
    url += "?" + params.toString();
  }

  const res = await fetch(url);
  if (!res.ok) throw await res.json();
  return await res.json();
};

export const createTask = async (taskData) => {
  const res = await fetch(`${BASE_URL}/tasks/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });

  if (!res.ok) throw await res.json();
  return await res.json();
};

export const updateTask = async (taskId, updateData) => {
  const res = await fetch(`${BASE_URL}/tasks/${taskId}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });

  if (!res.ok) throw await res.json();
  return await res.json();
};

export const deleteTask = async (taskId) => {
  const res = await fetch(`${BASE_URL}/tasks/${taskId}/`, {
    method: "DELETE",
  });

  if (!res.ok) throw await res.json();
  return true;
};

// ===== CATEGORIES =====

export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories/`);
  if (!res.ok) throw await res.json();
  return await res.json();
};

export const createCategory = async (categoryData) => {
  const res = await fetch(`${BASE_URL}/categories/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoryData),
  });

  if (!res.ok) throw await res.json();
  return await res.json();
};
