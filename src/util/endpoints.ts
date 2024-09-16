/** this would wrap all the api endpoints and base urls */
export const baseUrl =
  import.meta.env.VITE_APP_BASE_URL ||
  "https://apex-payments-eca4dc83534e.herokuapp.com/api/";

export const url = {
  getPayments: (payload: any) =>
    `/transactions?${payload?.page ? `page=${payload?.page}` : ""}${
      payload?.state ? `&state=${payload?.status?.toLowerCase()}` : ""
    }${
      payload?.per_page ? `&search=${payload?.per_page}` : ""
    }`,
}
