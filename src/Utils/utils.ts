export const useEllipse = (str: any, max: number, add: any) => {
    add = add || '...';
    return typeof str === 'string' && str.length > max
      ? str.substring(0, max) + add
      : str;
};

export const selectAppender = (totalValue: any) => {
  return totalValue.unshift("Select");
};