const parseType = (type) => {
  if (typeof type !== 'string') return;
  const allowedTypes = ['work', 'home', 'personal'];
  return allowedTypes.includes(type) ? type : undefined;
};

const parseIsFavourite = (value) => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return undefined;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  return {
    contactType: parseType(contactType),
    isFavourite: parseIsFavourite(isFavourite),
  };
};
