import { css } from '@emotion/css'
import { ThemeContextType } from '../../core/globalVariables/themeContext'
import { PiWidthType } from './sideDrawer'

function getwidth(width: PiWidthType | undefined) {
  switch (width) {
    case 'wide': {
      return 80
    }
    case 'narrow': {
      return 30
    }
    case 'medium': {
      return 50
    }
    case 'extended': {
      return 60
    }
    case 'full': {
      return 100
    }
    default: {
      return 100
    }
  }
}

const PiSideDrawerClass = (props: ThemeContextType, width: PiWidthType | undefined) => css`

/*height:100%;*/
.side-drawer {
  height: 100%;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  width: ${getwidth(width)}%;
  z-index: 200;
  transform: translateX(100%);
  transition: transform 0.3s ease-out;
  background: ${
    props.white
  };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             )
}

.side-drawer.open { 
  transform: translateX(0);
}
.backdrop{
    position:fixed;
    width:100%;
    height:100%;
    background-color: rgba(9, 30, 66, 0.54);
    z-index: 100;
    top:0;
    right:0;
  }


`
export default PiSideDrawerClass
