import EndpointUrl from "../../../core/apiEndpoints/endPoints";
import { triggerApi } from "../../../services";
import { ApiResponse } from "../../../services/schema/schema";

export async function getQuoteApprovalFormData(code: string, data: any) {
  let formdata;
  const apiObject = {
    payload: {},
    method: "GET",
    apiUrl:
      data && data.eventFrom === "quote"
        ? `${EndpointUrl.QuoteQuoteApproveForms}?code=${code}`
        : `${EndpointUrl.QuoteApproveForms}?code=${code}`,
    headers: {},
  };
  await triggerApi(apiObject)
    .then((response: ApiResponse) => {
      if (response.result.success) {
        const {data} = response.result;
        formdata = data;
      } else {
      }
    })
    .catch((err: string) => {
      console.log(err);
    });
  return formdata;
}
