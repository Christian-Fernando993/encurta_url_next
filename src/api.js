const API_URL = "https://s.loovi.com.br/admin_shrink_url";

export function POST_SHORT_URL(linkRequest) {
  return {
    url_POST: API_URL,
    options: {
      method: "POST",
      body: JSON.stringify(linkRequest),
    },
  };
}
