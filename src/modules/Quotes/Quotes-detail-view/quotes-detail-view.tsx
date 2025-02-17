import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import QuoteDetailViewContent from '../../../components/Quote-components/Quote-detail-view-content/quote-detail-view-content'
import EndpointUrl from '../../../core/apiEndpoints/endPoints'
import { triggerApi } from '../../../services'
import { ApiResponse } from '../../../services/schema/schema'
import { SpinnerDiv } from '../../../components/Quote-components/Quote-detail-view-content/Quote-notes/quote-notes-components'
import PiSpinner from '../../../components/spinner'
import CommonHeader from '../../../components/Commonheader'
import Accessdenied from '../../authentication/Accessdenied'

export default function QuoteDetailView() {
  const [quoteId, setQuoteId] = useState<string | null>(null) // Initialize quoteId to null
  const [quoteInfo, setQuoteInfo] = useState<any>()
  const [loading, setLoading] = useState(false)
  const [isApires, setIsApiRes] = useState<boolean>(false)
  const { id }: any = useParams()
  const getQuoteInfo = () => {
    setLoading(true)
    const apiObject = {
      payload: {},
      method: 'GET',
      apiUrl: `${EndpointUrl.Quote}/${quoteId}?quote_id=${quoteId}`,
      headers: {},
    }
    triggerApi(apiObject)
      .then(async (response: ApiResponse) => {
        if (response.result.success) {
          const { data } = response.result
          setQuoteInfo({ ...data })
          setLoading(false)
        } else {
          setTimeout(() => {
            setLoading(false)
            setIsApiRes(true)
          }, 4000)
        }
      })
      .catch((err: string) => {
        setLoading(false)
        setIsApiRes(true)

        console.log(err)
      })
  }
  useEffect(() => {
    if (quoteId !== null) {
      getQuoteInfo()
    }
  }, [quoteId])
  useEffect(() => {
    setQuoteId(id)
  }, [id])

  const getQuoteapprovedaction = (e: any) => {
    if (e && e.isApproved) {
      getQuoteInfo()
    }
  }
  return (
    <>
      {!loading && (
        <CommonHeader
          quoteId={quoteInfo && quoteInfo.quote_no ? `#${quoteInfo.quote_no}` : '---'}
          customerName={quoteInfo && quoteInfo.customer_name ? quoteInfo.customer_name : '---'}
          ProfileImg={quoteInfo && quoteInfo.quoted_by ? quoteInfo.quoted_by.image_url : ''}
          defaultPage={false}
        />
      )}
      {!loading && !isApires && (
        <QuoteDetailViewContent
          quoteInfo={quoteInfo || ''}
          sendQuoteapprovedaction={getQuoteapprovedaction}
        />
      )}
      {!loading && isApires && <Accessdenied isApifailedConent="" />}
      {loading && (
        <SpinnerDiv>
          <PiSpinner color="primary" size={50} libraryType="atalskit" />
        </SpinnerDiv>
      )}
    </>
  )
}
