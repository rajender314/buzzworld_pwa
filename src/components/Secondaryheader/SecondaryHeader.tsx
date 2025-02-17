import BackButton from '../../assets/images/BackArrow.svg'
import { HeaderText, ProfileText, SecondaryHeaders } from './SecondaryHeader.component'

type Props = {
  approvalQuestion: string
  step: any
  sendFormactiondata: any
}
export default function SecondaryHeader({ approvalQuestion, step, sendFormactiondata }: Props) {
  const onBack = () => {
    sendFormactiondata({ isClose: true })
  }
  return (
    <SecondaryHeaders>
      <HeaderText onClick={onBack}>
        <img src={BackButton} alt="" />
        <span />
        {approvalQuestion || ''}
      </HeaderText>
      <ProfileText>
        <p> {step || ''}</p>
      </ProfileText>
    </SecondaryHeaders>
  )
}
