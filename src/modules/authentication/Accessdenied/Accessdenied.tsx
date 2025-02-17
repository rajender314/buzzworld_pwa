import {
  AccessDeniedContainer,
  AccessDeniedImageContainer,
  AcessDenied,
} from './Acessdenied.component'
import Errors from '../../../assets/images/Error.svg'

type Props = {
  isApifailedConent: string
}

export default function Accessdenied({ isApifailedConent }: Props) {
  return (
    <AcessDenied>
      <AccessDeniedContainer>
        <AccessDeniedImageContainer>
          <img src={Errors} alt="error-icon" />
        </AccessDeniedImageContainer>
        <h4>! Oops, something went wrong</h4>
        <p>{isApifailedConent}</p>
      </AccessDeniedContainer>
    </AcessDenied>
  )
}
