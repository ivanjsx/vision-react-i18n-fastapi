export const validateIPv4 = (ip: string): boolean => {
  const regExpPattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  if (regExpPattern.test(ip)) {
    const octets = ip.split('.');
    if (
      octets.every(
        (octet) => parseInt(octet, 10) >= 0 && parseInt(octet, 10) <= 255
      )
    ) {
      return true;
    }
  }
  return false;
};
