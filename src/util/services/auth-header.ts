interface AuthHeader {
  Authorization?: string;
}

export default function authHeader(): AuthHeader {
  const user = JSON.parse(localStorage.getItem('user') || "");

  if (user && user.token) {
    return { Authorization: 'Token ' + user.token }; // for Spring Boot back-end
  } else {
    return {};
  }
}
