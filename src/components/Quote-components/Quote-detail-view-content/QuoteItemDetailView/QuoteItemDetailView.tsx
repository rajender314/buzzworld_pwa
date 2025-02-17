import {
  DetailViewContainer,
  FieldContentContainer,
  FieldLabel,
  FieldValue,
  NotesContainer,
  QuoteDetailViewMainContainer,
} from "../../QuoteDetailViewInfo/quote-detail-view-info-components";
import BackButton from "../../../../assets/images/BackArrow.svg";

import {
  HeaderText,
  SecondaryHeaders,
  SecondaryHeadersContainer,
} from "../../../Secondaryheader/SecondaryHeader.component";
import { ItemManufacturerDetail } from "./QuoteItemDetailView.component";
import CommonHeader from "../../../Commonheader/CommonHeader";

type Props = {
  quoteItemInfo: any;
  sendFormaction: any;
  quoteInfo: any;
};

export default function QuoteItemDetailView({
  quoteItemInfo,
  sendFormaction,
  quoteInfo,
}: Props) {
  const onBack = () => {
    sendFormaction({ close: true });
  };

  return (
    <>
      <CommonHeader
        quoteId={
          quoteInfo && quoteInfo.quote_no ? `#${quoteInfo.quote_no}` : "---"
        }
        customerName={
          quoteInfo && quoteInfo.customer_name ? quoteInfo.customer_name : "---"
        }
        ProfileImg={
          quoteInfo && quoteInfo.quoted_by ? quoteInfo.quoted_by.image_url : ""
        }
        defaultPage={false}
      />
      <QuoteDetailViewMainContainer>
        <SecondaryHeaders>
          <HeaderText onClick={onBack}>
            <img src={BackButton} alt="" />
            <span />
            <SecondaryHeadersContainer>
              <p>Quote Item</p>
              {quoteItemInfo && quoteItemInfo.manufacturer
                ? quoteItemInfo.manufacturer
                : "--"}
            </SecondaryHeadersContainer>
          </HeaderText>
        </SecondaryHeaders>
        <DetailViewContainer className="quote-view-container">
          <ItemManufacturerDetail>
            {quoteItemInfo && quoteItemInfo.manufacturer
              ? quoteItemInfo.manufacturer
              : "--"}

            <h4>
              {quoteItemInfo && quoteItemInfo.part_number
                ? quoteItemInfo.part_number
                : "--"}{" "}
            </h4>
            <p>
              {quoteItemInfo && quoteItemInfo.description
                ? quoteItemInfo.description
                : "--"}
            </p>
          </ItemManufacturerDetail>
          <FieldContentContainer>
            <FieldLabel>GP</FieldLabel>
            <FieldValue>
              {quoteItemInfo && quoteItemInfo.gp
                ? `${quoteItemInfo.gp} %`
                : "0"}
            </FieldValue>
          </FieldContentContainer>
          <FieldContentContainer>
            <FieldLabel>Discount</FieldLabel>
            <FieldValue>
              {quoteItemInfo && quoteItemInfo.discount
                ? `${quoteItemInfo.discount}`
                : "0"}
            </FieldValue>
          </FieldContentContainer>
          <FieldContentContainer>
            <FieldLabel>Quote</FieldLabel>
            <FieldValue>
              {quoteItemInfo && quoteItemInfo.quote_price
                ? quoteItemInfo.quote_price
                : "--"}
            </FieldValue>
          </FieldContentContainer>
          <FieldContentContainer>
            <FieldLabel>Suggested</FieldLabel>
            <FieldValue>
              {quoteItemInfo && quoteItemInfo.suggested_price
                ? quoteItemInfo.suggested_price
                : "--"}
            </FieldValue>
          </FieldContentContainer>
          <FieldContentContainer>
            <FieldLabel>IIDM Cost</FieldLabel>
            <FieldValue>
              {quoteItemInfo && quoteItemInfo.iidm_cost
                ? quoteItemInfo.iidm_cost
                : "--"}
            </FieldValue>
          </FieldContentContainer>
          <FieldContentContainer>
            <FieldLabel>Turn Around Time</FieldLabel>
            <FieldValue>
              {quoteItemInfo &&
              quoteItemInfo.lead_time_value &&
              quoteItemInfo.lead_time.label
                ? `${quoteItemInfo.lead_time_value} ${quoteItemInfo.lead_time.label}`
                : "TBD"}
            </FieldValue>
          </FieldContentContainer>
          <FieldContentContainer>
            <FieldLabel>Quantity</FieldLabel>
            <FieldValue>
              {quoteItemInfo && quoteItemInfo.quantity
                ? quoteItemInfo.quantity
                : "--"}
            </FieldValue>
          </FieldContentContainer>
          <FieldContentContainer>
            <FieldLabel>List</FieldLabel>
            <FieldValue>
              {quoteItemInfo && quoteItemInfo ? quoteItemInfo.list_price : "--"}
            </FieldValue>
          </FieldContentContainer>
          <FieldContentContainer>
            <FieldLabel>Total Item Price</FieldLabel>
            <FieldValue>
              {quoteItemInfo && quoteItemInfo.ext_price
                ? quoteItemInfo.ext_price
                : "--"}
            </FieldValue>
          </FieldContentContainer>
          <NotesContainer>
            <FieldLabel>Item Notes :</FieldLabel>
            <p>
              {quoteItemInfo && quoteItemInfo.notes
                ? quoteItemInfo.notes
                : "--"}
            </p>
          </NotesContainer>
        </DetailViewContainer>
      </QuoteDetailViewMainContainer>
    </>
  );
}
