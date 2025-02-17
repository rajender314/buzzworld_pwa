import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DropdownMenu from "../../../DropdownMenu/dropdown-menu";
import {
  DetailViewContainer,
  QuoteDetailViewMainContainer,
} from "../../QuoteDetailViewInfo/quote-detail-view-info-components";
import EndpointUrl from "../../../../core/apiEndpoints/endPoints";
import { triggerApi } from "../../../../services";
import { ApiResponse } from "../../../../services/schema/schema";
import {
  ItemList,
  MessageText,
  NotesNotAvailableContainer,
  NotesUserInfo,
  SpinnerDiv,
} from "./quote-notes-components";
import PiSpinner from "../../../spinner";
import Notes from "../../../../assets/images/Notes.svg";
import NotesAvatar from "../../../../assets/images/notes-avator.svg";
import generateHTML from "./generateHTML";

type Props = {
  quoteNotes: any;
};

export default function QuoteNotes({ quoteNotes }: Props) {
  const { id }: any = useParams();
  const [notesLabel, setNoteslabel] = useState("Notes to Customer");
  const [notesInfo, setNotesInfo] = useState<any>(
    quoteNotes && quoteNotes.customer_notes ? quoteNotes.customer_notes : ""
  );
  const [dynamicNotes, setDynamicNotes] = useState<any>([]);
  const [internalNotes, setInternalNotes] = useState<any>([]);

  const [loading, setLoading] = useState(false);

  const noteOptions = [
    {
      label: "Notes to Customer",
      value: "1",
    },
    {
      label: "Dynamic Notes",
      value: "2",
    },
    {
      label: "Internal Notes",
      value: "3",
    },
  ];
  useEffect(() => {
    const storedSelectedOption = localStorage.getItem("selectedOption");
    if (storedSelectedOption) {
      setNoteslabel(storedSelectedOption);
      if (storedSelectedOption === "Dynamic Notes") {
        getDynamicNotes();
      } else if (storedSelectedOption === "Notes to Customer") {
        setNotesInfo(
          quoteNotes && quoteNotes.customer_notes
            ? quoteNotes.customer_notes
            : ""
        );
      } else if (storedSelectedOption === "Internal Notes") {
        getInternalNotes();
      }
    }
  }, [notesLabel]);

  const onMenuChange = (e: any) => {
    setNoteslabel(e.label);
    localStorage.setItem("selectedOption", e.label);
    if (e.label === "Dynamic Notes") {
      getDynamicNotes();
    } else if (e.label === "Notes to Customer") {
      setNotesInfo(
        quoteNotes && quoteNotes.customer_notes ? quoteNotes.customer_notes : ""
      );
    } else if (e.label === "Internal Notes") {
      getInternalNotes();
    }
  };

  const getDynamicNotes = () => {
    setLoading(true);
    const apiObject = {
      payload: {},
      method: "GET",
      apiUrl: `${EndpointUrl.QuoteCustomerNotesDynamics}?quote_id=${id}`,
      headers: {},
    };
    triggerApi(apiObject)
      .then(async (response: ApiResponse) => {
        if (response.result.success) {
          const {data} = response.result;
          setDynamicNotes(data);

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
  const getInternalNotes = () => {
    setLoading(true);

    const apiObject = {
      payload: {},
      method: "GET",
      apiUrl: `${EndpointUrl.QuoteInternalNotes}?quote_id=${id}`,
      headers: {},
    };
    triggerApi(apiObject)
      .then(async (response: ApiResponse) => {
        if (response.result.success) {
          const data = response.result.data.list;
          setInternalNotes(data);
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
    <QuoteDetailViewMainContainer>
      <DropdownMenu
        options={noteOptions}
        onChange={onMenuChange}
        selectedLabel={notesLabel}
      />

      {!loading && (
        <>
          {notesLabel === "Notes to Customer" && (
            <DetailViewContainer
              className={notesInfo !== "" ? "" : "notes-notAvailable"}
            >
              {notesLabel === "Notes to Customer" && notesInfo !== "" ? (
                <>{generateHTML(notesInfo)}</>
              ) : (
                <NotesNotAvailableContainer>
                  <img src={Notes} alt="Notes" />
                  {`${"Notes Not Available from"} ${notesLabel}`}
                </NotesNotAvailableContainer>
              )}
            </DetailViewContainer>
          )}

          {notesLabel === "Dynamic Notes" && (
            <DetailViewContainer
              className={
                dynamicNotes && dynamicNotes.length > 0
                  ? ""
                  : "notes-notAvailable"
              }
            >
              {notesLabel === "Dynamic Notes" &&
              dynamicNotes &&
              dynamicNotes.length > 0 ? (
                dynamicNotes.map((obj: any) => (
                    <ItemList>
                      <div>
                        <img
                          className="notes-user-img"
                          src={obj.image_url ? obj.image_url : NotesAvatar}
                          alt="loading"
                        />
                        <NotesUserInfo>
                          <h6>{obj.full_name.replace(/#/g, "")}</h6>
                          <MessageText className="message-subject">
                            {obj.subject}
                          </MessageText>
                          <MessageText
                            className="whitespace-preinline"
                            dangerouslySetInnerHTML={{ __html: obj.note }}
                           />
                        </NotesUserInfo>
                      </div>
                      <MessageText className="time-stamp">
                        {obj.last_modified_date}
                      </MessageText>
                    </ItemList>
                  ))
              ) : (
                <NotesNotAvailableContainer>
                  <img src={Notes} alt="Notes" />
                  {`${"Notes Not Available from"} ${notesLabel}`}
                </NotesNotAvailableContainer>
              )}
            </DetailViewContainer>
          )}

          {notesLabel === "Internal Notes" && (
            <DetailViewContainer
              className={
                internalNotes && internalNotes.length > 0
                  ? ""
                  : "notes-notAvailable"
              }
            >
              {notesLabel === "Internal Notes" &&
              internalNotes &&
              internalNotes.length > 0 ? (
                internalNotes.map((obj: any) => (
                    <ItemList>
                      <div>
                        <img
                          className="notes-user-img"
                          src={obj.image_url ? obj.image_url : NotesAvatar}
                          alt="loading"
                        />
                        <NotesUserInfo>
                          <h6>{obj.created_by.replace(/#/g, "")}</h6>
                          <MessageText className="message-subject">
                            {obj.created_date}
                          </MessageText>
                          <MessageText
                            className="whitespace-preinline"
                            dangerouslySetInnerHTML={{ __html: obj.note }}
                           />
                        </NotesUserInfo>
                      </div>

                      <MessageText className="time-stamp">
                        {obj.last_modified_date}
                      </MessageText>
                    </ItemList>
                  ))
              ) : (
                <NotesNotAvailableContainer>
                  <img src={Notes} alt="Notes" />
                  {`${"Notes Not Available from"} ${notesLabel}`}
                </NotesNotAvailableContainer>
              )}
            </DetailViewContainer>
          )}
        </>
      )}

      {loading && (
        <SpinnerDiv>
          <PiSpinner color="primary" size={50} libraryType="atalskit" />
        </SpinnerDiv>
      )}
    </QuoteDetailViewMainContainer>
  );
}
