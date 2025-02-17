import QuoteDetailViewInfo from "../../QuoteDetailViewInfo";

export default function Customerformation({
  customerInfo,
  sendQuoteapprovedaction,
}: any) {
  const getQuoteapprovedaction = (e: any) => {
    sendQuoteapprovedaction({ isApproved: e.isApproved });
  };
  return (
    <QuoteDetailViewInfo
      type="customerInfo"
      quoteInfo={customerInfo || ""}
      sendQuoteapproveaction={getQuoteapprovedaction}
    />
  );
}
