import { useEffect, useRef, useState } from 'react'
import {
  DropDownContainer,
  DropDownHeader,
  DropDownContent,
  DropDownOptionsContainer,
  SelectedLabel,
  DropdownArrowIconContainer,
  DropDownLabel,
  DropDownOptionContent,
} from './dropdown-menu-components'
import DropdownUpArrow from '../../assets/images/arrow-up.svg'
import DropdownArrow from '../../assets/images/arrow-down.svg'

type Props = {
  options: any
  dropdownHeaderlabel: string
  onChange: any
  selectedLabel: any
}

export default function DropdownMenu({
  options,
  dropdownHeaderlabel,
  onChange,
  selectedLabel,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded)
  }

  const handleOptionChange = (selectedValue: any) => {
    if (selectedLabel) {
      setIsExpanded(false)
    }
    onChange(selectedValue)
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
    <DropDownContainer id="dropdown-container" ref={dropdownRef}>
      {dropdownHeaderlabel !== '' && <DropDownLabel>{dropdownHeaderlabel || ''}</DropDownLabel>}
      <DropDownHeader onClick={toggleDropdown}>
        <SelectedLabel>{selectedLabel || ''}</SelectedLabel>
        <DropdownArrowIconContainer>
          <img src={isExpanded ? DropdownUpArrow : DropdownArrow} alt="dropdownarrow.." />
        </DropdownArrowIconContainer>
      </DropDownHeader>

      {isExpanded && (
        <DropDownContent>
          {options.length === 0 ? (
            <DropDownOptionsContainer className="no-options">No options.</DropDownOptionsContainer>
          ) : (
            <DropDownOptionsContainer>
              {options.map((option: any) => (
                <DropDownOptionContent
                  key={option.value}
                  onClick={() => handleOptionChange(option)}
                >
                  {option.label}
                </DropDownOptionContent>
              ))}
            </DropDownOptionsContainer>
          )}
        </DropDownContent>
      )}
    </DropDownContainer>
  )
}
