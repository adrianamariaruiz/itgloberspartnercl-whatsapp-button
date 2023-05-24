import React from 'react'
import PropTypes from 'prop-types'
import { useCssHandles } from 'vtex.css-handles'

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number,
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {

  const CSS_HANDLES = ['whatsapp_btn', 'image_btn']
  const handles = useCssHandles(CSS_HANDLES)

  const formatMessage = message.replace(/ /g, '%20')
  console.log('mensaje formateado', formatMessage)

  return (
    <>
      <div className={`fixed bottom-2 right-2 flex flexColumn z-999 ${handles.whatsapp_btn}`}>
        <a
          href={`https://wa.me/${phone}?text=${formatMessage}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={logo}
            alt="logo de whatsapp"
            height={height}
            width={width}
            className={`${handles.image_btn}`}
          />
        </a>
      </div>
    </>
  )
}

WhatsappButton.PoropTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: 'my-icon.png',
  phone: '3003111000',
  message: 'Te estás comunicando con lilipink',
  height: 50,
  width: 50,
}

WhatsappButton.schema = {
  title: 'Whatsapp button',
  type: 'object',
  properties: {
    logo: {
      title: 'whatsapp icon',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Phone',
      description: 'Add a number',
      type: 'string',
    },
    message: {
      title: 'Message',
      description: 'Add the message the customer will see',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'width',
      description: 'width logo',
      type: 'number',
    },
    height: {
      title: 'height',
      description: 'height logo',
      type: 'number',
    },
  },
}

export default WhatsappButton
