import React, { useState } from "react";
import {
  CardDetail,
  CardHeader,
  ItemCard,
  TotalContent,
  TotalItemCard,
} from "./QuoteItems.component";
import RightArrow from "../../../../assets/images/rightArrow.svg";
import {
  DetailViewContainer,
  ErrorMsg,
  QuoteDetailViewMainContainer,
  QuoteItemContainer,
} from "../../QuoteDetailViewInfo/quote-detail-view-info-components";
import QuoteItemDetailView from "../QuoteItemDetailView";
import DropdownMenu from "../../../DropdownMenu/dropdown-menu";
import PiSideDrawer from "../../../sideDrawer";
import { SpinnerDiv } from "../Quote-notes/quote-notes-components";
import PiSpinner from "../../../spinner";

type Props = {
  quoteItems: any;
  options: any;
  sendOptionid: any;
  quoteInfo: any;
};

export default function QuoteItems({
  quoteItems,
  options,
  sendOptionid,
  quoteInfo,
}: Props) {
  const [optionValue, setOptionally] = useState<any>(options?.[0]?.label);
  const [loading, setLoading] = useState(false);
  const [showPop, setShowPop] = useState<boolean>(false);
  const [Data, setData] = useState();
  const [activeCardId, setActiveCardId] = useState("");

  const ItemDetail = (data: any) => {
    quoteItems &&
      quoteItems.list &&
      quoteItems.list.length > 0 &&
      quoteItems.list.map((item: any) => {
        if (item.id === data.id) {
          setShowPop(true);
          setData(item);
          setActiveCardId(data.id);
          setTimeout(() => {
            setActiveCardId("");
          }, 10000);
        }
        return item;
      });
  };

  const onOptionChange = (e: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    setOptionally(e.label);

    sendOptionid({ optionId: e.value });
  };

  function getEventdata(e: any) {
    if (e && e.close) {
      setShowPop(false);
    }
  }

  return (
    <QuoteDetailViewMainContainer className="scroll">
      {options?.length > 1 && (
        <DropdownMenu
          options={options}
          onChange={onOptionChange}
          selectedLabel={optionValue}
        />
      )}

      {!loading &&
        quoteItems &&
        quoteItems.list &&
        quoteItems.list.length > 0 && (
          <>
            <DetailViewContainer>
              <DetailViewContainer className="overflow">
                <TotalItemCard>
                  <TotalContent>
                    <p>Total Quantity</p>
                    <span>
                      {quoteItems && quoteItems.total_quantity
                        ? quoteItems.total_quantity
                        : "--"}
                    </span>
                  </TotalContent>
                  <TotalContent>
                    <p>Total Price</p>
                    <span>
                      {quoteItems?.total_price ? quoteItems.total_price : "--"}
                    </span>
                  </TotalContent>
                </TotalItemCard>
              </DetailViewContainer>

              <DetailViewContainer className="overflow">
                <div className="header">
                  Quote Items (
                  {quoteItems && quoteItems.total_count
                    ? quoteItems.total_count
                    : "--"}
                  )
                </div>
                <QuoteItemContainer>
                  {quoteItems &&
                    quoteItems.list &&
                    quoteItems.list.length > 0 &&
                    quoteItems.list.map((item: any) => (
                        <ItemCard
                          className={
                            activeCardId === item?.id ? "focus" : "none"
                          }
                        >
                          <CardHeader
                            className={item.gp < 23 ? "gp" : ""}
                            onClick={() => ItemDetail(item)}
                          >
                            <div>
                              <h4>
                                {item && item.manufacturer
                                  ? item.manufacturer
                                  : "--"}
                              </h4>
                              <img
                                src={RightArrow}
                                alt="right_arrow"
                                // onClick={() => ItemDetail(item)}
                              />
                            </div>
                            <h4>{item.quote_price}</h4>
                          </CardHeader>
                          <CardDetail>
                            <div>
                              <p>GP</p>
                              <span>
                                {item && item.gp ? `${item.gp} %` : "0"}
                              </span>
                            </div>
                            <div>
                              <p>Discount</p>
                              <span>
                                {item && item.discount
                                  ? `${item.discount}%`
                                  : "0"}
                              </span>
                            </div>
                            <div>
                              <p>Quantity</p>
                              <span>
                                {item && item.quantity ? item.quantity : "0"}
                              </span>
                            </div>
                          </CardDetail>
                        </ItemCard>
                      ))}
                </QuoteItemContainer>
              </DetailViewContainer>
            </DetailViewContainer>
            {showPop && (
              <PiSideDrawer isOpen width="full">
                <QuoteItemDetailView
                  quoteItemInfo={Data}
                  sendFormaction={getEventdata}
                  quoteInfo={quoteInfo}
                />
              </PiSideDrawer>
            )}
          </>
        )}

      {loading && (
        <SpinnerDiv className="spinner-position ">
          <PiSpinner color="primary" size={50} libraryType="atalskit" />
        </SpinnerDiv>
      )}
      {((!loading &&
        quoteItems &&
        quoteItems.list &&
        quoteItems.list.length === 0) ||
        (!loading && options && options.length === 0)) && (
        <DetailViewContainer className="notes-notAvailable ">
          <ErrorMsg>
            <div>Quote Item(s) are Not Available</div>
          </ErrorMsg>
        </DetailViewContainer>
      )}
    </QuoteDetailViewMainContainer>
  );
}
