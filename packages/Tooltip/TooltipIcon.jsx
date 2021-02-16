import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { buttons } from '@tds/shared-styles'
import { safeRest } from '@tds/util-helpers'
import A11yContent from '@tds/core-a11y-content'

const TooltipIconClickable = styled.button(buttons.noStyle, { display: 'flex' })

const mobileDeviceTapArea = 32 // https://www.w3.org/TR/mobile-accessibility-mapping/#touch-target-size-and-spacing
const touchAreaStyles = iconSize => {
  const length = (mobileDeviceTapArea - iconSize) / 2

  return {
    padding: `${length}px`,
    margin: `-${length}px`,
  }
}

const TooltipIcon = ({ a11yText, onClick, ...rest }) => {
  return (
    <TooltipIconClickable {...safeRest(rest)} onClick={onClick} style={touchAreaStyles(24)}>
      <>
        <A11yContent>{a11yText}</A11yContent>
        <svg width="24px" height="24px" viewBox="0 0 22 22">
          <path d="M10.9995305,0 C17.0650958,0 22,4.93396508 22,10.9995305 C22,17.0650958 17.0650958,22 10.9995305,22 C4.93396508,22 0,17.0650958 0,10.9995305 C0,4.93396508 4.93396508,0 10.9995305,0 Z M10.9995305,14.4580015 C10.3543774,14.4580015 9.83036667,14.9820122 9.83036667,15.6281043 C9.83036667,16.2741964 10.3543774,16.7972681 10.9995305,16.7972681 C11.6456226,16.7972681 12.1696333,16.2741964 12.1696333,15.6281043 C12.1696333,14.9820122 11.6456226,14.4580015 10.9995305,14.4580015 Z M10.9554873,5.45271695 C10.4192684,5.45271695 9.93188202,5.54380843 9.49802365,5.72505229 C9.0622871,5.90535707 8.69228668,6.1560934 8.38426602,6.47820037 C8.07718445,6.80124643 7.83677808,7.18157681 7.66680326,7.62200879 C7.49401118,8.06150169 7.4038588,8.5441926 7.39446792,9.07289879 L7.39446792,9.07289879 L9.54967345,9.07289879 L9.55499984,8.87817022 C9.56569663,8.68664041 9.5926367,8.50475093 9.63700858,8.33289794 C9.695232,8.10282153 9.78538439,7.90279592 9.90840483,7.73188202 C10.0304862,7.56096811 10.1863747,7.42386136 10.3770094,7.32150083 C10.5676442,7.21820122 10.7949033,7.1674905 11.0578478,7.1674905 C11.4485081,7.1674905 11.7546506,7.27548555 11.9743971,7.48959747 C12.1941435,7.70558757 12.3049558,8.03708541 12.3049558,8.48596918 C12.3134076,8.75079182 12.2673923,8.97053827 12.1650318,9.14614761 C12.0626713,9.32175695 11.9274427,9.48234089 11.7612242,9.62977761 C11.5959448,9.77627524 11.414701,9.92277287 11.2193708,10.0683314 C11.0231015,10.2157681 10.8390404,10.3885602 10.662492,10.5895249 C10.4868827,10.7895505 10.3328723,11.0318351 10.200461,11.3145004 C10.0699279,11.5981048 9.98822726,11.9502625 9.95911555,12.3700346 L9.95911555,12.3700346 L9.95911555,13.030213 L11.9368336,13.030213 L11.9368336,12.4723951 L11.9672525,12.3024578 C12.0168062,12.0836881 12.1023008,11.8961711 12.2232552,11.7399069 C12.3753874,11.5445768 12.5472404,11.3708456 12.7425705,11.2196525 C12.9388398,11.0684595 13.1463781,10.9172664 13.3670636,10.7660733 C13.5868101,10.6139412 13.7868357,10.4308191 13.9671405,10.2157681 C14.1474453,10.0007171 14.3005165,9.74246809 14.4207197,9.43914287 C14.5437401,9.13581765 14.6047808,8.75079182 14.6047808,8.28124813 C14.6047808,7.99764374 14.5437401,7.69244035 14.4207197,7.36563794 C14.3005165,7.03789644 14.0967345,6.73363213 13.8131301,6.44908866 C13.5304648,6.16548427 13.155769,5.92883425 12.6927989,5.73819951 C12.2288897,5.54850386 11.6494728,5.45271695 10.9554873,5.45271695 Z" />
        </svg>
      </>
    </TooltipIconClickable>
  )
}

TooltipIcon.propTypes = {
  /**
   * Pass a handler to the icon to make it interactive. Wraps the icon with a `<button>`.
   */
  onClick: PropTypes.func,
  /**
   * A description of the icon for screen readers.
   */
  a11yText: PropTypes.string.isRequired,
}

TooltipIcon.defaultProps = {
  onClick: undefined,
}

export default TooltipIcon