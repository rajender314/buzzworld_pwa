import {
  CloseIconContainer,
  NotificationHeader,
  ToastFooter,
  ToastNotifications,
  TostContentContainer,
  TostIconContainer,
} from './ToastNotification.component'

import Button from '../Form-Components/button/button'
import TostSucessIcon from '../../assets/images/tost-icon-sucess.svg'
import ToastRejectIcon from '../../assets/images/quote-reject-icon.svg'
import { SpinnerDiv } from '../Quote-components/Quote-detail-view-content/Quote-notes/quote-notes-components'
import PiSpinner from '../spinner/spinner'
import TextArea from '../Form-Components/textArea'
import CrossIcon from '../../assets/images/cross.svg'

type Props = {
  onCancel: () => void
  onApprove: () => void
  onClose: () => void
  title: string
  content: string
  submitButtonlabel: string
  secondaryButtonlabel: string
  submitappearance: any
  isToastFooter: boolean
  isToastloading: boolean
  sendRejectnotes: any
  showTextArea: boolean
}
export default function ToastNotification({
  onCancel,
  onApprove,
  onClose,
  title,
  content,
  submitButtonlabel,
  submitappearance,
  isToastFooter,
  isToastloading,
  secondaryButtonlabel,
  sendRejectnotes,
  showTextArea,
}: Props) {
  const onNoteschange = (e: any) => {
    sendRejectnotes({ decline_comments: e.target.value })
  }
  return (
    <ToastNotifications>
      <TostContentContainer className={isToastloading ? 'loader-opacity' : ''}>
        {!isToastFooter && (
          <TostIconContainer>
            <img
              src={title === 'Quote Rejected' ? ToastRejectIcon : TostSucessIcon}
              alt="tosticon..."
            />
          </TostIconContainer>
        )}
        {secondaryButtonlabel === 'Decline' && (
          <CloseIconContainer onClick={onClose}>
            <img src={CrossIcon} alt="crossIcon" />
          </CloseIconContainer>
        )}
        <NotificationHeader>{title || ''}</NotificationHeader>
        <div>
          <p>{content || ''}</p>
        </div>
        {showTextArea && (
          <TextArea
            name="notes"
            label="Notes"
            libraryType="atalskit"
            placeholder="Type here..."
            maxLength={255}
            isDisabled={isToastloading}
            onChange={onNoteschange}
          />
        )}
        {isToastFooter && (
          <ToastFooter>
            <Button
              appearance="secondary"
              label={secondaryButtonlabel || 'Cancel'}
              type="reset"
              onClick={() => onCancel()}
              isDisabled={isToastloading}
            />

            <Button
              appearance={submitappearance || ''}
              label={submitButtonlabel || ''}
              type="submit"
              onClick={() => onApprove()}
              isDisabled={isToastloading}
            />
          </ToastFooter>
        )}
      </TostContentContainer>
      {isToastloading && (
        <SpinnerDiv className="spinner-position">
          <PiSpinner color="primary" size={50} libraryType="atalskit" />
        </SpinnerDiv>
      )}
    </ToastNotifications>
  )
}
