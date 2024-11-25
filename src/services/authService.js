export const checkUserRole = (user, requiredRole) => {
  if (!user || !user['https://your-namespace/roles']) {
    return false;
  }

  const userRoles = user['https://your-namespace/roles'];
  return userRoles.includes(requiredRole);
};

export const getUserPermissions = (user) => {
  if (!user || !user['https://your-namespace/permissions']) {
    return [];
  }

  return user['https://your-namespace/permissions'];
};