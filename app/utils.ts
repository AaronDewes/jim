export function getAlbyHubUrl() {
  if (!process.env.ALBYHUB_URL) {
    throw new Error("No BASE_URL set");
  }
  return removeTrailingSlash(process.env.ALBYHUB_URL);
}

export function getBaseUrl() {
  if (!process.env.BASE_URL) {
    throw new Error("No BASE_URL set");
  }

  return removeTrailingSlash(process.env.BASE_URL);
}

export function getDomain() {
  let domain = getBaseUrl().split("//")[1];

  return domain;
}

function removeTrailingSlash(url: string) {
  if (url.endsWith("/")) {
    url = url.substring(0, url.length - 1);
  }
  return url;
}
