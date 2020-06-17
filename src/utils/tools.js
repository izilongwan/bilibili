import md5 from 'js-md5'

export const asyncFunc = async (fn) => {
  try {
    const { data } = await fn();

    return [null, data];
  } catch (err) {
    return [err, null];
  }
}

export const makeCrypto = (str) =>
  md5.create().update(str).hex()

export const findParent = (tar, className) => {
  while (tar.classList &&
    !tar.classList.contains(className)
  ) {
    tar = tar.parentNode;
  }

  return tar === document ? null : tar;
}
