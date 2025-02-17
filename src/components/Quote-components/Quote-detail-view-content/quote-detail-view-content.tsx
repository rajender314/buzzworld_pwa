import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  PiTabGroup,
  PiTabHeader,
  PiTabHeaderPanel,
  PiTabPanel,
} from "../../tabs";
import { TabsHeaderPanelContainer } from "./quote-detail-view-content-components";

import QuoteInformation from "./QuoteInformation/quote-info";
import Customerformation from "./Customer-information/customer-info";
import QuoteNotes from "./Quote-notes/quote-notes";
import ApprovedQuestions from "./Approved-questions/approved-question";
import QuoteItems from "./QuoteItems";
import {
  ApiResponse,
  FilterColumnProps,
} from "../../../services/schema/schema";
import EndpointUrl from "../../../core/apiEndpoints/endPoints";
import { triggerApi } from "../../../services";
import PiSpinner from "../../spinner";
import {
  NotesNotAvailableContainer,
  SpinnerDiv,
} from "./Quote-notes/quote-notes-components";

export default function QuoteDetailViewContent({
  quoteInfo,
  sendQuoteapprovedaction,
}: any) {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [cardItems, setCardItems] = useState<any>([]);
  const [quoteDetails, setQuoteDetails] = useState<any>(quoteInfo);
  const [savedqns, setSavedQns] = useState<any>([]);
  const [internalqns, setInternalqns] = useState<any>([]);
  const [optionList, setOptionsList] = useState<any>([]);
  const [isOptioncall, setIsoptionCall] = useState<boolean>(false);
  const { id }: any = useParams();
  function tabChange(indx: number) {
    setTabIndex(indx);
  }
  useEffect(() => {
    if (tabIndex === 3) {
      if (isOptioncall) {
        getQuoteItems();
      }
      getOptions();
    }
    if (tabIndex === 2) {
      getInternalApprovals();
    }
  }, [tabIndex]);

  useEffect(() => {
    setQuoteDetails(quoteInfo);
  }, [quoteInfo]);

  useEffect(() => {
    if (optionList?.length) {
      getQuoteItems(optionList[0].id);
    }
  }, [optionList]);

  const getQuoteItems = (Optionid?: any) => {
    const myid = Optionid || optionList?.[0]?.id;
    const apiObject = {
      payload: {},
      method: "GET",
      apiUrl: `${EndpointUrl.QuoteItems}?quote_id=${id}&options_id=${myid}`,
      headers: {},
    };
    triggerApi(apiObject)
      .then((response: ApiResponse) => {
        if (response.result.success) {
          const {data} = response.result;
          setCardItems({ ...data });
          setLoading(false);
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 4000);
        }
      })
      .catch((err: string) => {
        console.log(err);
        setLoading(false);
      });
  };
  const getOptions = async () => {
    setLoading(true);
    let arr: any = [];
    const apiObject = {
      payload: {},
      method: "GET",
      apiUrl: `${EndpointUrl.QuoteOptions}?quote_id=${id}`,
      headers: {},
    };
    await triggerApi(apiObject)
      .then(async (response: any) => {
        if (response.result.success) {
          const {data} = response.result;
          if (data && data.length === 0) {
            setLoading(false);
          }
          arr = await data.map((item: FilterColumnProps) => ({
              value: item.id,
              label: item.name,
              ...item,
            }));

          setOptionsList(arr);
          setIsoptionCall(true);
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 4000);
        }
      })
      .catch((err: string) => {
        console.log(err);
      });
    return arr;
  };

  function getOptionid(e: any) {
    getQuoteItems(e.optionId);
  }

  const getQuoteapprovedaction = (e: any) => {
    sendQuoteapprovedaction({ isApproved: e.isApproved });
  };
  const getSavedQn = (data: any) => {
    console.log("saved qn", data, "qn");
  };

  const getInternalApprovals = () => {
    setLoading(true);

    const apiObject = {
      payload: {},
      method: "GET",
      apiUrl: `${EndpointUrl.QuoteInernalApprovals}/${id}?quote_id=${id}`,
      headers: {},
    };
    triggerApi(apiObject)
      .then((response: ApiResponse) => {
        if (response.result.success) {
          const {data} = response.result;
          setInternalqns(data);
          const qnsArray: any = [];
          data &&
            data.map((items: any) => {
              if (items.approval_values !== null) {
                qnsArray.push(items.approval_values);
                setSavedQns(qnsArray);
                setLoading(false);
              }
              return items;
            });
          setLoading(false);
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 4000);
        }
      })
      .catch((err: string) => {
        console.log(err);
        setTimeout(() => {
          setLoading(false);
        }, 4000);
      });
  };
  return (
    <PiTabGroup
        id="tab"
        onChange={(index: number) => {
          tabChange(index);
        }}
        selected={tabIndex}
      >
        <TabsHeaderPanelContainer>
          <PiTabHeaderPanel>
            <PiTabHeader> Quote Info.</PiTabHeader>

            <PiTabHeader> Customer Info.</PiTabHeader>

            <PiTabHeader>Approval Questions</PiTabHeader>

            <PiTabHeader>Quote Items</PiTabHeader>

            <PiTabHeader>Quote Notes</PiTabHeader>
          </PiTabHeaderPanel>
        </TabsHeaderPanelContainer>

        <PiTabPanel>
          <QuoteInformation
            quoteInfo={quoteDetails || ""}
            sendQuoteapprovedaction={getQuoteapprovedaction}
            sendSavedApprovalQns={getSavedQn}
          />
        </PiTabPanel>

        <PiTabPanel>
          <Customerformation
            customerInfo={quoteDetails || ""}
            sendQuoteapprovedaction={getQuoteapprovedaction}
          />
        </PiTabPanel>
        <PiTabPanel>
          {!loading &&
          savedqns &&
          savedqns.length > 0 &&
          internalqns &&
          internalqns.length > 0 ? (
            <ApprovedQuestions savedQns={savedqns} />
          ) : (
            !loading && (
              <NotesNotAvailableContainer className="internal-approval">
                Internal Approval(s) Not Available
              </NotesNotAvailableContainer>
            )
          )}

          {loading && (
            <SpinnerDiv className="spinner-position ">
              <PiSpinner color="primary" size={50} libraryType="atalskit" />
            </SpinnerDiv>
          )}
        </PiTabPanel>

        <PiTabPanel>
          {!loading && (
            <QuoteItems
              quoteItems={cardItems}
              options={optionList}
              sendOptionid={getOptionid}
              quoteInfo={quoteInfo}
            />
          )}
          {loading && (
            <SpinnerDiv className="spinner-position ">
              <PiSpinner color="primary" size={50} libraryType="atalskit" />
            </SpinnerDiv>
          )}
        </PiTabPanel>

        <PiTabPanel>
          <QuoteNotes quoteNotes={quoteDetails || ""} />
        </PiTabPanel>
      </PiTabGroup>
  );
}
