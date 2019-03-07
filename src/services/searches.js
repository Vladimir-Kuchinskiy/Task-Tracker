export const searchUsers = (userEmails, query) => {
  if (query === '') return [];

  return userEmails.filter(email => email.toLowerCase().indexOf(query.toLowerCase()) >= 0);
};
