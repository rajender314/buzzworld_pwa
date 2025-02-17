import React, { useEffect, useState } from "react";
import QuoteDetailViewInfo from "../../QuoteDetailViewInfo";

export default function QuoteInformation({
  quoteInfo,
  sendQuoteapprovedaction,
  sendSavedApprovalQns,
}: any) {
  const [quoteDetails, setQuoteDetails] = useState<any>(quoteInfo);
  useEffect(() => {
    setQuoteDetails(quoteInfo);
  }, [quoteInfo]);
  const getQuoteapprovedaction = (e: any) => {
    sendQuoteapprovedaction({ isApproved: e.isApproved });
  };
  const getSavedApprovalQns = (e: any) => {
    sendSavedApprovalQns(e.arrovalQns);
  };
  return (
    <QuoteDetailViewInfo
      type="quoteInfo"
      quoteInfo={quoteDetails || ""}
      sendQuoteapproveaction={getQuoteapprovedaction}
      sendApprovalQns={getSavedApprovalQns}
    />
  );
}
