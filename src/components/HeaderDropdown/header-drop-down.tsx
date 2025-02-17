import { useEffect, useRef, useState } from 'react'
import DropdownUpArrow from '../../assets/images/header-drop-up-arrow.svg'
import DropdownArrow from '../../assets/images/header-drop-down-arrow.svg'
import AvatarIcon from '../../assets/images/avator.svg'

import {
  Content,
  HeaderArrowIconContainer,
  HeaderDownContent,
  HeaderDownOptionsContainer,
  HeaderDropDownContainer,
  ProfileimgContainer,
} from './header-drop-down-components'
import { getLocalStorage } from '../../core/localStorage/localStorage'

type Option = {
  label: string
  value: string
}

type Props = {
  options: Option[]
  profileImage: string
  // eslint-disable-next-line no-unused-vars
  onChange: (e: any) => void
  defaultPage: boolean
}

export default function HeaderDropdown({ options, profileImage, onChange, defaultPage }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)
  console.log(profileImage, defaultPage)
  const toggleDropdown = () => {
    setIsExpanded(!isExpanded)
  }
  const [userPermission, setUserPermision]: any = useState()
  useEffect(() => {
    let userPerm: any = getLocalStorage('userPermission')
    userPerm = userPerm ? JSON.parse(userPerm) : null
    setUserPermision(userPerm)
  }, [])

  const handleOptionChange = (selectedValue: string) => {
    onChange(selectedValue)

    setIsExpanded(false)
  }

  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsExpanded(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <HeaderDropDownContainer id="dropdown-container" ref={dropdownRef}>
      {defaultPage === false && (
        <ProfileimgContainer onClick={toggleDropdown}>
          <Content>
            <img
              src={userPermission ? userPermission.user_info.image_url : AvatarIcon}
              alt="profile"
            />
            <HeaderArrowIconContainer>
              <img src={isExpanded ? DropdownUpArrow : DropdownArrow} alt="dropdownarrow" />
            </HeaderArrowIconContainer>
          </Content>
        </ProfileimgContainer>
      )}

      {isExpanded && (
        <HeaderDownContent>
          <HeaderDownOptionsContainer>
            {options.map((option, index) => (
              <div key={index} onClick={() => handleOptionChange(option.value)}>
                {option.label}
              </div>
            ))}
          </HeaderDownOptionsContainer>
        </HeaderDownContent>
      )}
    </HeaderDropDownContainer>
  )
}
